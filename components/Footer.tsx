import { TranslationKeys } from '@/lib/i18n/translations'

interface FooterProps {
  t: TranslationKeys
}

export default function Footer({ t }: FooterProps) {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Hussyvel. {t.footer.rights}</p>
        <div className="footer-links">
          <a href="https://github.com/hussyvel" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
