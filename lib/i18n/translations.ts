import { Locale } from './locales'

export interface TranslationKeys {
  nav: {
    home: string
    blog: string
    about: string
  }
  home: {
    title: string
    subtitle: string
    recentPosts: string
    noPosts: string
    viewAll: string
  }
  blog: {
    title: string
    noPosts: string
    backToList: string
  }
  about: {
    title: string
    intro: string
    description: string
    techTitle: string
    techDescription: string
    contactTitle: string
    contactDescription: string
    github: string
  }
  footer: {
    rights: string
  }
}

export const translations: Record<Locale, TranslationKeys> = {
  pt: {
    nav: {
      home: 'Home',
      blog: 'Blog',
      about: 'Sobre',
    },
    home: {
      title: 'Bem-vindo ao meu Blog',
      subtitle: 'Explorando tecnologia, desenvolvimento e inovação',
      recentPosts: 'Posts Recentes',
      noPosts: 'Nenhum post disponível ainda.',
      viewAll: 'Ver todos os posts →',
    },
    blog: {
      title: 'Todos os Posts',
      noPosts: 'Nenhum post disponível ainda.',
      backToList: '← Voltar para o blog',
    },
    about: {
      title: 'Sobre Mim',
      intro: 'Olá! Bem-vindo ao meu blog pessoal.',
      description: 'Este é um espaço onde compartilho minhas experiências, aprendizados e reflexões sobre tecnologia, desenvolvimento de software e inovação.',
      techTitle: 'Tecnologias',
      techDescription: 'Este blog foi construído com:',
      contactTitle: 'Contato',
      contactDescription: 'Você pode me encontrar no',
      github: 'GitHub',
    },
    footer: {
      rights: 'Todos os direitos reservados.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      blog: 'Blog',
      about: 'About',
    },
    home: {
      title: 'Welcome to my Blog',
      subtitle: 'Exploring technology, development, and innovation',
      recentPosts: 'Recent Posts',
      noPosts: 'No posts available yet.',
      viewAll: 'View all posts →',
    },
    blog: {
      title: 'All Posts',
      noPosts: 'No posts available yet.',
      backToList: '← Back to blog',
    },
    about: {
      title: 'About Me',
      intro: 'Hello! Welcome to my personal blog.',
      description: 'This is a space where I share my experiences, learnings, and thoughts on technology, software development, and innovation.',
      techTitle: 'Technologies',
      techDescription: 'This blog was built with:',
      contactTitle: 'Contact',
      contactDescription: 'You can find me on',
      github: 'GitHub',
    },
    footer: {
      rights: 'All rights reserved.',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      blog: 'Blog',
      about: 'À propos',
    },
    home: {
      title: 'Bienvenue sur mon Blog',
      subtitle: 'Explorer la technologie, le développement et l\'innovation',
      recentPosts: 'Articles Récents',
      noPosts: 'Aucun article disponible pour le moment.',
      viewAll: 'Voir tous les articles →',
    },
    blog: {
      title: 'Tous les Articles',
      noPosts: 'Aucun article disponible pour le moment.',
      backToList: '← Retour au blog',
    },
    about: {
      title: 'À Propos de Moi',
      intro: 'Bonjour ! Bienvenue sur mon blog personnel.',
      description: 'C\'est un espace où je partage mes expériences, mes apprentissages et mes réflexions sur la technologie, le développement logiciel et l\'innovation.',
      techTitle: 'Technologies',
      techDescription: 'Ce blog a été construit avec :',
      contactTitle: 'Contact',
      contactDescription: 'Vous pouvez me trouver sur',
      github: 'GitHub',
    },
    footer: {
      rights: 'Tous droits réservés.',
    },
  },
}

export function getTranslation(locale: Locale): TranslationKeys {
  return translations[locale]
}
