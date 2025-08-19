export default function CentersPage() {
  const centers = [
    'Cardiac Sciences','Neurosciences','Orthopedics','Gastroenterology','Oncology','Pulmonology','Nephrology','Women & Child Care','Endocrinology','Urology','ENT','Dermatology'
  ]
  return (
    <main className="section">
      <div className="container">
        <h1 className="section-title">Centers of Excellence</h1>
        <p className="section-subtitle">Dedicated departments delivering specialized care</p>
        <div className="grid grid-4">
          {centers.map(c => (
            <div key={c} className="card center-card">
              <div className="icon" aria-hidden>🏥</div>
              <h3>{c}</h3>
              <p>World-class facility with experienced specialists.</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}