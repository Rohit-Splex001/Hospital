import { useState } from 'react'

const DOCTORS = [
  { name: 'Dr. A. Sharma', role: 'Cardiologist' },
  { name: 'Dr. R. Verma', role: 'Orthopedic Surgeon' },
  { name: 'Dr. N. Iyer', role: 'Neurologist' },
  { name: 'Dr. P. Rao', role: 'Pediatrician' },
]

export default function DoctorsPage() {
  const [q, setQ] = useState('')
  const filtered = DOCTORS.filter(d => (d.name + d.role).toLowerCase().includes(q.toLowerCase()))
  return (
    <main className="section">
      <div className="container">
        <h1 className="section-title">Find a Doctor</h1>
        <p className="section-subtitle">Search for specialists by name or department</p>
        <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
          <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search doctors..." style={{ flex: 1, padding: '12px 14px', border: '1px solid #cbd5e1', borderRadius: 10 }} />
        </div>
        <div className="grid grid-3">
          {filtered.map(d => (
            <div key={d.name} className="doc-card">
              <div className="doc-avatar">LC</div>
              <h3 style={{ margin: '8px 0 4px 0' }}>{d.name}</h3>
              <div className="doc-role">{d.role}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}