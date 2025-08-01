import { getBlogPosts } from '../../blog/utils'

export interface BlogItem {
  title: string
  href: string
  tag?: string
  collection?: string
  date: string
  summary: string
}

export function BlogHome() {
  const allBlogs = getBlogPosts()
  
  // Sort blog posts: prominence first, then by date
  const sortedBlogs = allBlogs.sort((a, b) => {
    const aProminence = a.metadata.prominence || 999
    const bProminence = b.metadata.prominence || 999
    
    if (aProminence !== bProminence) {
      return (aProminence as number) - (bProminence as number)
    }
    
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime()
  })

  const blogItems: BlogItem[] = sortedBlogs.map(post => ({
    title: post.metadata.title,
    href: `/blog/${post.slug}`,
    tag: post.metadata.tag,
    collection: post.metadata.collection,
    date: post.metadata.publishedAt,
    summary: post.metadata.summary,
  }))

  return { blogItems }
} 