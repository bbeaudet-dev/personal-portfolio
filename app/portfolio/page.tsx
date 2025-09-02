import { getPortfolioProjects } from 'app/portfolio/utils'
import { formatDate } from 'app/blog/utils'
import { ContentListHomeResponsive } from 'app/components/ContentListHomeResponsive'

export const metadata = {
  title: "Ben's Portfolio",
  description: 'Check out my projects and work.',
}

export default function Page() {
  const allProjects = getPortfolioProjects().sort((a, b) => {
    // Sort by date, newest first
    const aDate = new Date(a.metadata.completedAt || '1900-01-01')
    const bDate = new Date(b.metadata.completedAt || '1900-01-01')
    return bDate.getTime() - aDate.getTime()
  })
  
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Project Portfolio</h1>
      <div className="mb-6">
        <a href="/portfolio/resume" className="inline-block px-6 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 font-medium shadow hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
          View Resumé
        </a>
      </div>
      <h2 className="font-semibold text-2xl mb-8 tracking-tighter">All Projects</h2>
      <ContentListHomeResponsive
        title="Portfolio Projects"
        viewAllHref="/portfolio"
        variant="detailed"
        items={allProjects.map(project => ({
          date: project.metadata.completedAt,
          title: project.metadata.title,
          href: `/portfolio/${project.slug}`,
          tags: project.metadata.tags || [],
          summary: project.metadata.summary,
          image: project.metadata.image,
          collection: 'portfolio'
        }))}
      />
    </section>
  )
} 