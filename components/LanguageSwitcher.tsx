'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Locale, locales, localeNames, localeFlags } from '@/lib/i18n/locales'

export default function LanguageSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const pathname = usePathname()

  const getLocalizedPath = (newLocale: Locale): string => {
    // Remove current locale prefix if exists
    let cleanPath = pathname
    for (const locale of locales) {
      if (pathname.startsWith(`/${locale}/`)) {
        cleanPath = pathname.replace(`/${locale}`, '')
        break
      } else if (pathname === `/${locale}`) {
        cleanPath = '/'
        break
      }
    }

    // Add new locale prefix (except for default 'pt')
    if (newLocale === 'pt') {
      return cleanPath || '/'
    }
    return `/${newLocale}${cleanPath}`
  }

  return (
    <div className="language-switcher">
      {locales.map((locale) => (
        <Link
          key={locale}
          href={getLocalizedPath(locale)}
          className={`lang-link ${currentLocale === locale ? 'active' : ''}`}
          title={localeNames[locale]}
        >
          {localeFlags[locale]}
        </Link>
      ))}
    </div>
  )
}
