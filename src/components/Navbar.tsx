import { useState, useEffect } from 'react'
import './Navbar.css'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Tech Stack', href: '#tech' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        {/* Logo */}
        <a href="#hero" className="navbar__logo" onClick={e => handleLink(e, '#hero')}>
          <span className="navbar__logo-bracket">&lt;</span>
          <span className="navbar__logo-name">KobeCruz</span>
          <span className="navbar__logo-bracket"> /&gt;</span>
        </a>

        {/* Desktop Links */}
        <nav className="navbar__links">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} className="navbar__link" onClick={e => handleLink(e, l.href)}>
              {l.label}
            </a>
          ))}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__cta"
          >
            Hire Me
          </a>
        </nav>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile${menuOpen ? ' navbar__mobile--open' : ''}`}>
        {navLinks.map(l => (
          <a key={l.href} href={l.href} className="navbar__mobile-link" onClick={e => handleLink(e, l.href)}>
            {l.label}
          </a>
        ))}
      </div>
    </header>
  )
}
