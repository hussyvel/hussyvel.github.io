import type { Metadata } from 'next'
import Layout from '@/components/Layout'
import { getTranslation } from '@/lib/i18n/translations'

export const metadata: Metadata = {
  title: 'Hussyvel - Blog',
  description: 'Personal blog about technology and development',
}

export default function EnLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const t = getTranslation('en')

  return <Layout locale="en" t={t}>{children}</Layout>
}
