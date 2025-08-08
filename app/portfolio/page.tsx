import { getPortfolioProjects } from 'app/portfolio/utils'
import { formatDate } from 'app/blog/utils'
import { ContentList } from 'app/components/ContentListItem'

export const metadata = {
  title: "Ben's Portfolio",
  description: 'Check out my projects and work.',
}

export default function Page() {
  const allProjects = getPortfolioProjects().sort((a, b) => {
    // Sort by prominence first (lower prominence = first), then by date
    const aProminence = a.metadata.prominence || 999
    const bProminence = b.metadata.prominence || 999
    
    if (aProminence !== bProminence) {
      return (aProminence as number) - (bProminence as number)
    }
    
    return new Date(b.metadata.completedAt).getTime() - new Date(a.metadata.completedAt).getTime()
  })
  
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Project Portfolio</h1>
      <div className="mb-6">
        <a href="/portfolio/resume" className="inline-block px-6 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 font-medium shadow hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
          View Resumé
        </a>
      </div>
      <h2 className="font-semibold text-2xl mb-8 tracking-tighter">Software Engineering</h2>
      <ContentList
        items={allProjects}
        getItemProps={(project) => ({
          date: formatDate(project.metadata.completedAt),
          title: project.metadata.title,
          href: `/portfolio/${project.slug}`,
          tag: project.metadata.tag,
        })}
        getKey={(project) => project.slug}
      />
      <h2 className="font-semibold text-2xl mb-8 tracking-tighter">Mechanical Engineering</h2>
      <ContentList
        items={[
          {
            slug: 'cerelog',
            metadata: {
              title: 'Brainwave Data Flow & Serial Communication',
              completedAt: '2025-06-27',
              tag: 'Internship',
              prominence: 1
            }
          },
          {
            slug: 'trackwork-automation',
            metadata: {
              title: 'CAD Automation for Trackwork',
              completedAt: '2025-02-01',
              tag: 'Automation',
              prominence: 2
            }
          },
          {
            slug: 'or-free',
            metadata: {
              title: 'Surgical Device Demonstration Kit',
              completedAt: '2023-01-01',
              tag: 'Medical Device',
              prominence: 3
            }
          },
          {
            slug: 'birkdale',
            metadata: {
              title: 'Mirror Therapy Rehabilitation Device',
              completedAt: '2019-06-01',
              tag: 'Medical Device',
              prominence: 4
            }
          },
          {
            slug: 'aeroelastic-instability',
            metadata: {
              title: 'Aeroelastic Instability (Flutter) Case Study',
              completedAt: '2019-05-01',
              tag: 'Research',
              prominence: 5
            }
          },
          {
            slug: 'cylinder-piston-pump',
            metadata: {
              title: 'Piston-Cylinder Pump Design & Manufacturing',
              completedAt: '2019-03-01',
              tag: 'Mechanical Design',
              prominence: 6
            }
          }
        ]}
        getItemProps={(project) => ({
          date: formatDate(project.metadata.completedAt),
          title: project.metadata.title,
          href: `/portfolio/${project.slug}`,
          tag: project.metadata.tag,
        })}
        getKey={(project) => project.slug}
      />
      </section>
  )
} 