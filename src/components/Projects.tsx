import { useState } from 'react'
import './Projects.css'

type Tag = 'All' | 'React' | 'PHP' | 'Node.js' | 'Full-Stack'

interface Project {
  title: string
  desc: string
  tags: string[]
  filter: Exclude<Tag, 'All'>[]
  github: string
  demo?: string
  featured?: boolean
  emoji: string
  highlight: string
}

const PROJECTS: Project[] = [
  {
    title: 'Incident Violation Management System (IVMS)',
    desc: 'A system developer during the internsip with La Rose Noire for the HR Department. Serves as a way for HR to track Incident Reports acroll different departments, file notices of investagation, administrative hearing, and disciplinary action.',
    tags: ['PHP', 'MS SQL', 'HTML', 'Javascript', 'Tailwind'],
    filter: ['PHP', 'Full-Stack'],
    github: 'https://github.com',
    featured: false,
    emoji: '📋',
    highlight: '#3b82f6',
  },
  {
    title: 'KPI Survey System',
    desc: 'Developed for La Rose Noire to allow department heads to view their KPI ratings & customer feedback. Has functionalities such as creating and managing active surveys with an intuitive dashboard providing the user with relevant data.',
    tags: ['React', 'TypeScript', 'Vite', 'CSS3'],
    filter: ['React', 'Full-Stack'],
    github: 'https://github.com',
    demo: '#',
    featured: false,
    emoji: '📊',
    highlight: '#06b6d4',
  },
  {
    title: 'E-Commerce Dashboard',
    desc: 'A real-time sales dashboard with charts, inventory management, and order tracking. Features live data updates, filtering, and export functionality.',
    tags: ['React', 'Node.js', 'MySQL', 'REST API'],
    filter: ['React', 'Node.js', 'Full-Stack'],
    github: 'https://github.com',
    emoji: '🛒',
    highlight: '#8b5cf6',
  },
  {
    title: 'Task Management API',
    desc: 'RESTful API built with Node.js and Express for managing tasks and projects. Includes JWT authentication, rate limiting, and full CRUD operations.',
    tags: ['Node.js', 'Express', 'JWT', 'MongoDB'],
    filter: ['Node.js'],
    github: 'https://github.com',
    emoji: '📋',
    highlight: '#10b981',
  },
  {
    title: 'Survey Builder App',
    desc: 'Drag-and-drop survey builder with multiple question types, conditional logic, real-time preview, and detailed response analytics.',
    tags: ['React', 'TypeScript', 'PHP', 'MySQL'],
    filter: ['React', 'PHP', 'Full-Stack'],
    github: 'https://github.com',
    emoji: '📊',
    highlight: '#f59e0b',
  },
  {
    title: 'Weather Dashboard',
    desc: 'A beautiful weather app with 7-day forecasts, location search, weather maps, and animated backgrounds that change based on current conditions.',
    tags: ['React', 'OpenWeather API', 'CSS3'],
    filter: ['React'],
    github: 'https://github.com',
    demo: 'https://github.com',
    emoji: '🌤️',
    highlight: '#ec4899',
  },
]

const FILTERS: Tag[] = ['All', 'React', 'PHP', 'Node.js', 'Full-Stack']

export default function Projects() {
  const [active, setActive] = useState<Tag>('All')

  const filtered = active === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.filter.includes(active as Exclude<Tag, 'All'>))

  return (
    <section id="projects" className="proj section">
      <div className="section-label">
        <span className="section-label__line" />
        <span className="section-label__text">04. Projects</span>
        <span className="section-label__line" />
      </div>

      <div className="proj__container">
        <div className="proj__header">
          <h2 className="proj__title">
            Things I've <span className="proj__title-accent">Built</span>
          </h2>
          <p className="proj__subtitle">A selection of projects I'm proud of</p>
        </div>

        {/* Filter */}
        <div className="proj__filters">
          {FILTERS.map(f => (
            <button
              key={f}
              className={`tech__tab${active === f ? ' tech__tab--active' : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="proj__grid">
          {filtered.map((p, i) => (
            <div
              key={p.title}
              className={`proj__card${p.featured ? ' proj__card--featured' : ''}`}
              style={{
                '--proj-color': p.highlight,
                animationDelay: `${i * 0.05}s`,
              } as React.CSSProperties}
            >
              {p.featured && <div className="proj__badge-featured">⭐ Featured</div>}

              <div className="proj__card-glow" />

              <div className="proj__card-top">
                <div className="proj__emoji">{p.emoji}</div>
                <div className="proj__links">
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="proj__link" aria-label="GitHub">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer" className="proj__link" aria-label="Live Demo">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    </a>
                  )}
                </div>
              </div>

              <h3 className="proj__card-title">{p.title}</h3>
              <p className="proj__card-desc">{p.desc}</p>

              <div className="proj__tags">
                {p.tags.map(t => (
                  <span key={t} className="proj__tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="proj__cta">
          <p>Want to see more of my work?</p>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn--outline proj__cta-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  )
}
