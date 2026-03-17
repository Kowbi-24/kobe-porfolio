import { useEffect, useRef } from 'react'
import './Hero.css'
import avatarImg from '../assets/avatar.png'

const SOCIAL_LINKS = {
  github: 'https://github.com/Kowbi-24',
  linkedin: 'https://www.linkedin.com/in/kobe-lester-cruz/',
}

export default function Hero() {
  const codeRef = useRef<HTMLSpanElement>(null)

  // Typewriter effect for the role text
  useEffect(() => {
    const roles = ['Full-Stack Developer', 'API Architecture', 'Database Schema Design']
    let roleIdx = 0
    let charIdx = 0
    let deleting = false

    const el = codeRef.current
    if (!el) return

    const tick = () => {
      const current = roles[roleIdx]
      if (!deleting) {
        el.textContent = current.slice(0, charIdx + 1)
        charIdx++
        if (charIdx >= current.length) {
          deleting = true
          setTimeout(tick, 1800)
          return
        }
      } else {
        el.textContent = current.slice(0, charIdx - 1)
        charIdx--
        if (charIdx === 0) {
          deleting = false
          roleIdx = (roleIdx + 1) % roles.length
        }
      }
      setTimeout(tick, deleting ? 60 : 90)
    }

    const t = setTimeout(tick, 600)
    return () => clearTimeout(t)
  }, [])

  return (
    <section id="hero" className="hero">
      {/* Animated background orbs */}
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />
      <div className="hero__orb hero__orb--3" />

      {/* Grid dots pattern */}
      <div className="hero__grid" />

      <div className="hero__container">
        <div className="hero__content">
          {/* Badge */}
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Available for work
          </div>

          {/* Heading */}
          <h1 className="hero__title">
            Hi, I'm{' '}
            <span className="hero__name">Kobe Cruz</span>
          </h1>

          {/* Typewriter */}
          <p className="hero__role">
            <span className="hero__role-prefix">// </span>
            <span className="hero__role-text" ref={codeRef} />
            <span className="hero__cursor">|</span>
          </p>

          {/* Description */}
          <p className="hero__desc">
            I build elegant, performant web applications with modern technologies.
            Passionate about clean code, great user experiences, and turning ideas into reality.
          </p>

          {/* CTAs */}
          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary" onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
              View Projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="#about" className="btn btn--outline" onClick={e => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }) }}>
              About Me
            </a>
          </div>

          {/* Social */}
          <div className="hero__socials">
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="GitHub">
              {/* GitHub Icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              <span>GitHub</span>
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="LinkedIn">
              {/* LinkedIn Icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Avatar side */}
        <div className="hero__avatar-wrap">
          <div className="hero__avatar-ring hero__avatar-ring--outer" />
          <div className="hero__avatar-ring hero__avatar-ring--inner" />
          <div className="hero__avatar-glow" />
          <div className="hero__avatar">
            <img src={avatarImg} alt="Kobe Cruz - Software Developer" />
          </div>
          {/* Floating tags */}
          <div className="hero__float hero__float--tl">
            <span>React</span>
          </div>
          <div className="hero__float hero__float--tr">
            <span>TypeScript</span>
          </div>
          <div className="hero__float hero__float--bl">
            <span>Node.js</span>
          </div>
          <div className="hero__float hero__float--br">
            <span>SQL</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel" />
        </div>
        <span>Scroll down</span>
      </div>
    </section>
  )
}
