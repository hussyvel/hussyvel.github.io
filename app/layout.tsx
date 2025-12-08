import type { Metadata } from 'next'
import Layout from '@/components/Layout'
import { getTranslation } from '@/lib/i18n/translations'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hussyvel - Blog',
  description: 'Blog pessoal sobre tecnologia e desenvolvimento',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const t = getTranslation('pt')

  return (
    <html lang="pt-BR">
      <body>
        <Layout locale="pt" t={t}>{children}</Layout>
      </body>
    </html>
  )
}
