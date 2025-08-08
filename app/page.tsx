import { ContentListHome } from 'app/components/ContentListHome'
import { Introduction } from 'app/components/Introduction'
import { getPortfolioProjects } from 'app/portfolio/utils'
import { getBlogPosts } from 'app/blog/utils'

export default function Page() {
  // Fetch data from each section
  const portfolioProjects = getPortfolioProjects().sort((a, b) => {
    const aProminence = a.metadata.prominence || 999
    const bProminence = b.metadata.prominence || 999
    return (aProminence as number) - (bProminence as number)
  }).slice(0, 5)

  const blogPosts = getBlogPosts().sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime()
  }).slice(0, 5)

  return (
    <div className="overflow-x-hidden">
      <Introduction />
      
      {/* Section lists */}
      <section className="w-full max-w-screen-2xl mx-auto px-4">
        <ContentListHome 
          title={
            <div className="flex items-center gap-2">
              <span>Portfolio</span>
              <span className="text-sm text-neutral-600 dark:text-neutral-400 font-normal">
                (<a href="/portfolio/resume" className="underline hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors">resume</a>)
              </span>
            </div>
          }
          items={portfolioProjects}
          getItemProps={(project) => ({
            date: project.metadata.completedAt,
            title: project.metadata.title,
            href: `/portfolio/${project.slug}`,
            tags: project.metadata.tags,
            summary: project.metadata.summary,
          })}
          getKey={(project) => project.slug}
          viewAllHref="/portfolio"
          variant="compact"
          maxItems={5}
        />
        <ContentListHome 
          title="Blog Posts"
          items={blogPosts}
          getItemProps={(post) => ({
            date: post.metadata.publishedAt,
            title: post.metadata.title,
            href: `/blog/${post.slug}`,
            tag: post.metadata.tag,
            summary: post.metadata.summary,
            collection: post.metadata.collection,
          })}
          getKey={(post) => post.slug}
          viewAllHref="/blog"
          variant="detailed"
          maxItems={5}
        />
      </section>
    </div>
  )
}
