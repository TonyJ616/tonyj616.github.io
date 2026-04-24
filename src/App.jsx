import { useEffect, useRef } from 'react'
import './App.css'

/* ─── Data ─── */
const SKILLS = [
  {
    category: 'Frontend',
    icon: '{ }',
    color: 'coral',
    items: ['JavaScript', 'TypeScript', 'Vue.js', 'Angular', 'React', 'TDesign', 'HTML / CSS'],
  },
  {
    category: 'Backend & Data',
    icon: '>_',
    color: 'green',
    items: ['Python', 'Node.js', 'Web Crawlers', 'RESTful API', 'SQL'],
  },
  {
    category: 'Tools & Workflow',
    icon: '#',
    color: 'gold',
    items: ['Git', 'Redux / Pinia', 'Vite', 'Webpack', 'CI / CD', 'Docker'],
  },
  {
    category: 'Exploring',
    icon: '*',
    color: 'blue',
    items: ['AI / LLM', 'Rust', 'WebAssembly', 'Three.js'],
  },
]

const SOCIAL_LINKS = [
  { label: 'GitHub', url: 'https://github.com/TonyJ616' },
  { label: 'Email', url: 'mailto:tonyj616@outlook.com' },
]

/* ─── Intersection Observer Hook ─── */
function useReveal(selector) {
  useEffect(() => {
    const els = document.querySelectorAll(selector)
    if (!els.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible')
            }, i * 120)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [selector])
}

/* ─── Components ─── */
function Nav() {
  return (
    <nav className="nav">
      <a className="nav-brand" href="/">
        Tony<span>J</span>
      </a>
      <ul className="nav-links">
        <li><a href="#skills">Skills</a></li>
        <li><a href="#manifesto">About</a></li>
        <li><a href="https://github.com/TonyJ616" target="_blank" rel="noopener noreferrer">GitHub</a></li>
      </ul>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hello, world —</p>
        <h1 className="hero-name">
          I'm TonyJ,<br />
          a creative<br />
          developer.
        </h1>
        <span className="hero-line" />
        <p className="hero-desc">
          Passionate about building delightful digital experiences with clean code and thoughtful design.
          Currently exploring the intersection of frontend engineering, AI, and industrial design.
        </p>
        <div className="hero-cta">
          <a className="btn-primary" href="https://github.com/TonyJ616" target="_blank" rel="noopener noreferrer">
            <GithubIcon />
            View GitHub
          </a>
          <a className="btn-secondary" href="#skills">
            Explore Skills
            <ArrowDown />
          </a>
        </div>
        <div className="status-capsule">
          <span className="status-dot" />
          Open to collaboration & new ideas
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-avatar-frame">
          <div className="avatar-blob" />
          <div className="avatar-inner">TJ</div>
          <div className="decor-shape decor-1" />
          <div className="decor-shape decor-2" />
          <div className="decor-shape decor-3" />
        </div>
      </div>
    </section>
  )
}

function Skills() {
  useReveal('.skill-category')

  return (
    <section id="skills" className="skills-section">
      <header className="section-header">
        <span className="section-label">What I Work With</span>
        <h2 className="section-title">Skills & Expertise</h2>
      </header>

      <div className="skills-grid">
        {SKILLS.map((group) => (
          <div key={group.category} className="skill-category">
            <div className={`skill-category-icon ${group.color}`}>
              {group.icon}
            </div>
            <h3 className="skill-category-name">{group.category}</h3>
            <div className="skill-tags">
              {group.items.map((skill) => (
                <span key={skill} className={`skill-tag ${group.color}`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Manifesto() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect() } },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="manifesto" className="manifesto" ref={ref}>
      <div className="manifesto-inner">
        <blockquote className="manifesto-quote">
          Good code is like a good story — it should be clear, concise,
          and leave the reader wanting to know what happens next.
        </blockquote>
        <p className="manifesto-author">— How I think about building software</p>
      </div>
    </section>
  )
}

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <p className="footer-left">
        &copy; {year} Tony<span>J</span>. Crafted with care.
      </p>
      <div className="footer-links">
        {SOCIAL_LINKS.map((link) => (
          <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer">
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  )
}

/* ─── Inline SVG Icons ─── */
function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  )
}

function ArrowDown() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="19 12 12 19 5 12" />
    </svg>
  )
}

/* ─── App ─── */
function App() {
  return (
    <div className="page-wrapper">
      <Nav />
      <Hero />
      <Skills />
      <Manifesto />
      <Footer />
    </div>
  )
}

export default App
