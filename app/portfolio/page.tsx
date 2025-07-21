import { getPortfolioProjects } from 'app/portfolio/utils'
import { formatDate } from 'app/blog/utils'
import { ContentList } from 'app/components/content-list-item'

export const metadata = {
  title: "Ben's Portfolio",
  description: 'Check out my projects and work.',
}

export default function Page() {
  const allProjects = getPortfolioProjects().sort((a, b) => new Date(b.metadata.completedAt).getTime() - new Date(a.metadata.completedAt).getTime())
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Portfolio</h1>
      <ContentList
        items={allProjects}
        getItemProps={(project) => ({
          date: formatDate(project.metadata.completedAt),
          title: project.metadata.title,
          href: `/portfolio/${project.slug}`,
        })}
        getKey={(project) => project.slug}
      />
    </section>
  )
} 