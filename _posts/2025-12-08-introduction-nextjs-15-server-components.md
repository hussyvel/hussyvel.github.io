---
layout: post
title: "Introduction to Next.js 15 and React Server Components"
date: 2025-12-08 10:00:00 -0300
categories: [react, nextjs]
tags: [react, nextjs, server-components, javascript, tutorial]
author: Hussyvel
lang: en
---

# Introduction to Next.js 15 and React Server Components

Next.js 15 brought significant changes to the React ecosystem, especially with the stabilization of **React Server Components (RSC)**. In this article, we'll explore what Server Components are, why they matter, and how to start using them.

## What are React Server Components?

React Server Components are React components that render **exclusively on the server**. Unlike traditional Server-Side Rendering (SSR), they're never sent to the client, resulting in:

- ✅ **Smaller JavaScript bundle** - Server components don't go to the client bundle
- ✅ **Direct data access** - Query databases directly, without APIs
- ✅ **Better performance** - Less JavaScript for the browser to process
- ✅ **Enhanced security** - Sensitive code is never exposed to the client

## Server vs Client Components

### Server Components (Default in Next.js 15)

```jsx
// app/posts/page.jsx
// This is a Server Component by default
import { db } from '@/lib/database'

export default async function PostsPage() {
  // You can use async/await directly!
  const posts = await db.post.findMany()

  return (
    <div>
      <h1>Posts</h1>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  )
}
```

### Client Components

For components that need interactivity, use the `'use client'` directive:

```jsx
// components/like-button.jsx
'use client'

import { useState } from 'react'

export function LikeButton({ postId }) {
  const [likes, setLikes] = useState(0)

  return (
    <button onClick={() => setLikes(likes + 1)}>
      ❤️ {likes} likes
    </button>
  )
}
```

## When to use each?

### Use Server Components when:
- Fetching data
- Accessing backend resources
- Keeping sensitive code (API keys, tokens)
- Reducing JavaScript bundle

### Use Client Components when:
- Need interactivity (onClick, onChange)
- Using hooks (useState, useEffect)
- Using browser APIs (localStorage, window)

## Practical Example: Blog with Next.js 15

Let's create a blog page that combines both:

```jsx
// app/blog/page.jsx (Server Component)
import { db } from '@/lib/database'
import { LikeButton } from '@/components/like-button'

export default async function BlogPage() {
  const posts = await db.post.findMany({
    orderBy: { createdAt: 'desc' },
    take: 10
  })

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>

      {posts.map(post => (
        <article key={post.id} className="mb-8 border-b pb-8">
          <h2 className="text-2xl font-semibold mb-2">
            {post.title}
          </h2>
          <time className="text-gray-600">
            {new Date(post.createdAt).toLocaleDateString('en-US')}
          </time>
          <p className="mt-4">{post.content}</p>

          {/* Client Component for interactivity */}
          <LikeButton postId={post.id} />
        </article>
      ))}
    </div>
  )
}
```

## Performance Improvements

With Server Components, you can:

### 1. Eliminate Request Waterfalls

**Before (Client-side):**
```jsx
// ❌ Multiple sequential requests
function BlogPost({ id }) {
  const [post, setPost] = useState(null)
  const [author, setAuthor] = useState(null)

  useEffect(() => {
    fetch(`/api/posts/${id}`)
      .then(res => res.json())
      .then(data => {
        setPost(data)
        return fetch(`/api/authors/${data.authorId}`)
      })
      .then(res => res.json())
      .then(setAuthor)
  }, [id])

  // ...
}
```

**Now (Server Component):**
```jsx
// ✅ Parallel queries on the server
async function BlogPost({ id }) {
  const [post, author] = await Promise.all([
    db.post.findUnique({ where: { id } }),
    db.author.findUnique({ where: { id: post.authorId } })
  ])

  return (
    <article>
      <h1>{post.title}</h1>
      <p>By {author.name}</p>
      <div>{post.content}</div>
    </article>
  )
}
```

### 2. Reduce Bundle Size

Heavy libraries (markdown parsers, date formatters, syntax highlighters) can run only on the server:

```jsx
// app/blog/[slug]/page.jsx
import { remark } from 'remark'
import html from 'remark-html'

export default async function Post({ params }) {
  const post = await db.post.findUnique({
    where: { slug: params.slug }
  })

  // remark won't go to the client bundle!
  const processedContent = await remark()
    .use(html)
    .process(post.markdown)

  return (
    <article>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: processedContent }} />
    </article>
  )
}
```

## Conclusion

React Server Components represent a paradigm shift in React development. By moving computation to the server, we achieve:

- **Faster applications** with less JavaScript
- **Better DX** with direct data access
- **Enhanced security** keeping sensitive code on the server

Next.js 15 makes Server Components the default, making it easier to build performant applications by design.

## Next Steps

In upcoming articles, we'll explore:

1. Streaming and Suspense with Server Components
2. Mutations and Server Actions
3. Caching strategies in Next.js 15
4. Migrating existing apps to Server Components

---

**Enjoyed the content?** Leave your comment below and share with other developers!
