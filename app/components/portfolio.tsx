import Link from 'next/link'
import { getPortfolioProjects } from 'app/portfolio/utils'

export function PortfolioProjects() {
  let allProjects = getPortfolioProjects()

  return (
    <div>
      {allProjects
        .sort((a, b) => {
          if (
            new Date(a.metadata.completedAt) > new Date(b.metadata.completedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((project) => (
          <Link
            key={project.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/portfolio/${project.slug}`}
          >
            <div className="w-full">
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {project.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
} 