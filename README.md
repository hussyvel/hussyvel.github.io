# Tech Blog

Um blog moderno sobre tecnologia, desenvolvimento e inovação, construído com Jekyll e hospedado no GitHub Pages.

## 🚀 Características

- ✨ Design moderno e responsivo
- 📱 Mobile-friendly
- 🎨 CSS customizado com variáveis CSS
- 📝 Sistema de posts com categorias e tags
- 🔍 SEO otimizado
- 📊 Suporte a RSS feed
- 🌐 Sitemap automático
- 🌍 **Trilíngue** - Suporte completo para Português, Inglês e Francês
- 💬 **Comentários** - Sistema de comentários integrado (Giscus, Disqus ou Utterances)
- 📖 **Guia Detalhado** - Instruções completas de configuração em [SETUP_LOCAL.md](SETUP_LOCAL.md)

## 🛠️ Tecnologias Utilizadas

- **Jekyll** - Gerador de sites estáticos
- **GitHub Pages** - Hospedagem gratuita
- **Markdown** - Escrita de posts
- **Liquid** - Template engine
- **CSS3** - Estilização moderna

## 📁 Estrutura do Projeto

```
hussyvel.github.io/
├── _includes/          # Componentes reutilizáveis (header, footer)
├── _layouts/           # Templates de páginas
│   ├── default.html    # Layout base
│   ├── home.html       # Layout da página inicial
│   └── post.html       # Layout de posts
├── _posts/             # Posts do blog (formato: YYYY-MM-DD-titulo.md)
├── assets/             # Arquivos estáticos
│   ├── css/           # Estilos
│   ├── js/            # JavaScripts
│   └── images/        # Imagens
├── eventos/            # Landing page de eventos
├── _config.yml         # Configurações do Jekyll
├── index.html          # Página inicial
├── sobre.md            # Página sobre
├── blog.html           # Listagem de todos os posts
└── Gemfile             # Dependências Ruby
```

## 🚀 Como Usar

### Pré-requisitos

Para rodar localmente, você precisa ter instalado:

- Ruby (versão 2.5 ou superior)
- Bundler
- Git

### Instalação Local

1. Clone o repositório:
```bash
git clone https://github.com/hussyvel/hussyvel.github.io.git
cd hussyvel.github.io
```

2. Instale as dependências:
```bash
bundle install
```

3. Execute o servidor local:
```bash
bundle exec jekyll serve
```

4. Acesse no navegador:
```
http://localhost:4000
```

### Publicação no GitHub Pages

O GitHub Pages compila automaticamente quando você faz push para a branch principal:

```bash
git add .
git commit -m "Sua mensagem de commit"
git push origin main
```

Aguarde alguns minutos e seu site estará disponível em `https://hussyvel.github.io`

## ✍️ Como Criar um Novo Post

1. Crie um novo arquivo em `_posts/` seguindo o padrão:
   ```
   YYYY-MM-DD-titulo-do-post.md
   ```

2. Adicione o front matter no início do arquivo:
   ```yaml
   ---
   layout: post
   title: "Título do Post"
   date: 2025-12-07 10:00:00 -0300
   categories: [categoria1, categoria2]
   tags: [tag1, tag2, tag3]
   author: Seu Nome
   ---
   ```

3. Escreva o conteúdo em Markdown

4. Faça commit e push:
   ```bash
   git add .
   git commit -m "Adiciona novo post: Título do Post"
   git push
   ```

## 🎨 Personalização

### Alterar Cores

Edite as variáveis CSS em `assets/css/style.css`:

```css
:root {
    --primary-color: #2563eb;
    --text-primary: #1f2937;
    /* ... outras variáveis */
}
```

### Configurações do Site

Edite `_config.yml`:

```yaml
title: Tech Blog
description: Sua descrição aqui
author: Seu Nome
email: seu-email@exemplo.com
github_username: seu-usuario
```

## 📝 Markdown Features

O blog suporta todas as features do Markdown, incluindo:

