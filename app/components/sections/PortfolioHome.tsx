import { getPortfolioProjects } from '../../portfolio/utils'

export interface PortfolioItem {
  title: string
  href: string
  tags?: string[]
  date: string
  summary: string
}

export function PortfolioHome() {
  const allProjects = getPortfolioProjects()
  
  // Sort projects by prominence
  const sortedProjects = allProjects.sort((a, b) => {
    const aProminence = a.metadata.prominence || 999
    const bProminence = b.metadata.prominence || 999
    return (aProminence as number) - (bProminence as number)
  })

  const portfolioItems: PortfolioItem[] = sortedProjects.map(project => ({
    title: project.metadata.title,
    href: `/portfolio/${project.slug}`,
    tags: project.metadata.tags,
    date: project.metadata.completedAt,
    summary: project.metadata.summary,
  }))

  return { portfolioItems }
} 