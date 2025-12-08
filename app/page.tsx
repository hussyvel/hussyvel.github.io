import Link from 'next/link'
import { getSortedPostsData } from '@/lib/posts'

export default function Home() {
  const allPostsData = getSortedPostsData()
  const recentPosts = allPostsData.slice(0, 3)

  return (
    <div className="home">
      <section className="hero">
        <h1 className="hero-title">Bem-vindo ao meu Blog</h1>
        <p className="hero-subtitle">
          Explorando tecnologia, desenvolvimento e inovação
        </p>
      </section>

      <section className="recent-posts">
        <h2>Posts Recentes</h2>
        {recentPosts.length > 0 ? (
          <div className="posts-grid">
            {recentPosts.map(({ id, date, title, excerpt }) => (
              <article key={id} className="post-card">
                <Link href={`/blog/${id}`}>
                  <h3>{title}</h3>
                  <small className="post-date">{date}</small>
                  {excerpt && <p>{excerpt}</p>}
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <p>Nenhum post disponível ainda.</p>
        )}
        {recentPosts.length > 0 && (
          <div className="view-all">
            <Link href="/blog" className="btn">
              Ver todos os posts →
            </Link>
          </div>
        )}
      </section>
    </div>
  )
}
