import { useState } from 'react'
import './App.css'
import travelsImg from './assets/travels-logistics.jpg'

const PHONE = '9010746164'
const EMAIL = 'srkgrpofcompanies@gmail.com'

const companies = [
  {
    id: 'travels',
    name: 'SRK Travels and Logistics Private Limited',
    tagline: 'Moving people and cargo, reliably',
    desc: 'Dependable passenger travel and end-to-end logistics — from fleet transport and freight movement to supply-chain and last-mile delivery solutions.',
    image: travelsImg,
    points: ['Freight & Cargo Transport', 'Fleet & Passenger Travel', 'Supply Chain & Last-Mile Delivery'],
  },
  {
    id: 'realestate',
    name: 'SRK Real Estate & Infra Projects Private Limited',
    tagline: 'Building spaces, creating value',
    desc: 'Premium residential, commercial and infrastructure developments delivered with quality engineering, transparency and on-time execution.',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    points: ['Residential & Commercial Projects', 'Infrastructure Development', 'Land & Property Solutions'],
  },
  {
    id: 'chemicals',
    name: 'ARISUM Chemicals Private Limited',
    tagline: 'Chemistry that drives industry',
    desc: 'Manufacturing and supply of quality industrial and specialty chemicals, backed by rigorous standards, safety and dependable delivery.',
    image:
      'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80',
    points: ['Industrial & Specialty Chemicals', 'Quality-Assured Manufacturing', 'Reliable Supply Chain'],
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <header className="navbar">
        <div className="container nav-inner">
          <a href="#home" className="brand" onClick={() => setMenuOpen(false)}>
            <span className="brand-mark">SRK</span>
            <span className="brand-text">GROUP</span>
          </a>
          <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a href="#companies" onClick={() => setMenuOpen(false)}>Companies</a>
            <a href="#travels" onClick={() => setMenuOpen(false)}>Travels & Logistics</a>
            <a href="#realestate" onClick={() => setMenuOpen(false)}>Real Estate</a>
            <a href="#chemicals" onClick={() => setMenuOpen(false)}>Chemicals</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
          <button
            className="menu-toggle"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            ☰
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="container hero-inner">
            <h1 className="group-heading">SRK</h1>
            <p className="eyebrow">Group of Companies</p>
            <p className="lead">
              A diversified enterprise with three trusted businesses spanning
              travel &amp; tourism, real estate &amp; infrastructure, and
              chemicals — built on integrity, quality and lasting relationships.
            </p>
            <div className="hero-cta">
              <a href="#companies" className="btn btn-primary">Our Companies</a>
              <a href="#contact" className="btn btn-ghost">Get in Touch</a>
            </div>
          </div>
        </section>

        <section id="companies" className="section companies-intro">
          <div className="container">
            <h2 className="section-title center">Our Companies</h2>
            <p className="section-sub center">
              Three specialised businesses, one shared commitment to excellence.
            </p>
          </div>
        </section>

        {companies.map((c, i) => (
          <section
            id={c.id}
            key={c.id}
            className={`section company ${i % 2 === 1 ? 'reverse' : ''}`}
          >
            <div className="container company-grid">
              <div className="company-media">
                <img src={c.image} alt={c.name} loading="lazy" />
              </div>
              <div className="company-body">
                <p className="company-tagline">{c.tagline}</p>
                <h3 className="company-name">{c.name}</h3>
                <p className="company-desc">{c.desc}</p>
                <ul className="company-points">
                  {c.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <a href="#contact" className="btn btn-primary sm">Enquire Now</a>
              </div>
            </div>
          </section>
        ))}

        <section id="contact" className="section contact">
          <div className="container contact-inner">
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-sub">
              For enquiries across any of our companies, reach out to us directly.
            </p>
            <div className="contact-cards">
              <a href={`tel:${PHONE}`} className="contact-card">
                <span className="contact-icon">📞</span>
                <span className="contact-label">Call Us</span>
                <span className="contact-value">+91 {PHONE}</span>
              </a>
              <a href={`mailto:${EMAIL}`} className="contact-card">
                <span className="contact-icon">✉️</span>
                <span className="contact-label">Email Us</span>
                <span className="contact-value">{EMAIL}</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <span className="brand">
              <span className="brand-mark">SRK</span>
            </span>
            <p className="footer-tag">Group of Companies</p>
          </div>
          <div className="footer-contact">
            <a href={`tel:${PHONE}`}>+91 {PHONE}</a>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>© {new Date().getFullYear()} SRK Group. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
