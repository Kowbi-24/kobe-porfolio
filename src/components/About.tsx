import './About.css'

export default function About() {
  const stats = [
    { value: '1', label: 'Year Experience' },
    { value: '20+', label: 'Projects Built' },
    { value: '5+', label: 'Technologies' },
    { value: '100%', label: 'Passion' },
  ]

  return (
    <section id="about" className="about section">
      {/* Section Label */}
      <div className="section-label">
        <span className="section-label__line" />
        <span className="section-label__text">01. About Me</span>
        <span className="section-label__line" />
      </div>

      <div className="about__container">
        {/* Left - Text */}
        <div className="about__text">
          <h2 className="about__heading">
            Crafting digital experiences
            <span className="about__heading-accent"> one line at a time</span>
          </h2>

          <p className="about__body">
            I'm <strong>Kobe Cruz</strong>, a passionate software developer based in the Philippines.
            I specialize in building full-stack web applications that are not only functional
            but also beautifully designed and highly performant.
          </p>
          <p className="about__body">
            With a strong foundation in modern web technologies, I enjoy taking on complex
            problems and transforming them into simple, elegant solutions. I'm constantly learning
            and keeping up-to-date with the latest industry trends to deliver cutting-edge solutions.
          </p>
          <p className="about__body">
            When I'm not coding, you'll find me exploring new frameworks, or leveling up my design skills.
          </p>

          <div className="about__highlights">
            {[
              'Clean, maintainable code architecture',
              'Performance-first development',
              'Collaborative team player',
            ].map(item => (
              <div key={item} className="about__highlight-item">
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Stats + Card */}
        <div className="about__right">
          <div className="about__card">
            <div className="about__card-glow" />
            <div className="about__card-inner">
              <div className="about__code-block">
                <div className="about__code-header">
                  <span className="about__code-dot about__code-dot--red" />
                  <span className="about__code-dot about__code-dot--yellow" />
                  <span className="about__code-dot about__code-dot--green" />
                  <span className="about__code-filename">profile.ts</span>
                </div>
                <pre className="about__code">
                  <code>{`const developer = {
  name: "Kobe Cruz",
  role: "Full-Stack Developer",
  location: "Philippines 🇵🇭",
  languages: [
    "TypeScript",
    "PHP", 
    "Python",
  ],
  frameworks: [
    "React", "Node.js",
    "Vue.js", "Laravel",
  ],
  database: ["MySQL", "PostgreSQL", "SQL Server"],
  currently: "Improving fundementals",
};`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="about__stats">
            {stats.map(s => (
              <div key={s.label} className="about__stat">
                <span className="about__stat-value">{s.value}</span>
                <span className="about__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
