import { getBlogPosts, getFeaturedBlogPosts, formatDate } from 'app/blog/utils'
import { ContentListHomeResponsive } from 'app/components/ContentListHomeResponsive'
import { ContentList } from 'app/components/ContentListItem'

export const metadata = {
  title: "Ben's Blog",
  description: 'Read my blog plz.',
}

export default function Page() {
  const featuredBlogs = getFeaturedBlogPosts().slice(0, 6)
  const allBlogs = getBlogPosts().sort((a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime())
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Ben Beaudet's Blog</h1>
      <ContentListHomeResponsive
        title="Featured Posts"
        variant="compact"
        showViewAll={false}
        items={featuredBlogs.map((post) => ({
          date: post.metadata.publishedAt,
          title: post.metadata.title,
          href: `/blog/${post.slug}`,
          tags: post.metadata.tags || [],
          collection: post.metadata.collection,
          summary: post.metadata.summary,
        }))}
      />
      <h2 className="text-xl font-semibold mb-4">All Posts</h2>
      <ContentList
        items={allBlogs}
        getItemProps={(post) => ({
          date: formatDate(post.metadata.publishedAt, false),
          title: post.metadata.title,
          href: `/blog/${post.slug}`,
          tags: post.metadata.tags || [],
          collection: post.metadata.collection,
        })}
        getKey={(post) => post.slug}
      />
    </section>
  )
}
