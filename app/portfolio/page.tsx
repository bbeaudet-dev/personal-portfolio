import { getFeaturedPortfolioProjects, getPortfolioProjects } from 'app/portfolio/utils'
import { ContentListHomeResponsive } from 'app/components/ContentListHomeResponsive'

export const metadata = {
  title: "Ben's Portfolio",
  description: 'Check out my projects and work.',
}

export default function Page() {
  const featuredProjects = getFeaturedPortfolioProjects().slice(0, 6)
  const allProjects = getPortfolioProjects().sort((a, b) => {
    // Sort by date, newest first
    const aDate = new Date(a.metadata.completedAt || '1900-01-01')
    const bDate = new Date(b.metadata.completedAt || '1900-01-01')
    return bDate.getTime() - aDate.getTime()
  })
  
  return (
    <section>
      <a href="/portfolio/resume" className="mb-4 inline-block px-6 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 font-medium shadow hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
        View Resume
      </a>
      <ContentListHomeResponsive
        title="Featured Projects"
        variant="compact"
        showViewAll={false}
        items={featuredProjects.map(project => ({
          date: project.metadata.completedAt,
          title: project.metadata.title,
          href: `/portfolio/${project.slug}`,
          tags: project.metadata.tags || [],
          summary: project.metadata.summary,
          image: project.metadata.image,
          video: project.metadata.video,
          ctas: project.metadata.ctas,
          collection: 'portfolio'
        }))}
      />
      <ContentListHomeResponsive
        title="All Projects"
        variant="compact"
        showViewAll={false}
        items={allProjects.map(project => ({
          date: project.metadata.completedAt,
          title: project.metadata.title,
          href: `/portfolio/${project.slug}`,
          tags: project.metadata.tags || [],
          summary: project.metadata.summary,
          image: project.metadata.image,
          video: project.metadata.video,
          ctas: project.metadata.ctas,
          collection: 'portfolio'
        }))}
      />
    </section>
  )
} 