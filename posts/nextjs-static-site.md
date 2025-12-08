---
title: 'Como criar um site estático com Next.js'
date: '2024-12-07'
excerpt: 'Aprenda a configurar um site estático usando Next.js e deploy no GitHub Pages.'
---

# Como criar um site estático com Next.js

Next.js é uma framework poderosa que suporta diferentes modos de renderização, incluindo **Static Site Generation (SSG)**.

## Vantagens de sites estáticos

Sites estáticos oferecem várias vantagens:

1. **Performance** - Páginas pré-renderizadas carregam instantaneamente
2. **SEO** - Conteúdo totalmente indexável
3. **Custo** - Hospedagem gratuita em serviços como GitHub Pages
4. **Segurança** - Sem servidor para atacar

## Configuração básica

Para exportar um site estático com Next.js, adicione ao `next.config.js`:

```javascript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}
```

## Gerando o site

Execute o comando:

```bash
npm run build
```

Isso gera uma pasta `out/` com todos os arquivos estáticos prontos para deploy!

## Deploy no GitHub Pages

GitHub Pages é perfeito para hospedar sites estáticos gratuitamente. Basta:

1. Fazer push dos arquivos para o repositório
2. Configurar GitHub Actions para build automático
3. Ativar GitHub Pages nas configurações

E pronto! Seu site estará no ar em `usuario.github.io`.

## Conclusão

Next.js + SSG é uma combinação poderosa para blogs e sites de conteúdo. Performance, facilidade de desenvolvimento e custo zero de hospedagem fazem desta uma escolha excelente!
