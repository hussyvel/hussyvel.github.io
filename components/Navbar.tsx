import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link href="/" className="nav-logo">
          Hussyvel
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link href="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/blog" className="nav-link">
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/sobre" className="nav-link">
              Sobre
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
