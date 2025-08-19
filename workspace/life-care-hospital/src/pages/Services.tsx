export default function ServicesPage() {
  const services = [
    { title: 'Emergency Care', desc: '24/7 trauma and emergency services.' },
    { title: 'Cardiology', desc: 'Heart care and interventions.' },
    { title: 'Orthopedics', desc: 'Joint replacements and sports injuries.' },
    { title: 'Neurology', desc: 'Brain and nerve care with advanced diagnostics.' },
    { title: 'Pediatrics', desc: 'Compassionate care for children.' },
    { title: 'Diagnostics', desc: 'Imaging and laboratory services.' },
  ]
  return (
    <main className="section">
      <div className="container">
        <h1 className="section-title">Our Services</h1>
        <p className="section-subtitle">Comprehensive, patient-centered care</p>
        <div className="grid grid-3">
          {services.map(s => (
            <div key={s.title} className="card">
              <div className="icon" aria-hidden>🩺</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}