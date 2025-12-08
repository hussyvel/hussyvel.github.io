import type { Metadata } from 'next'
import Layout from '@/components/Layout'
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
  return (
    <html lang="pt-BR">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
