import './Experience.css'

interface Job {
  title: string
  company: string
  period: string
  type: string
  description: string
  tech: string[]
  current?: boolean
}

const JOBS: Job[] = [
  {
    title: 'Computer Science Graduate',
    company: 'Holy Angel University',
    period: '2022-2026',
    type: 'Education',
    description:
      'Completed a Bachelor of Science in Computer Science. Covered core subjects including Data Structures, Algorithms, Database Management, Software Engineering, and Web Technologies.',
    tech: ['Java', 'Python', 'C++', 'SQL', 'Data Structures'],
  },
  {
    title: 'Full-Stack Developer Intern',
    company: 'La Rose Noire',
    period: 'December 2025 - March 2026',
    type: 'Internship',
    description:
      'Designing and developing custom web applications for clients across various industries. Built HR portals, survey systems, and e-commerce dashboards using React, PHP, and MySQL. Managed entire development lifecycle from requirements to deployment.',
    tech: ['React', 'TypeScript', 'PHP', 'MS SQL', 'HTML', 'CSS', 'Tailwind'],
    current: true,
  },
  
]

export default function Experience() {
  return (
    <section id="experience" className="exp section">
      <div className="section-label">
        <span className="section-label__line" />
        <span className="section-label__text">03. Experience</span>
        <span className="section-label__line" />
      </div>

      <div className="exp__container">
        <div className="exp__header">
          <h2 className="exp__title">
            My <span className="exp__title-accent">Journey</span>
          </h2>
          <p className="exp__subtitle">A timeline of my professional growth</p>
        </div>

        <div className="exp__timeline">
          {/* Vertical line */}
          <div className="exp__line" />

          {JOBS.map((job, i) => (
            <div key={i} className={`exp__item exp__item--${i % 2 === 0 ? 'left' : 'right'}`}>
              {/* Connector dot */}
              <div className={`exp__dot${job.current ? ' exp__dot--active' : ''}`} />

              <div className="exp__card">
                <div className="exp__card-glow" />

                {/* Header */}
                <div className="exp__card-head">
                  <div>
                    <h3 className="exp__role">{job.title}</h3>
                    <p className="exp__company">{job.company}</p>
                  </div>
                  <div className="exp__meta">
                    {job.current && <span className="exp__badge-current">● Current</span>}
                    <span className="exp__period">{job.period}</span>
                    <span className="exp__type">{job.type}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="exp__desc">{job.description}</p>

                {/* Tags */}
                <div className="exp__tags">
                  {job.tech.map(t => (
                    <span key={t} className="exp__tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
