import Link from 'next/link'
import { Locale } from '@/lib/i18n/locales'
import { TranslationKeys } from '@/lib/i18n/translations'
import LanguageSwitcher from './LanguageSwitcher'

interface NavbarProps {
  locale: Locale
  t: TranslationKeys
}

export default function Navbar({ locale, t }: NavbarProps) {
  const baseUrl = locale === 'pt' ? '' : `/${locale}`
  const aboutUrl = locale === 'fr' ? 'a-propos' : locale === 'en' ? 'about' : 'sobre'

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link href={`${baseUrl}/`} className="nav-logo">
          Hussyvel
        </Link>
        <div className="nav-right">
          <ul className="nav-menu">
            <li className="nav-item">
              <Link href={`${baseUrl}/`} className="nav-link">
                {t.nav.home}
              </Link>
            </li>
            <li className="nav-item">
              <Link href={`${baseUrl}/blog`} className="nav-link">
                {t.nav.blog}
              </Link>
            </li>
            <li className="nav-item">
              <Link href={`${baseUrl}/${aboutUrl}`} className="nav-link">
                {t.nav.about}
              </Link>
            </li>
          </ul>
          <LanguageSwitcher currentLocale={locale} />
        </div>
      </div>
    </nav>
  )
}
