export default function AboutPage() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="section-title">About Life Care Hospital</h1>
        <p className="section-subtitle">Compassionate care backed by modern infrastructure and expert teams</p>
        <div className="grid grid-3">
          {[{t:'Our Mission',d:'Deliver accessible, high-quality healthcare with empathy.'},{t:'Quality & Safety',d:'NABH-aligned protocols and continuous quality improvement.'},{t:'Technology',d:'Advanced ICUs, OTs, imaging, and labs for comprehensive care.'}].map(x=> (
            <div key={x.t} className="card">
              <h3>{x.t}</h3>
              <p>{x.d}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}