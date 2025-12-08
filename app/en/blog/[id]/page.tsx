import { getAllPostIds, getPostData } from '@/lib/posts'
import { getTranslation } from '@/lib/i18n/translations'
import Link from 'next/link'

export async function generateStaticParams() {
  const paths = getAllPostIds('en')
  return paths.map(path => ({
    id: path.params.id
  }))
}

export default async function Post({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id, 'en')
  const t = getTranslation('en')

  return (
    <article className="post-page">
      <div className="post-header">
        <h1>{postData.title}</h1>
        <small className="post-date">{postData.date}</small>
      </div>
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }}
      />
      <div className="post-footer">
        <Link href="/en/blog" className="back-link">
          {t.blog.backToList}
        </Link>
      </div>
    </article>
  )
}
