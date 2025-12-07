# 🚀 Guia de Configuração do Ambiente Local

Este guia irá ajudá-lo a configurar o ambiente de desenvolvimento Jekyll no seu computador local.

---

## 📋 Pré-requisitos

### 1. Instalar Ruby

O Jekyll requer Ruby 2.5.0 ou superior. Recomendamos Ruby 3.x.

#### **Windows:**

1. Baixe o [RubyInstaller](https://rubyinstaller.org/downloads/)
2. Execute o instalador e marque "Add Ruby executables to your PATH"
3. Na última etapa, execute `ridk install` para instalar MSYS2
4. Escolha opção 3 (MSYS2 and MINGW development toolchain)

#### **macOS:**

```bash
# Usando Homebrew
brew install ruby

# Adicione ao PATH (adicionar ao ~/.zshrc ou ~/.bash_profile)
echo 'export PATH="/usr/local/opt/ruby/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

#### **Linux (Ubuntu/Debian):**

```bash
sudo apt-get update
sudo apt-get install ruby-full build-essential zlib1g-dev

# Configurar para instalar gems no diretório do usuário
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

#### **Linux (Fedora/CentOS/RHEL):**

```bash
sudo dnf install ruby ruby-devel @development-tools
```

### 2. Verificar instalação do Ruby

```bash
ruby -v
# Deve mostrar: ruby 3.x.x ou superior
```

---

## 🔧 Configuração do Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/hussyvel/hussyvel.github.io.git
cd hussyvel.github.io
```

### 2. Instale o Bundler

```bash
gem install bundler
```

### 3. Instale as dependências do projeto

```bash
bundle install
```

Este comando irá instalar todas as gems necessárias listadas no `Gemfile`, incluindo:
- Jekyll
- GitHub Pages
- Plugins do Jekyll
- Temas

**Nota:** A instalação pode demorar alguns minutos na primeira vez.

---

## 🏃 Rodando o Blog Localmente

### Iniciar o servidor de desenvolvimento

```bash
bundle exec jekyll serve
```

Ou simplesmente:

```bash
jekyll serve
```

O servidor iniciará em: **http://localhost:4000**

### Opções úteis:

```bash
# Rodar em porta diferente
jekyll serve --port 3000

# Habilitar live reload
jekyll serve --livereload

# Modo de desenvolvimento (com drafts)
jekyll serve --drafts

# Rodar em modo incremental (builds mais rápidos)
jekyll serve --incremental

# Rodar e abrir automaticamente no navegador
jekyll serve --open-url
```

---

## 🌐 Acessando o Blog

Após iniciar o servidor, acesse:

- **Português:** http://localhost:4000/
- **Inglês:** http://localhost:4000/en/
- **Francês:** http://localhost:4000/fr/

### Páginas disponíveis:

| Idioma | Home | About | Blog |
|--------|------|-------|------|
| 🇧🇷 PT | `/` | `/sobre/` | `/blog/` |
| 🇺🇸 EN | `/en/` | `/en/about/` | `/en/blog/` |
| 🇨🇦 FR | `/fr/` | `/fr/about/` | `/fr/blog/` |

---

## 📝 Criando Novos Posts

### 1. Estrutura de um post

Crie um arquivo em `_posts/` seguindo o formato: `YYYY-MM-DD-titulo-do-post.md`

### 2. Front Matter (cabeçalho do post)

```yaml
---
layout: post
title: "Título do Post"
date: 2025-12-07 10:00:00 -0300
categories: [categoria1, categoria2]
tags: [tag1, tag2, tag3]
author: Seu Nome
lang: pt  # ou 'en' ou 'fr'
permalink: /blog/:year/:month/:day/:title/  # para PT
# permalink: /en/blog/:year/:month/:day/:title/  # para EN
# permalink: /fr/blog/:year/:month/:day/:title/  # para FR
---

# Conteúdo do post aqui...
```

### 3. Exemplo completo:

**Arquivo:** `_posts/2025-12-07-meu-primeiro-post.md`

```markdown
---
layout: post
title: "Meu Primeiro Post"
date: 2025-12-07 14:30:00 -0300
categories: [tutorial]
tags: [jekyll, blog, tutorial]
author: Hussyvel
lang: pt
permalink: /blog/:year/:month/:day/:title/
---

# Meu Primeiro Post

Este é meu primeiro post no blog!

## Seções

Você pode usar markdown normalmente:

- Listas
- **Negrito**
- *Itálico*
- [Links](https://exemplo.com)

```code
# Blocos de código
def hello
  puts "Hello World"
end
```

## Imagens

![Descrição](caminho/para/imagem.jpg)
```

---

## 🛠️ Comandos Úteis

### Build do site (sem servidor)

```bash
bundle exec jekyll build
```

Gera os arquivos estáticos na pasta `_site/`.

### Build para produção

```bash
JEKYLL_ENV=production bundle exec jekyll build
```

### Limpar arquivos gerados

```bash
jekyll clean
```

### Ver versão do Jekyll

```bash
jekyll -v
```

### Atualizar dependências

```bash
bundle update
```

---

## 📁 Estrutura do Projeto

```
hussyvel.github.io/
├── _config.yml          # Configurações do site
├── _includes/           # Componentes reutilizáveis
│   ├── header.html
│   ├── footer.html
│   └── comments.html
├── _layouts/            # Templates de páginas
│   ├── default.html
│   ├── home.html
│   └── post.html
├── _posts/              # Posts do blog (todos os idiomas)
│   ├── 2025-12-07-post-pt.md
│   ├── 2025-12-07-post-en.md
│   └── 2025-12-07-post-fr.md
├── assets/              # CSS, JS, imagens
│   └── css/
│       └── style.css
├── en/                  # Páginas em inglês
│   ├── index.html
│   ├── about.md
│   └── blog.html
├── fr/                  # Páginas em francês
│   ├── index.html
│   ├── about.md
│   └── blog.html
├── index.html           # Home em português
├── sobre.md             # About em português
├── blog.html            # Blog em português
├── Gemfile              # Dependências Ruby
└── Gemfile.lock         # Versões fixas das dependências
```

---

## 🐛 Troubleshooting

### Erro: "command not found: jekyll"

```bash
# Reinstale o bundler e as dependências
gem install bundler
bundle install
```

### Erro: "Permission denied"

No Linux/macOS, não use `sudo`. Configure o GEM_HOME conforme instruções acima.

### Porta 4000 já está em uso

```bash
# Use outra porta
jekyll serve --port 4001
```

Ou mate o processo existente:

```bash
# Linux/macOS
lsof -ti:4000 | xargs kill -9

# Windows
netstat -ano | findstr :4000
taskkill /PID <PID> /F
```

### Erro de compilação do Sass

```bash
# Instale o pacote de desenvolvimento
# Ubuntu/Debian:
sudo apt-get install ruby-dev

# Fedora:
sudo dnf install ruby-devel
```

### Jekyll não recompila após mudanças

Reinicie o servidor ou use:

```bash
jekyll serve --force_polling
```

---

## 🔄 Fluxo de Trabalho Recomendado

1. **Crie um branch para nova feature:**
   ```bash
   git checkout -b meu-novo-post
   ```

2. **Faça suas mudanças e teste localmente:**
   ```bash
   jekyll serve
   ```

3. **Commit suas mudanças:**
   ```bash
   git add .
   git commit -m "Adiciona novo post sobre X"
   ```

4. **Push para GitHub:**
   ```bash
   git push origin meu-novo-post
   ```

5. **Crie Pull Request no GitHub**

6. **Após merge, GitHub Pages atualiza automaticamente!**

---

## 📚 Recursos Adicionais

- [Documentação Jekyll](https://jekyllrb.com/docs/)
- [GitHub Pages Docs](https://docs.github.com/pt/pages)
- [Markdown Guide](https://www.markdownguide.org/)
- [Liquid Template Language](https://shopify.github.io/liquid/)

---

## ⚡ Dicas de Produtividade

### 1. Use LiveReload

```bash
jekyll serve --livereload
```

O navegador atualiza automaticamente quando você salva arquivos!

### 2. Use Drafts (Rascunhos)

Crie posts em `_drafts/` (sem data no nome) e visualize com:

```bash
jekyll serve --drafts
```

### 3. Atalhos úteis

Adicione ao seu `~/.bashrc` ou `~/.zshrc`:

```bash
alias jk='bundle exec jekyll serve'
alias jkl='bundle exec jekyll serve --livereload'
alias jkd='bundle exec jekyll serve --drafts --livereload'
```

Depois use simplesmente: `jkl`

---

## 🎉 Pronto!

Agora você tem um ambiente completo de desenvolvimento Jekyll funcionando!

Se tiver problemas, consulte a seção de Troubleshooting ou abra uma issue no repositório.

**Happy blogging! 🚀**
