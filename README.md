# Blog Pessoal

Blog estático construído com Next.js 14 e React 18, hospedado no GitHub Pages.

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **React 18** - Biblioteca para interfaces de usuário
- **TypeScript** - Tipagem estática
- **Markdown** - Para escrever posts
- **GitHub Pages** - Hospedagem gratuita
- **GitHub Actions** - Deploy automático

## 📦 Instalação

```bash
npm install
```

## 🛠️ Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## 📝 Criar um novo post

1. Crie um arquivo `.md` na pasta `posts/`
2. Adicione o frontmatter:

```markdown
---
title: 'Título do Post'
date: '2024-12-08'
excerpt: 'Breve descrição'
---

Conteúdo do post aqui...
```

## 🏗️ Build

```bash
npm run build
```

Gera os arquivos estáticos na pasta `out/`.

## 🚢 Deploy

O deploy é automático via GitHub Actions quando você faz push para a branch `main` ou `master`.

## 📄 Licença

MIT
