---
layout: post
title: "Introdução ao Next.js 15 e React Server Components"
date: 2025-12-08 10:00:00 -0300
categories: [react, nextjs]
tags: [react, nextjs, server-components, javascript, tutorial]
author: Hussyvel
lang: pt
---

# Introdução ao Next.js 15 e React Server Components

O Next.js 15 representa uma evolução significativa no ecossistema React, trazendo melhorias substanciais em performance e experiência do desenvolvedor. Uma das features mais revolucionárias são os **React Server Components (RSC)**, que transformam completamente a forma como construímos aplicações React modernas.

## O que são React Server Components?

React Server Components são componentes que são renderizados exclusivamente no servidor. Diferente do Server-Side Rendering (SSR) tradicional, os RSC nunca enviam código JavaScript para o cliente, resultando em bundles menores e aplicações mais rápidas.

### Principais diferenças

**Server Components:**
- Renderizados apenas no servidor
- Sem JavaScript enviado ao cliente
- Acesso direto a recursos do servidor (banco de dados, filesystem)
- Não podem usar hooks como `useState` ou `useEffect`
- Não podem ter event handlers

**Client Components:**
- Renderizados no cliente
- Requerem JavaScript no bundle
- Podem usar todos os hooks do React
- Suportam interatividade completa
- Marcados com a diretiva `'use client'`

## Por que usar Server Components?

### 1. Performance Superior

Com RSC, você pode buscar dados diretamente no componente sem adicionar código JavaScript ao bundle do cliente:

```javascript
// app/users/page.js
// Este é um Server Component por padrão no Next.js 15
async function UsersPage() {
  // Busca de dados diretamente no servidor
  const users = await fetch('https://api.example.com/users')
    .then(res => res.json());

  return (
    <div>
      <h1>Usuários</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UsersPage;
```

### 2. Acesso Direto a Recursos do Servidor

Você pode acessar banco de dados, ler arquivos e usar variáveis de ambiente sensíveis sem expor ao cliente:

```javascript
// app/posts/page.js
import { db } from '@/lib/database';

async function PostsPage() {
  // Acesso direto ao banco de dados
  const posts = await db.query('SELECT * FROM posts ORDER BY created_at DESC');

  return (
    <div>
      <h1>Posts Recentes</h1>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  );
}

export default PostsPage;
```

### 3. Bundles JavaScript Menores

Bibliotecas pesadas usadas apenas no servidor não aumentam o bundle do cliente:

```javascript
// app/analytics/page.js
import { Chart } from 'heavy-chart-library'; // Não vai para o cliente!
import { getAnalyticsData } from '@/lib/analytics';

async function AnalyticsPage() {
  const data = await getAnalyticsData();

  return (
    <div>
      <h1>Analytics</h1>
      {/* Chart é renderizado no servidor como HTML */}
      <Chart data={data} />
    </div>
  );
}

export default AnalyticsPage;
```

## Quando usar Client Components?

Use a diretiva `'use client'` quando precisar de:

- **Interatividade**: Eventos de clique, formulários, etc.
- **Estado**: `useState`, `useReducer`
- **Efeitos**: `useEffect`, `useLayoutEffect`
- **APIs do navegador**: `localStorage`, `window`, etc.
- **Hooks personalizados** que usam funcionalidades acima

### Exemplo de Client Component

```javascript
// components/Counter.js
'use client';

import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Incrementar
      </button>
    </div>
  );
}
```

## Composição de Server e Client Components

Você pode compor Server e Client Components de forma eficiente:

```javascript
// app/dashboard/page.js (Server Component)
import { UserProfile } from '@/components/UserProfile'; // Server Component
import { InteractiveChart } from '@/components/InteractiveChart'; // Client Component
import { db } from '@/lib/database';

async function DashboardPage() {
  const userData = await db.getUserData();
  const chartData = await db.getChartData();

  return (
    <div>
      <h1>Dashboard</h1>
      {/* Server Component - sem JS no cliente */}
      <UserProfile user={userData} />

      {/* Client Component - com interatividade */}
      <InteractiveChart data={chartData} />
    </div>
  );
}

export default DashboardPage;
```

## Novidades do Next.js 15

### 1. Turbopack Estável

O Next.js 15 traz o Turbopack como bundler estável, oferecendo builds até 700x mais rápidos em desenvolvimento:

```bash
# Usando Turbopack
npm run dev --turbo
```

### 2. Async Request APIs

As APIs de request agora são assíncronas, alinhando-se melhor com o modelo de Server Components:

```javascript
// app/product/[id]/page.js
export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = await fetchProduct(id);

  return {
    title: product.name,
    description: product.description,
  };
}

async function ProductPage({ params }) {
  const { id } = await params;
  const product = await fetchProduct(id);

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductPage;
```

### 3. Suporte Aprimorado para Formulários

Server Actions agora são mais robustos e fáceis de usar:

```javascript
// app/contact/page.js
import { submitContactForm } from '@/app/actions';

function ContactPage() {
  return (
    <form action={submitContactForm}>
      <input name="name" placeholder="Nome" required />
      <input name="email" type="email" placeholder="Email" required />
      <textarea name="message" placeholder="Mensagem" required />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default ContactPage;

// app/actions.js
'use server';

export async function submitContactForm(formData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  // Salvar no banco de dados
  await db.saveContactMessage({ name, email, message });

  // Revalidar cache se necessário
  revalidatePath('/contact');
}
```

## Boas Práticas

### 1. Mantenha Server Components quando possível

Por padrão, todos os componentes no Next.js 15 são Server Components. Só adicione `'use client'` quando realmente necessário.

### 2. Busque dados o mais próximo possível de onde são usados

```javascript
// ✅ Bom: Busca dados no componente que os usa
async function UserProfile({ userId }) {
  const user = await fetchUser(userId);
  return <div>{user.name}</div>;
}

// ❌ Evite: Buscar dados muito acima e passar por props
```

### 3. Use streaming para melhor UX

```javascript
// app/feed/page.js
import { Suspense } from 'react';
import { PostsFeed } from '@/components/PostsFeed';
import { Skeleton } from '@/components/Skeleton';

function FeedPage() {
  return (
    <div>
      <h1>Feed</h1>
      <Suspense fallback={<Skeleton />}>
        <PostsFeed />
      </Suspense>
    </div>
  );
}

export default FeedPage;
```

## Conclusão

O Next.js 15 com React Server Components representa uma mudança de paradigma no desenvolvimento web. Ao separar claramente a lógica de servidor e cliente, conseguimos:

- ✅ Aplicações mais rápidas e leves
- ✅ Melhor experiência do desenvolvedor
- ✅ Código mais seguro (credenciais não vão para o cliente)
- ✅ Menor complexidade no gerenciamento de estado

Se você está começando um novo projeto React, o Next.js 15 com RSC deve ser seriamente considerado. A curva de aprendizado inicial é compensada pelos benefícios de longo prazo em performance e manutenibilidade.

## Recursos Adicionais

- [Documentação oficial do Next.js 15](https://nextjs.org/docs)
- [React Server Components RFC](https://github.com/reactjs/rfcs/blob/main/text/0188-server-components.md)
- [Next.js Learn](https://nextjs.org/learn)

---

Gostou do conteúdo? Compartilhe suas experiências com Next.js 15 nos comentários!
