import { useEffect, useRef, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import AppointmentPage from './pages/Appointment'
import AboutPage from './pages/About'
import CentersPage from './pages/Centers'
import ServicesPage from './pages/Services'
import DoctorsPage from './pages/Doctors'
import NewsPage from './pages/News'
import ContactPage from './pages/Contact'
import './App.css'

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Hero slider
  const slides = [
    {
      title: 'Advanced Care, Trusted Experts',
      subtitle: 'Comprehensive multi-speciality hospital with 24/7 emergency services.',
      cta: 'Book Appointment',
      image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Your Health, Our Priority',
      subtitle: 'State-of-the-art ICUs, OTs, diagnostics, and specialized centers of excellence.',
      cta: 'Find a Doctor',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Compassionate, Patient-First Care',
      subtitle: 'Personalized treatment plans led by experienced specialists.',
      cta: 'Explore Services',
      image: 'https://images.unsplash.com/photo-1583912086096-8f1e9b1b274f?q=80&w=1600&auto=format&fit=crop',
    },
  ]
  const [activeSlide, setActiveSlide] = useState(0)
  const intervalRef = useRef<number | null>(null)
  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setActiveSlide((s) => (s + 1) % slides.length)
    }, 5000)
    return () => { if (intervalRef.current) window.clearInterval(intervalRef.current) }
  }, [])

  // Testimonials
  const testimonials = [
    { name: 'Priya K', text: 'Outstanding care and courteous staff. The doctors explained everything clearly.', rating: 5 },
    { name: 'Rahul S', text: 'Emergency team was quick and professional. Highly recommended.', rating: 5 },
    { name: 'Meera V', text: 'Clean facilities and very organized. Felt well cared for.', rating: 4 },
  ]
  const [testimonialIndex, setTestimonialIndex] = useState(0)

  return (
    <>
      {/* Top info bar */}
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-left">
            <span>🕑 24/7 Emergency</span>
            <span>• NABH Standards</span>
          </div>
          <div className="topbar-right">
            <a href="tel:+1800123456">📞 +1 800 123 456</a>
            <a href="mailto:care@lifecarehospital.com">✉️ care@lifecarehospital.com</a>
          </div>
        </div>
      </div>

      {/* Header row with logo and actions */}
      <div className="header-row">
        <div className="container header-row-inner">
          <div className="brand">
            <Link to="/">Life Care Hospital</Link>
            <small>Compassion. Excellence. Trust.</small>
          </div>
          <div className="header-actions">
            <div className="search">
              <input placeholder="Search doctors, departments..." aria-label="Search" />
              <button className="btn btn-primary">Search</button>
            </div>
            <Link className="btn btn-outline" to="/appointment">Book Appointment</Link>
          </div>
        </div>
      </div>

      {/* Navbar with dropdown */}
      <nav className="navbar">
        <div className="container navbar-inner">
          <button className="btn btn-outline mobile-only" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            Menu
          </button>
          <div className="nav-links" style={{ display: isMenuOpen ? 'flex' : undefined }}>
            <Link className="nav-link" to="/">Home</Link>
            <div className="nav-link dropdown">
              <span className="dropdown-toggle">Centers</span>
              <div className="dropdown-menu">
                {['Cardiac Sciences', 'Neurosciences', 'Orthopedics', 'Gastroenterology', 'Oncology', 'Pulmonology', 'Nephrology', 'Women & Child Care'].map((c) => (
                  <a key={c} href="#centers">{c}</a>
                ))}
                <Link to="/centers">View All Centers</Link>
              </div>
            </div>
            <Link className="nav-link" to="/services">Services</Link>
            <Link className="nav-link" to="/doctors">Doctors</Link>
            <Link className="nav-link" to="/appointment">Appointment</Link>
            <Link className="nav-link" to="/news">News</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero slider */}
      <header id="home" className="hero hero-slider">
        {slides.map((s, i) => (
          <div
            key={i}
            className="hero-slide"
            style={{
              backgroundImage: `url(${s.image})`,
              opacity: activeSlide === i ? 1 : 0,
              pointerEvents: activeSlide === i ? 'auto' : 'none',
            }}
          >
            <div className="container hero-content">
              <h1>{s.title}</h1>
              <p>{s.subtitle}</p>
              <div className="hero-actions">
                <Link className="btn btn-primary" to="/appointment">{s.cta}</Link>
                <a className="btn btn-outline" href="#centers">Explore Centers</a>
              </div>
            </div>
          </div>
        ))}
        <div className="hero-dots">
          {slides.map((_, i) => (
            <button key={i} aria-label={`Slide ${i+1}`} className={`dot ${activeSlide === i ? 'active' : ''}`} onClick={() => setActiveSlide(i)} />
          ))}
        </div>
      </header>

      {/* Quick Links */}
      <section className="section quick-links">
        <div className="container grid grid-4">
          {[
            { title: 'Book Appointment', desc: 'Schedule a visit with our specialists', href: '/appointment', color: '#e0f2fe', emoji: '📅', isRoute: true },
            { title: 'Find a Doctor', desc: 'Search by name or speciality', href: '/doctors', color: '#dcfce7', emoji: '👩‍⚕️', isRoute: true },
            { title: 'Departments', desc: 'Centers of Excellence', href: '/centers', color: '#fde68a', emoji: '🏥', isRoute: true },
            { title: '24/7 Emergency', desc: 'Rapid response and ambulances', href: 'tel:+1800123456', color: '#fee2e2', emoji: '🚑' },
          ].map((q) => (
            q.isRoute ? (
              <Link key={q.title} className="quick-card" to={q.href} style={{ background: q.color }}>
                <div className="qc-emoji" aria-hidden>{q.emoji}</div>
                <div>
                  <div className="qc-title">{q.title}</div>
                  <div className="qc-desc">{q.desc}</div>
                </div>
              </Link>
            ) : (
              <a key={q.title} className="quick-card" href={q.href} style={{ background: q.color }}>
                <div className="qc-emoji" aria-hidden>{q.emoji}</div>
                <div>
                  <div className="qc-title">{q.title}</div>
                  <div className="qc-desc">{q.desc}</div>
                </div>
              </a>
            )
          ))}
        </div>
      </section>

      {/* Emergency banner */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="emergency-banner">
            <div>
              <strong>Emergency & Trauma Care</strong>
              <div>24/7 Ambulance and Critical Care Response</div>
            </div>
            <a href="tel:+1800123456">Call Now</a>
          </div>
        </div>
      </section>

      {/* Centers of Excellence */}
      <section id="centers" className="section centers">
        <div className="container">
          <h2 className="section-title">Centers of Excellence</h2>
          <p className="section-subtitle">Dedicated units delivering specialized care</p>
          <div className="grid grid-4">
            {[
              'Cardiac Sciences', 'Neurosciences', 'Orthopedics', 'Gastroenterology',
              'Oncology', 'Pulmonology', 'Nephrology', 'Women & Child Care',
            ].map((c) => (
              <div key={c} className="card center-card">
                <div className="icon" aria-hidden>🏥</div>
                <h3>{c}</h3>
                <p>World-class facility with experienced specialists.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Comprehensive, patient-centered care across specialties</p>
          <div className="grid grid-3">
            {[
              { title: 'Emergency Care', desc: '24/7 trauma and emergency services with rapid response.', emoji: '🚑' },
              { title: 'Cardiology', desc: 'Advanced heart care and interventional cardiology.', emoji: '❤️' },
              { title: 'Orthopedics', desc: 'Joint replacements, sports injuries, and spine care.', emoji: '🦴' },
              { title: 'Neurology', desc: 'Brain and nerve care with state-of-the-art diagnostics.', emoji: '🧠' },
              { title: 'Pediatrics', desc: 'Compassionate care for children from birth to teens.', emoji: '🧸' },
              { title: 'Diagnostics', desc: 'High-precision imaging and laboratory services.', emoji: '🧪' },
            ].map((s) => (
              <div key={s.title} className="card">
                <div className="icon" aria-hidden>
                  <span>{s.emoji}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section facilities">
        <div className="container">
          <h2 className="section-title">Facilities & Technology</h2>
          <p className="section-subtitle">Modern infrastructure to support superior outcomes</p>
          <div className="grid grid-4">
            {[
              { title: '24/7 ICU', emoji: '🏥' },
              { title: 'Modular OTs', emoji: '🛠️' },
              { title: 'Cath Lab', emoji: '🫀' },
              { title: 'MRI & CT', emoji: '🧲' },
              { title: 'Dialysis', emoji: '💧' },
              { title: 'Pharmacy', emoji: '💊' },
              { title: 'Ambulance', emoji: '🚑' },
              { title: 'Cafeteria', emoji: '☕' },
            ].map((f) => (
              <div key={f.title} className="facility-card">
                <div className="f-icon" aria-hidden>{f.emoji}</div>
                <div style={{ fontWeight: 700 }}>{f.title}</div>
                <div className="qc-desc">Round-the-clock availability</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International patients */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container international">
          <div>
            <h3 style={{ marginTop: 0 }}>International Patients</h3>
            <p className="section-subtitle" style={{ margin: 0 }}>End-to-end assistance for travel, stay, and treatment planning</p>
            <div style={{ marginTop: 12 }}>
              <a className="btn btn-primary" href="#">Plan Your Visit</a>
            </div>
          </div>
          <div style={{ display: 'grid', placeItems: 'center' }}>🌍</div>
        </div>
      </section>

      {/* Appointment snippet */}
      <section id="appointment" className="section appointment">
        <div className="container">
          <h2 className="section-title">Book an Appointment</h2>
          <p className="section-subtitle">We will get back to you shortly to confirm your slot</p>
          <Link className="btn btn-primary" to="/appointment">Go to Appointment Page</Link>
        </div>
      </section>

      {/* News & Updates */}
      <section id="news" className="section news">
        <div className="container">
          <h2 className="section-title">News & Updates</h2>
          <p className="section-subtitle">Latest announcements and health tips</p>
          <div className="grid grid-3">
            {[
              { title: 'Free Cardiac Camp this Sunday', date: 'Aug 24, 2025' },
              { title: 'Life Care launches new ICU', date: 'Jul 11, 2025' },
              { title: 'World Health Day awareness drive', date: 'Apr 7, 2025' },
            ].map((n) => (
              <article key={n.title} className="news-card">
                <div className="news-img" />
                <div className="news-body">
                  <h3>{n.title}</h3>
                  <div className="news-meta">{n.date}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="section testimonials">
        <div className="container">
          <h2 className="section-title">What Patients Say</h2>
          <div className="testi-wrap">
            <button className="testi-nav" onClick={() => setTestimonialIndex((testimonialIndex - 1 + testimonials.length) % testimonials.length)}>‹</button>
            <div className="quote">
              <div className="stars" aria-label={`${testimonials[testimonialIndex].rating} star rating`}>
                {'★'.repeat(testimonials[testimonialIndex].rating)}
                {'☆'.repeat(5 - testimonials[testimonialIndex].rating)}
              </div>
              “{testimonials[testimonialIndex].text}”
              <div className="q-author">— {testimonials[testimonialIndex].name}</div>
            </div>
            <button className="testi-nav" onClick={() => setTestimonialIndex((testimonialIndex + 1) % testimonials.length)}>›</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container footer-inner">
          <div>
            <h4>Life Care Hospital</h4>
            <p>Delivering compassionate, high-quality healthcare with modern facilities.</p>
            <div style={{ display: 'flex', gap: 8 }}>
              <a href="#" aria-label="Facebook">👍</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="YouTube">▶️</a>
            </div>
          </div>
          <div>
            <h4>Quick Links</h4>
            <div style={{ display: 'grid', gap: 8 }}>
              <Link to="/services">Services</Link>
              <Link to="/centers">Centers</Link>
              <Link to="/doctors">Doctors</Link>
              <Link to="/appointment">Appointment</Link>
              <Link to="/news">News</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
          <div>
            <h4>Contact</h4>
            <div style={{ display: 'grid', gap: 8 }}>
              <a href="tel:+1800123456">+1 800 123 456</a>
              <a href="mailto:care@lifecarehospital.com">care@lifecarehospital.com</a>
              <span>123, Health Avenue, City</span>
            </div>
          </div>
          <div>
            <h4>Newsletter</h4>
            <div style={{ display: 'flex', gap: 8 }}>
              <input aria-label="Email" placeholder="Enter your email" style={{ flex: 1, padding: '10px 12px', borderRadius: 999, border: '1px solid #334155', background: '#0f172a', color: '#e2e8f0' }} />
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="container bottom-inner">
            <span>© {new Date().getFullYear()} Life Care Hospital. All rights reserved.</span>
            <span>Made with ❤️ for better health.</span>
          </div>
        </div>
      </footer>

      {/* Floating CTAs */}
      <a className="float-cta whatsapp" href="#" aria-label="WhatsApp">💬</a>
      <a className="float-cta call" href="tel:+1800123456" aria-label="Call Ambulance">🚑</a>
    </>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/centers" element={<CentersPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/doctors" element={<DoctorsPage />} />
      <Route path="/appointment" element={<AppointmentPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  )
}
