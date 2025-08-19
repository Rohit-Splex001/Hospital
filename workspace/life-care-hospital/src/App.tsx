import { useState } from 'react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Topbar */}
      <div className="topbar">
        <div className="container topbar-inner">
          <div>
            <span>📍 24/7 Emergency</span>
          </div>
          <div style={{ display: 'flex', gap: 16 }}>
            <a href="tel:+1800123456">📞 +1 800 123 456</a>
            <a href="mailto:care@lifecarehospital.com">✉️ care@lifecarehospital.com</a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="container navbar-inner">
          <div className="brand">
            <span>Life Care Hospital</span>
            <small>Compassion. Excellence. Trust.</small>
          </div>
          <button className="btn btn-outline" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            Menu
          </button>
          <div className="nav-links" style={{ display: isMenuOpen ? 'flex' : undefined }}>
            <a className="nav-link" href="#services">Services</a>
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#doctors">Doctors</a>
            <a className="nav-link" href="#testimonials">Testimonials</a>
            <a className="nav-link" href="#contact">Contact</a>
          </div>
          <div className="nav-cta">
            <a className="btn btn-primary" href="#contact">Book Appointment</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="hero">
        <div className="container hero-inner">
          <div>
            <h1>Compassionate Care. Advanced Medicine.</h1>
            <p>
              At Life Care Hospital, we combine expertise and empathy to deliver world-class
              healthcare across specialties with cutting-edge technology.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#contact">Book Appointment</a>
              <a className="btn btn-outline" href="#doctors">Find a Doctor</a>
            </div>
            <div className="hero-stats">
              <div className="stat"><strong>24/7</strong><div>Emergency</div></div>
              <div className="stat"><strong>150+</strong><div>Specialists</div></div>
              <div className="stat"><strong>1M+</strong><div>Patients Served</div></div>
            </div>
          </div>
          <div>
            <div className="img-holder" style={{ background: '#dff3ff', borderRadius: 16, aspectRatio: '4/3', display: 'grid', placeItems: 'center' }}>
              <svg width="200" height="200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.477 2 2 6.477 2 12v6a2 2 0 0 0 2 2h5v-4H6v-4h3V9a4 4 0 0 1 4-4h3v4h-3v3h3l-1 4h-2v4h5a2 2 0 0 0 2-2v-6c0-5.523-4.477-10-10-10z" fill="currentColor"/>
              </svg>
            </div>
          </div>
        </div>
      </header>

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

      {/* About */}
      <section id="about" className="section about">
        <div className="container about-inner">
          <div className="img-holder" />
          <div className="content">
            <h2 className="section-title">About Life Care Hospital</h2>
            <p>
              We are dedicated to delivering compassionate, high-quality healthcare.
              Our multidisciplinary team leverages modern medical technology to provide
              personalized treatments and outstanding outcomes.
            </p>
            <ul style={{ margin: '12px 0 0 0', padding: 0, listStyle: 'none', display: 'grid', gap: 8 }}>
              <li>• NABH standards and quality protocols</li>
              <li>• Modern ICUs, OTs, and advanced imaging</li>
              <li>• Patient-first approach with transparent care</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="band">
        <div className="container band-inner section">
          {[
            { k: 'Beds', v: '350+' },
            { k: 'Doctors', v: '150+' },
            { k: 'Nurses', v: '500+' },
            { k: 'Labs', v: '20+' },
            { k: 'Ambulances', v: '10+' },
          ].map((it) => (
            <div key={it.k} className="band-item">
              <strong>{it.v}</strong>
              <div>{it.k}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Doctors */}
      <section id="doctors" className="section doctors">
        <div className="container">
          <h2 className="section-title">Our Specialists</h2>
          <p className="section-subtitle">Meet our experienced and compassionate doctors</p>
          <div className="grid grid-3">
            {[
              { name: 'Dr. A. Sharma', role: 'Cardiologist' },
              { name: 'Dr. R. Verma', role: 'Orthopedic Surgeon' },
              { name: 'Dr. N. Iyer', role: 'Neurologist' },
            ].map((d) => (
              <div key={d.name} className="doc-card">
                <div className="doc-avatar">LC</div>
                <h3 style={{ margin: '8px 0 4px 0' }}>{d.name}</h3>
                <div className="doc-role">{d.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="section testimonials">
        <div className="container">
          <h2 className="section-title">What Patients Say</h2>
          <div className="grid grid-3">
            {[
              'Caring staff and excellent facilities. Highly recommend!',
              'Doctors listened patiently and explained everything clearly.',
              'Quick emergency response and seamless admission process.',
            ].map((q, i) => (
              <blockquote key={i} className="quote">“{q}”</blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta">
            <h3 style={{ margin: 0 }}>Ready to book an appointment?</h3>
            <p className="section-subtitle" style={{ marginTop: 4 }}>Our team is here to help you 24/7.</p>
            <a className="btn btn-primary" href="#contact">Book Now</a>
          </div>
        </div>
      </section>

      {/* Contact + Footer */}
      <footer id="contact" className="footer">
        <div className="container footer-inner">
          <div>
            <h4>Life Care Hospital</h4>
            <p>Delivering compassionate, high-quality healthcare with modern facilities.</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <div style={{ display: 'grid', gap: 8 }}>
              <a href="#services">Services</a>
              <a href="#about">About</a>
              <a href="#doctors">Doctors</a>
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
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>© {new Date().getFullYear()} Life Care Hospital. All rights reserved.</span>
            <span>Made with ❤️ for better health.</span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
