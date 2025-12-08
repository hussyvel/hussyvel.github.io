---
layout: post
title: "Introdução ao Next.js 15 e React Server Components"
date: 2025-12-08 10:00:00 -0300
categories: [react, nextjs]
tags: [react, nextjs, server-components, javascript]
author: Hussyvel
permalink: /blog/:year/:month/:day/:title/
---

# Introdução ao Next.js 15 e React Server Components

O Next.js 15 trouxe mudanças significativas no ecossistema React, especialmente com a estabilização dos **React Server Components (RSC)**. Neste artigo, vamos explorar o que são Server Components e como usá-los.

## O que são React Server Components?

React Server Components são componentes que renderizam **exclusivamente no servidor**. Diferente do SSR tradicional, eles nunca são enviados para o cliente, resultando em:

- ✅ Bundle JavaScript menor
- ✅ Acesso direto a bancos de dados
- ✅ Melhor performance
- ✅ Maior segurança

## Server vs Client Components

### Server Component (Padrão)

```jsx
// app/posts/page.jsx
import { db } from '@/lib/database'

export default async function PostsPage() {
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

### Client Component

Para interatividade, use `'use client'`:

```jsx
'use client'
import { useState } from 'react'

export function LikeButton({ postId }) {
  const [likes, setLikes] = useState(0)

  return (
    <button onClick={() => setLikes(likes + 1)}>
      ❤️ {likes}
    </button>
  )
}
```

## Quando usar cada um?

**Server Components:**
- Buscar dados do backend
- Acessar bancos de dados
- Reduzir bundle JavaScript

**Client Components:**
- Interatividade (onClick, onChange)
- Hooks (useState, useEffect)
- APIs do navegador

## Exemplo Prático

```jsx
// app/blog/page.jsx
import { db } from '@/lib/database'
import { LikeButton } from '@/components/like-button'

export default async function BlogPage() {
  const posts = await db.post.findMany({
    orderBy: { createdAt: 'desc' },
    take: 10
  })

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1>Blog</h1>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <time>{new Date(post.createdAt).toLocaleDateString('pt-BR')}</time>
          <p>{post.content}</p>
          <LikeButton postId={post.id} />
        </article>
      ))}
    </div>
  )
}
```

## Benefícios de Performance

### 1. Eliminar Waterfalls de Requisições

```jsx
// ❌ Antes (Client-side)
function BlogPost({ id }) {
  const [post, setPost] = useState(null)

  useEffect(() => {
    fetch(`/api/posts/${id}`)
      .then(res => res.json())
      .then(setPost)
  }, [id])
}

// ✅ Agora (Server Component)
async function BlogPost({ id }) {
  const post = await db.post.findUnique({ where: { id } })

  return <article>{post.title}</article>
}
```

### 2. Reduzir Bundle Size

Bibliotecas pesadas (markdown parsers, formatadores) rodam apenas no servidor:

```jsx
import { remark } from 'remark'
import html from 'remark-html'

export default async function Post({ params }) {
  const post = await db.post.findUnique({ where: { slug: params.slug } })

  // remark não vai para o cliente!
  const content = await remark().use(html).process(post.markdown)

  return <article dangerouslySetInnerHTML={{ __html: content }} />
}
```

## Conclusão

React Server Components representam uma mudança importante no React. Com Next.js 15, conseguimos:

- Aplicações mais rápidas
- Melhor experiência de desenvolvimento
- Maior segurança

Nos próximos artigos, vamos explorar:

1. Streaming e Suspense
2. Server Actions
3. Caching strategies
4. Migração de apps existentes

---

**Gostou do conteúdo?** Deixe seu comentário abaixo!
