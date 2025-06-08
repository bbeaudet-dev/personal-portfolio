import { baseUrl } from 'app/sitemap'
import { getBlogPosts } from 'app/blog/utils'

export async function GET() {
  let allBlogs = await getBlogPosts()

  const itemsXml = allBlogs
    .sort((a, b) => {
      const dateA = new Date(a.metadata.publishedAt || a.metadata.date || new Date().toISOString())
      const dateB = new Date(b.metadata.publishedAt || b.metadata.date || new Date().toISOString())
      return dateB.getTime() - dateA.getTime()
    })
    .map(
      (post) => {
        const pubDate = new Date(post.metadata.publishedAt || post.metadata.date || new Date().toISOString())
        return `<item>
          <title>${post.metadata.title}</title>
          <link>${baseUrl}/blog/${post.slug}</link>
          <description>${post.metadata.summary || ''}</description>
          <pubDate>${pubDate.toUTCString()}</pubDate>
        </item>`
      }
    )
    .join('\n')

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>My Portfolio</title>
        <link>${baseUrl}</link>
        <description>This is my portfolio RSS feed</description>
        ${itemsXml}
    </channel>
  </rss>`

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'text/xml',
    },
  })
}
