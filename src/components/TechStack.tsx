import { useState } from 'react'
import type { IconType } from 'react-icons'
import {
  SiReact, SiTypescript, SiJavascript, SiHtml5, SiTailwindcss,
  SiNodedotjs, SiPhp, SiSpringboot,
  SiMysql, SiPostgresql, SiFirebase, SiSupabase,
  SiGithub, SiPostman, SiVscodium,
} from 'react-icons/si'
import { FaDatabase } from 'react-icons/fa'
import './TechStack.css'

type Category = 'All' | 'Frontend' | 'Backend' | 'Database' | 'Tools'

interface Tech {
  name: string
  category: Exclude<Category, 'All'>
  level: number
  color: string
  Icon: IconType
}

const TECHS: Tech[] = [
  // Frontend
  { name: 'React',       category: 'Frontend', level: 70, color: '#61dafb', Icon: SiReact },
  { name: 'TypeScript',  category: 'Frontend', level: 50, color: '#3178c6', Icon: SiTypescript },
  { name: 'JavaScript',  category: 'Frontend', level: 92, color: '#f7df1e', Icon: SiJavascript },
  { name: 'HTML & CSS',  category: 'Frontend', level: 90, color: '#e34f26', Icon: SiHtml5 },
  { name: 'Tailwind',    category: 'Frontend', level: 90, color: '#38bdf8', Icon: SiTailwindcss },

  // Backend
  { name: 'Node.js',     category: 'Backend',  level: 50, color: '#339933', Icon: SiNodedotjs },
  { name: 'PHP',         category: 'Backend',  level: 90, color: '#777bb4', Icon: SiPhp },
  { name: 'Spring Boot', category: 'Backend',  level: 70, color: '#6db33f', Icon: SiSpringboot },

  // Database
  { name: 'MySQL',            category: 'Database', level: 80, color: '#4479a1', Icon: SiMysql },
  { name: 'PostgreSQL',       category: 'Database', level: 80, color: '#336791', Icon: SiPostgresql },
  { name: 'Firebase',         category: 'Database', level: 85, color: '#ffca28', Icon: SiFirebase },
  { name: 'MS SQL Server',    category: 'Database', level: 90, color: '#cc2927', Icon: FaDatabase },
  { name: 'Supabase',         category: 'Database', level: 80, color: '#3ecf8e', Icon: SiSupabase },

  // Tools
  { name: 'Git & GitHub', category: 'Tools', level: 90, color: '#f05032', Icon: SiGithub },
  { name: 'Postman',      category: 'Tools', level: 80, color: '#ff6c37', Icon: SiPostman },
  { name: 'SQL Server',   category: 'Tools', level: 90, color: '#cc2927', Icon: FaDatabase },
  { name: 'VS Code',      category: 'Tools', level: 100, color: '#007acc', Icon: SiVscodium },
]

const CATEGORIES: Category[] = ['All', 'Frontend', 'Backend', 'Database', 'Tools']

export default function TechStack() {
  const [active, setActive] = useState<Category>('All')
  const [hovered, setHovered] = useState<string | null>(null)

  const filtered = active === 'All' ? TECHS : TECHS.filter(t => t.category === active)

  return (
    <section id="tech" className="tech section">
      <div className="section-label">
        <span className="section-label__line" />
        <span className="section-label__text">02. Tech Stack</span>
        <span className="section-label__line" />
      </div>

      <div className="tech__container">
        <div className="tech__header">
          <h2 className="tech__title">
            My <span className="tech__title-accent">Technical Arsenal</span>
          </h2>
          <p className="tech__subtitle">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="tech__tabs">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`tech__tab${active === cat ? ' tech__tab--active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="tech__grid">
          {filtered.map(tech => (
            <div
              key={tech.name}
              className={`tech__card${hovered === tech.name ? ' tech__card--hovered' : ''}`}
              onMouseEnter={() => setHovered(tech.name)}
              onMouseLeave={() => setHovered(null)}
              style={{ '--tech-color': tech.color } as React.CSSProperties}
            >
              <div className="tech__card-glow" />
              <div className="tech__card-icon">
                <tech.Icon size={36} color={tech.color} />
              </div>
              <div className="tech__card-name">{tech.name}</div>
              <div className="tech__card-badge">{tech.category}</div>
              <div className="tech__card-bar-wrap">
                <div className="tech__card-bar">
                  <div
                    className="tech__card-bar-fill"
                    style={{ width: `${tech.level}%` }}
                  />
                </div>
                <span className="tech__card-level">{tech.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
