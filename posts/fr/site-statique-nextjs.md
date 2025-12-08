---
title: 'Comment créer un site statique avec Next.js'
date: '2024-12-07'
excerpt: 'Apprenez à configurer un site statique avec Next.js et le déployer sur GitHub Pages.'
---

# Comment créer un site statique avec Next.js

Next.js est un framework puissant qui prend en charge différents modes de rendu, y compris la **génération de site statique (SSG)**.

## Avantages des sites statiques

Les sites statiques offrent plusieurs avantages :

1. **Performance** - Les pages pré-rendues se chargent instantanément
2. **SEO** - Contenu entièrement indexable
3. **Coût** - Hébergement gratuit sur des services comme GitHub Pages
4. **Sécurité** - Pas de serveur à attaquer

## Configuration de base

Pour exporter un site statique avec Next.js, ajoutez à `next.config.js` :

```javascript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}
```

## Génération du site

Exécutez la commande :

```bash
npm run build
```

Cela génère un dossier `out/` avec tous les fichiers statiques prêts pour le déploiement !

## Déploiement sur GitHub Pages

GitHub Pages est parfait pour héberger des sites statiques gratuitement. Il suffit de :

1. Pousser les fichiers vers le dépôt
2. Configurer GitHub Actions pour la construction automatique
3. Activer GitHub Pages dans les paramètres

Et voilà ! Votre site sera en ligne à `username.github.io`.

## Conclusion

Next.js + SSG est une combinaison puissante pour les blogs et les sites de contenu. Performance, facilité de développement et coût d'hébergement nul en font un excellent choix !
