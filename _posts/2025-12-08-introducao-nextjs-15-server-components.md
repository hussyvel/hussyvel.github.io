---
layout: post
title: "Introdução ao Next.js 15 e React Server Components"
date: 2025-12-08 10:00:00 -0300
categories: [react, nextjs]
tags: [react, nextjs, server-components, javascript, tutorial]
author: Hussyvel
lang: pt
permalink: /blog/:year/:month/:day/:title/
---

# Introdução ao Next.js 15 e React Server Components

O Next.js 15 trouxe mudanças significativas no ecossistema React, especialmente com a estabilização dos **React Server Components (RSC)**. Neste artigo, vamos explorar o que são Server Components, por que eles importam e como começar a usá-los.

## O que são React Server Components?

React Server Components são componentes React que são renderizados **exclusivamente no servidor**. Diferente do Server-Side Rendering (SSR) tradicional, eles nunca são enviados para o cliente, resultando em:

- ✅ **Bundle JavaScript menor** - Componentes server não vão para o bundle do cliente
- ✅ **Acesso direto a dados** - Consulte bancos de dados diretamente, sem APIs
- ✅ **Melhor performance** - Menos JavaScript para o navegador processar
- ✅ **Segurança aprimorada** - Código sensível nunca é exposto ao cliente

## Server vs Client Components

### Server Components (Padrão no Next.js 15)

```jsx
// app/posts/page.jsx
// Este é um Server Component por padrão
import { db } from '@/lib/database'

export default async function PostsPage() {
  // Você pode usar async/await diretamente!
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

Para componentes que precisam de interatividade, use a diretiva `'use client'`:

```jsx
// components/like-button.jsx
'use client'

import { useState } from 'react'

export function LikeButton({ postId }) {
  const [likes, setLikes] = useState(0)

  return (
    <button onClick={() => setLikes(likes + 1)}>
      ❤️ {likes} curtidas
    </button>
  )
}
```

## Quando usar cada um?

### Use Server Components quando:
- Buscar dados
- Acessar recursos do backend
- Manter código sensível (API keys, tokens)
- Reduzir bundle JavaScript

### Use Client Components quando:
- Precisar de interatividade (onClick, onChange)
- Usar hooks (useState, useEffect)
- Usar APIs do navegador (localStorage, window)

## Exemplo Prático: Blog com Next.js 15

Vamos criar uma página de blog que combina ambos:

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
            {new Date(post.createdAt).toLocaleDateString('pt-BR')}
          </time>
          <p className="mt-4">{post.content}</p>

          {/* Client Component para interatividade */}
          <LikeButton postId={post.id} />
        </article>
      ))}
    </div>
  )
}
```

## Melhorias de Performance

Com Server Components, você pode:

### 1. Eliminar Waterfalls de Requisições

**Antes (Client-side):**
```jsx
// ❌ Múltiplas requisições sequenciais
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

**Agora (Server Component):**
```jsx
// ✅ Queries paralelas no servidor
async function BlogPost({ id }) {
  const [post, author] = await Promise.all([
    db.post.findUnique({ where: { id } }),
    db.author.findUnique({ where: { id: post.authorId } })
  ])

  return (
    <article>
      <h1>{post.title}</h1>
      <p>Por {author.name}</p>
      <div>{post.content}</div>
    </article>
  )
}
```

### 2. Reduzir Bundle Size

Bibliotecas pesadas (markdown parsers, formatadores de data, syntax highlighters) podem rodar apenas no servidor:

```jsx
// app/blog/[slug]/page.jsx
import { remark } from 'remark'
import html from 'remark-html'

export default async function Post({ params }) {
  const post = await db.post.findUnique({
    where: { slug: params.slug }
  })

  // remark NÃO vai para o bundle do cliente!
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

## Conclusão

React Server Components representam uma mudança de paradigma no desenvolvimento React. Ao mover a computação para o servidor, conseguimos:

- **Aplicações mais rápidas** com menos JavaScript
- **Melhor DX** com acesso direto a dados
- **Maior segurança** mantendo código sensível no servidor

O Next.js 15 torna Server Components o padrão, facilitando a construção de aplicações performáticas por design.

## Próximos Passos

Nos próximos artigos, vamos explorar:

1. Streaming e Suspense com Server Components
2. Mutations e Server Actions
3. Caching strategies no Next.js 15
4. Migração de apps existentes para Server Components

---

**Gostou do conteúdo?** Deixe seu comentário abaixo e compartilhe com outros desenvolvedores!
