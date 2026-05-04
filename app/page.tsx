import { ContentListHomeResponsive } from 'app/components/ContentListHomeResponsive'
import { Introduction } from 'app/components/Introduction'
import { getFeaturedPortfolioProjects } from 'app/portfolio/utils'
import { getFeaturedBlogPosts } from 'app/blog/utils'

export default function Page() {
  const portfolioProjects = getFeaturedPortfolioProjects()
  const blogPosts = getFeaturedBlogPosts()

  return (
    <div className="overflow-x-hidden">
      <Introduction />
      
      {/* Section lists */}
      <section className="w-full max-w-screen-2xl mx-auto px-4">
        <ContentListHomeResponsive 
          title={
            <div className="flex items-center gap-2">
              <span>Featured Projects</span>
              <span className="text-sm text-neutral-600 dark:text-neutral-400 font-normal">
                (<a href="/portfolio/resume" className="underline hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors">resume</a>)
              </span>
            </div>
          }
          items={portfolioProjects.map((project) => ({
            date: project.metadata.completedAt,
            title: project.metadata.title,
            href: `/portfolio/${project.slug}`,
            tags: project.metadata.tags,
            image: project.metadata.image,
            video: project.metadata.video,
            summary: project.metadata.summary,
            ctas: project.metadata.ctas,
          }))}
          viewAllHref="/portfolio"
          viewAllText="see all Projects"
          variant="compact"
        />
        <ContentListHomeResponsive 
          title="Featured Blogs"
          items={blogPosts.map((post) => ({
            date: post.metadata.publishedAt,
            title: post.metadata.title,
            href: `/blog/${post.slug}`,
            tags: post.metadata.tags || [],
            collection: post.metadata.collection,
          }))}
          viewAllHref="/blog"
          viewAllText="see all Posts"
          variant="compact"
        />
      </section>
    </div>
  )
}
