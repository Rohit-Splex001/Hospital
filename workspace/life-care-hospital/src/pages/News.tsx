export default function NewsPage() {
  const news = [
    { title: 'Free Cardiac Camp this Sunday', date: 'Aug 24, 2025' },
    { title: 'Life Care launches new ICU', date: 'Jul 11, 2025' },
    { title: 'World Health Day awareness drive', date: 'Apr 7, 2025' },
  ]
  return (
    <main className="section">
      <div className="container">
        <h1 className="section-title">News & Updates</h1>
        <p className="section-subtitle">Latest announcements and health tips</p>
        <div className="grid grid-3">
          {news.map(n => (
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
    </main>
  )
}