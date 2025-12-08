import { getTranslation } from '@/lib/i18n/translations'

export default function AboutPage() {
  const t = getTranslation('fr')

  return (
    <div className="sobre-page">
      <h1>{t.about.title}</h1>
      <div className="sobre-content">
        <p>{t.about.intro}</p>
        <p>{t.about.description}</p>

        <h2>{t.about.techTitle}</h2>
        <p>{t.about.techDescription}</p>
        <ul>
          <li>Next.js 14 (App Router)</li>
          <li>React 18</li>
          <li>TypeScript</li>
          <li>Markdown pour les articles</li>
          <li>GitHub Pages pour l'hébergement</li>
        </ul>

        <h2>{t.about.contactTitle}</h2>
        <p>
          {t.about.contactDescription}{' '}
          <a href="https://github.com/hussyvel" target="_blank" rel="noopener noreferrer">
            {t.about.github}
          </a>
          .
        </p>
      </div>
    </div>
  )
}
