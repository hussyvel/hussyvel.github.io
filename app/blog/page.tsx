import Link from 'next/link'
import { getSortedPostsData } from '@/lib/posts'

export default function Blog() {
  const allPostsData = getSortedPostsData()

  return (
    <div className="blog-page">
      <h1>Todos os Posts</h1>
      {allPostsData.length > 0 ? (
        <div className="posts-list">
          {allPostsData.map(({ id, date, title, excerpt }) => (
            <article key={id} className="post-item">
              <Link href={`/blog/${id}`}>
                <h2>{title}</h2>
                <small className="post-date">{date}</small>
                {excerpt && <p>{excerpt}</p>}
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <p>Nenhum post disponível ainda.</p>
      )}
    </div>
  )
}
