---
title: 'How to create a static site with Next.js'
date: '2024-12-07'
excerpt: 'Learn how to configure a static site using Next.js and deploy to GitHub Pages.'
---

# How to create a static site with Next.js

Next.js is a powerful framework that supports different rendering modes, including **Static Site Generation (SSG)**.

## Advantages of static sites

Static sites offer several advantages:

1. **Performance** - Pre-rendered pages load instantly
2. **SEO** - Fully indexable content
3. **Cost** - Free hosting on services like GitHub Pages
4. **Security** - No server to attack

## Basic configuration

To export a static site with Next.js, add to `next.config.js`:

```javascript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}
```

## Generating the site

Run the command:

```bash
npm run build
```

This generates an `out/` folder with all static files ready for deployment!

## Deploy to GitHub Pages

GitHub Pages is perfect for hosting static sites for free. Just:

1. Push files to the repository
2. Configure GitHub Actions for automatic build
3. Enable GitHub Pages in settings

And that's it! Your site will be live at `username.github.io`.

## Conclusion

Next.js + SSG is a powerful combination for blogs and content sites. Performance, ease of development, and zero hosting cost make this an excellent choice!
