# Blog Pessoal / Personal Blog / Blog Personnel

🇧🇷 🇺🇸 🇫🇷 Blog estático multilíngue construído com Next.js 14 e React 18, hospedado no GitHub Pages.

Multilingual static blog built with Next.js 14 and React 18, hosted on GitHub Pages.

## 🌍 Idiomas Suportados / Supported Languages / Langues Supportées

- 🇧🇷 **Português** - `/` (padrão)
- 🇺🇸 **English** - `/en`
- 🇫🇷 **Français** - `/fr`

## 🚀 Tecnologias / Technologies

- **Next.js 14** - Framework React com App Router
- **React 18** - Biblioteca para interfaces de usuário
- **TypeScript** - Tipagem estática
- **i18n** - Sistema de internacionalização customizado
- **Markdown** - Para escrever posts
- **GitHub Pages** - Hospedagem gratuita
- **GitHub Actions** - Deploy automático

## ✨ Características / Features

- ✅ Blog estático totalmente funcional
- ✅ Suporte para 3 idiomas (PT, EN, FR)
- ✅ Seletor de idioma no navbar
- ✅ Posts em Markdown
- ✅ Design responsivo
- ✅ SEO otimizado
- ✅ Deploy automático no GitHub Pages

## 📦 Instalação / Installation

```bash
npm install
```

## 🛠️ Desenvolvimento / Development

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## 📝 Criar um novo post / Create a new post

### Português (posts/)
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

### English (posts/en/)
1. Create a `.md` file in the `posts/en/` folder
2. Add the frontmatter:

```markdown
---
title: 'Post Title'
date: '2024-12-08'
excerpt: 'Brief description'
---

Post content here...
```

### Français (posts/fr/)
1. Créez un fichier `.md` dans le dossier `posts/fr/`
2. Ajoutez le frontmatter :

```markdown
---
title: 'Titre de l\'article'
date: '2024-12-08'
excerpt: 'Brève description'
---

Contenu de l'article ici...
```

## 🏗️ Build

```bash
npm run build
```

Gera os arquivos estáticos na pasta `out/`.

## 🚢 Deploy

O deploy é automático via GitHub Actions quando você faz push para a branch `main` ou `master`.

## 🗂️ Estrutura do Projeto / Project Structure

```
├── app/
│   ├── (pt)/           # Páginas em português (raiz)
│   ├── en/             # English pages
│   ├── fr/             # Pages françaises
│   └── globals.css     # Estilos globais
├── components/         # Componentes React
├── lib/
│   ├── i18n/          # Sistema de tradução
│   └── posts.ts       # Utilitários de posts
├── posts/
│   ├── (pt)/          # Posts em português
│   ├── en/            # Posts in English
│   └── fr/            # Articles en français
└── public/            # Arquivos estáticos
```

## 📄 Licença / License

MIT
