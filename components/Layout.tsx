import Navbar from './Navbar'
import Footer from './Footer'
import { Locale } from '@/lib/i18n/locales'
import { TranslationKeys } from '@/lib/i18n/translations'

interface LayoutProps {
  children: React.ReactNode
  locale: Locale
  t: TranslationKeys
}

export default function Layout({ children, locale, t }: LayoutProps) {
  return (
    <div className="layout">
      <Navbar locale={locale} t={t} />
      <main className="main-content">
        {children}
      </main>
      <Footer t={t} />
    </div>
  )
}
