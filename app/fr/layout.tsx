import type { Metadata } from 'next'
import Layout from '@/components/Layout'
import { getTranslation } from '@/lib/i18n/translations'

export const metadata: Metadata = {
  title: 'Hussyvel - Blog',
  description: 'Blog personnel sur la technologie et le développement',
}

export default function FrLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const t = getTranslation('fr')

  return <Layout locale="fr" t={t}>{children}</Layout>
}
