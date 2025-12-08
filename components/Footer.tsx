export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Hussyvel. Todos os direitos reservados.</p>
        <div className="footer-links">
          <a href="https://github.com/hussyvel" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
