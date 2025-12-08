import Link from 'next/link'
import { getSortedPostsData } from '@/lib/posts'
import { getTranslation } from '@/lib/i18n/translations'

export default function HomePage() {
  const allPostsData = getSortedPostsData('en')
  const recentPosts = allPostsData.slice(0, 3)
  const t = getTranslation('en')

  return (
    <div className="home">
      <section className="hero">
        <h1 className="hero-title">{t.home.title}</h1>
        <p className="hero-subtitle">
          {t.home.subtitle}
        </p>
      </section>

      <section className="recent-posts">
        <h2>{t.home.recentPosts}</h2>
        {recentPosts.length > 0 ? (
          <div className="posts-grid">
            {recentPosts.map(({ id, date, title, excerpt }) => (
              <article key={id} className="post-card">
                <Link href={`/en/blog/${id}`}>
                  <h3>{title}</h3>
                  <small className="post-date">{date}</small>
                  {excerpt && <p>{excerpt}</p>}
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <p>{t.home.noPosts}</p>
        )}
        {recentPosts.length > 0 && (
          <div className="view-all">
            <Link href="/en/blog" className="btn">
              {t.home.viewAll}
            </Link>
          </div>
        )}
      </section>
    </div>
  )
}