- **Negrito** e *itálico*
- [Links](https://example.com)
- Listas numeradas e com marcadores
- `Código inline`
- Blocos de código com syntax highlighting
- Imagens
- Citações
- E muito mais!

### Exemplo de Código

\`\`\`javascript
const saudacao = (nome) => {
  console.log(`Olá, ${nome}!`);
};
\`\`\`

## 🌍 Multilíngue (Português / Inglês / Francês)

O blog suporta três idiomas: Português (padrão), Inglês e Francês.

### Estrutura de URLs

- **Português**: `https://hussyvel.github.io/` (raiz)
- **Inglês**: `https://hussyvel.github.io/en/`
- **Francês**: `https://hussyvel.github.io/fr/`

### Criar Posts em Outros Idiomas

**Todos os posts ficam em `_posts/`** independente do idioma. O idioma é controlado pelo parâmetro `lang` no front matter.

#### Post em Inglês:

```yaml
---
layout: post
title: "Your Post Title"
date: 2025-12-07 10:00:00 -0300
categories: [technology]
tags: [programming, web]
author: Your Name
lang: en
permalink: /en/blog/:year/:month/:day/:title/
---
```

#### Post em Francês:

```yaml
---
layout: post
title: "Titre de l'Article"
date: 2025-12-07 10:00:00 -0300
categories: [technologie]
tags: [programmation, web]
author: Votre Nom
lang: fr
permalink: /fr/blog/:year/:month/:day/:title/
---
```

### Seletor de Idioma

O seletor de idioma aparece automaticamente no header do site (bandeiras 🇧🇷 PT / 🇺🇸 EN / 🇨🇦 FR).

## 💬 Sistema de Comentários

O blog suporta três sistemas de comentários: **Giscus** (recomendado), **Disqus** e **Utterances**.

### Ativar Comentários com Giscus (Recomendado)

**Giscus** é gratuito, open source e usa GitHub Discussions. Sem anúncios!

#### Passo 1: Ativar GitHub Discussions

1. Vá para: https://github.com/hussyvel/hussyvel.github.io/settings
2. Na seção "Features", marque "Discussions"
3. Clique em "Set up discussions"

#### Passo 2: Instalar Giscus App

1. Instale o app: https://github.com/apps/giscus
2. Autorize para o repositório `hussyvel/hussyvel.github.io`

#### Passo 3: Configurar Giscus

1. Acesse: https://giscus.app/
2. Preencha:
   - **Repositório**: `hussyvel/hussyvel.github.io`
   - **Page ↔️ Discussions Mapping**: "Discussion title contains page `pathname`"
   - **Discussion Category**: "Comments" (ou crie uma nova categoria)
3. Copie os valores gerados (`repo-id` e `category-id`)

#### Passo 4: Atualizar _config.yml

Abra `_config.yml` e atualize:

```yaml
comments:
  enabled: true  # Mude para true
  provider: "giscus"

  giscus:
    repo: "hussyvel/hussyvel.github.io"
    repo_id: "COLE_AQUI_O_REPO_ID"  # Do giscus.app
    category: "Comments"
    category_id: "COLE_AQUI_O_CATEGORY_ID"  # Do giscus.app
```

#### Passo 5: Commit e Push

```bash
git add _config.yml
git commit -m "Ativa sistema de comentários Giscus"
git push
```

Pronto! Os comentários aparecerão automaticamente em todos os posts. 🎉

### Alternativas

#### Disqus
```yaml
comments:
  enabled: true
  provider: "disqus"
  disqus:
    shortname: "seu-shortname-disqus"
```
*Nota: A versão grátis do Disqus exibe anúncios*

#### Utterances
```yaml
comments:
  enabled: true
  provider: "utterances"
  utterances:
    repo: "hussyvel/hussyvel.github.io"
```
*Nota: Usa GitHub Issues para comentários*

## 🔧 Comandos Úteis

```bash
# Servir localmente
bundle exec jekyll serve

# Servir com rascunhos
bundle exec jekyll serve --drafts

# Compilar para produção
bundle exec jekyll build

# Limpar arquivos gerados
bundle exec jekyll clean
```

## 📦 Plugins Incluídos

- **jekyll-feed** - Gera RSS feed automaticamente
- **jekyll-seo-tag** - Otimização SEO
- **jekyll-sitemap** - Gera sitemap.xml

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer fork do projeto
2. Criar uma branch para sua feature
3. Fazer commit das mudanças
4. Fazer push para a branch
5. Abrir um Pull Request

## 📄 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

## 📧 Contato

- **GitHub**: [@hussyvel](https://github.com/hussyvel)
- **Email**: seu-email@exemplo.com

---

Desenvolvido com ❤️ usando Jekyll e GitHub Pages
