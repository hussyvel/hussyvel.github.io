---
layout: post
title: "Introduction à Next.js 15 et React Server Components"
date: 2025-12-08 10:00:00 -0300
categories: [react, nextjs]
tags: [react, nextjs, server-components, javascript, tutoriel]
author: Hussyvel
lang: fr
---

# Introduction à Next.js 15 et React Server Components

Next.js 15 a apporté des changements significatifs à l'écosystème React, en particulier avec la stabilisation des **React Server Components (RSC)**. Dans cet article, nous allons explorer ce que sont les Server Components, pourquoi ils sont importants et comment commencer à les utiliser.

## Que sont les React Server Components ?

Les React Server Components sont des composants React qui sont rendus **exclusivement sur le serveur**. Contrairement au Server-Side Rendering (SSR) traditionnel, ils ne sont jamais envoyés au client, ce qui résulte en :

- ✅ **Bundle JavaScript plus petit** - Les composants serveur ne vont pas dans le bundle client
- ✅ **Accès direct aux données** - Interrogez les bases de données directement, sans APIs
- ✅ **Meilleures performances** - Moins de JavaScript à traiter par le navigateur
- ✅ **Sécurité renforcée** - Le code sensible n'est jamais exposé au client

## Server vs Client Components

### Server Components (Par défaut dans Next.js 15)

```jsx
// app/posts/page.jsx
// Ceci est un Server Component par défaut
import { db } from '@/lib/database'

export default async function PostsPage() {
  // Vous pouvez utiliser async/await directement !
  const posts = await db.post.findMany()

  return (
    <div>
      <h1>Articles</h1>
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

Pour les composants qui nécessitent de l'interactivité, utilisez la directive `'use client'` :

```jsx
// components/like-button.jsx
'use client'

import { useState } from 'react'

export function LikeButton({ postId }) {
  const [likes, setLikes] = useState(0)

  return (
    <button onClick={() => setLikes(likes + 1)}>
      ❤️ {likes} j'aime
    </button>
  )
}
```

## Quand utiliser chacun ?

### Utilisez Server Components quand :
- Récupération de données
- Accès aux ressources backend
- Conservation de code sensible (clés API, tokens)
- Réduction du bundle JavaScript

### Utilisez Client Components quand :
- Besoin d'interactivité (onClick, onChange)
- Utilisation de hooks (useState, useEffect)
- Utilisation d'APIs du navigateur (localStorage, window)

## Exemple Pratique : Blog avec Next.js 15

Créons une page de blog qui combine les deux :

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
            {new Date(post.createdAt).toLocaleDateString('fr-FR')}
          </time>
          <p className="mt-4">{post.content}</p>

          {/* Client Component pour l'interactivité */}
          <LikeButton postId={post.id} />
        </article>
      ))}
    </div>
  )
}
```

## Améliorations de Performance

Avec les Server Components, vous pouvez :

### 1. Éliminer les Cascades de Requêtes

**Avant (Côté client) :**
```jsx
// ❌ Plusieurs requêtes séquentielles
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

**Maintenant (Server Component) :**
```jsx
// ✅ Requêtes parallèles sur le serveur
async function BlogPost({ id }) {
  const [post, author] = await Promise.all([
    db.post.findUnique({ where: { id } }),
    db.author.findUnique({ where: { id: post.authorId } })
  ])

  return (
    <article>
      <h1>{post.title}</h1>
      <p>Par {author.name}</p>
      <div>{post.content}</div>
    </article>
  )
}
```

### 2. Réduire la Taille du Bundle

Les bibliothèques lourdes (parsers markdown, formateurs de dates, syntax highlighters) peuvent s'exécuter uniquement sur le serveur :

```jsx
// app/blog/[slug]/page.jsx
import { remark } from 'remark'
import html from 'remark-html'

export default async function Post({ params }) {
  const post = await db.post.findUnique({
    where: { slug: params.slug }
  })

  // remark n'ira PAS dans le bundle client !
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

Les React Server Components représentent un changement de paradigme dans le développement React. En déplaçant le calcul vers le serveur, nous obtenons :

- **Des applications plus rapides** avec moins de JavaScript
- **Meilleure DX** avec accès direct aux données
- **Sécurité accrue** en gardant le code sensible sur le serveur

Next.js 15 fait des Server Components le standard par défaut, facilitant la construction d'applications performantes par conception.

## Prochaines Étapes

Dans les prochains articles, nous explorerons :

1. Streaming et Suspense avec les Server Components
2. Mutations et Server Actions
3. Stratégies de cache dans Next.js 15
4. Migration d'applications existantes vers les Server Components

---

**Vous avez aimé le contenu ?** Laissez votre commentaire ci-dessous et partagez avec d'autres développeurs !
