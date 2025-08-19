import { useState } from 'react'

export default function AppointmentPage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <main className="section">
      <div className="container">
        <h1 className="section-title">Book an Appointment</h1>
        <p className="section-subtitle">Fill in the details and our team will reach out shortly to confirm your slot.</p>

        {submitted ? (
          <div className="cta" style={{ textAlign: 'left' }}>
            <h3 style={{ marginTop: 0 }}>Thank you!</h3>
            <p>Your appointment request has been received. We will contact you soon.</p>
          </div>
        ) : (
          <form className="appt-form" onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}>
            <div className="grid" style={{ gridTemplateColumns: '1fr' }}>
              <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <input placeholder="Full Name" required />
                <input placeholder="Phone Number" type="tel" required />
              </div>
              <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <input placeholder="Email Address" type="email" />
                <select defaultValue="" required>
                  <option value="" disabled>Department</option>
                  <option>Cardiology</option>
                  <option>Orthopedics</option>
                  <option>Neurology</option>
                  <option>Pediatrics</option>
                </select>
              </div>
              <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <input type="date" required />
                <select defaultValue="" required>
                  <option value="" disabled>Preferred Time</option>
                  <option>Morning</option>
                  <option>Afternoon</option>
                  <option>Evening</option>
                </select>
              </div>
              <textarea placeholder="Message (optional)" rows={4} />
            </div>
            <div style={{ marginTop: 12 }}>
              <button className="btn btn-primary" type="submit">Submit Request</button>
            </div>
          </form>
        )}
      </div>
    </main>
  )
}