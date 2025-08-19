export default function ContactPage() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="section-title">Contact Us</h1>
        <p className="section-subtitle">We are here to help 24/7</p>
        <div className="grid" style={{ gridTemplateColumns: '1fr', gap: 20 }}>
          <div className="card">
            <h3>Get in touch</h3>
            <p>Phone: +1 800 123 456</p>
            <p>Email: care@lifecarehospital.com</p>
            <p>Address: 123, Health Avenue, City</p>
          </div>
          <form className="appt-form" onSubmit={(e)=>{e.preventDefault(); alert('Message sent')}}>
            <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <input placeholder="Full Name" required />
              <input placeholder="Email" type="email" required />
              <input placeholder="Phone" type="tel" required />
              <input placeholder="Subject" required />
              <textarea placeholder="Message" rows={4} style={{ gridColumn: 'span 2' }} />
            </div>
            <div style={{ marginTop: 12 }}>
              <button className="btn btn-primary" type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}