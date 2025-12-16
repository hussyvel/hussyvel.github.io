import Link from 'next/link'
import { getSortedPostsData } from '@/lib/posts'
import { getTranslation } from '@/lib/i18n/translations'

export default function BlogPage() {
  const allPostsData = getSortedPostsData('fr')
  const t = getTranslation('fr')

  return (
    <div className="blog-page">
      <h1>{t.blog.title}</h1>
      {allPostsData.length > 0 ? (
        <div className="posts-list">
          {allPostsData.map(({ id, date, title, excerpt }) => (
            <article key={id} className="post-item">
              <Link href={`/fr/blog/${id}`}>
                <h2>{title}</h2>
                <small className="post-date">{date}</small>
                {excerpt && <p>{excerpt}</p>}
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <p>{t.blog.noPosts}</p>
      )}
    </div>
  )
}
