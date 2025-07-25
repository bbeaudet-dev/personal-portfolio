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
        })}
        getKey={(project) => project.slug}
      />
      <h2 className="font-semibold text-2xl mb-8 tracking-tighter">Mechanical Engineering</h2>
      <ul>
        <li>
          <a href="/portfolio/mechanical-engineering/project-10">EEG Data Serial Communication and API Integration</a>
        </li>
        <li>
          <a href="/portfolio/mechanical-engineering/project-9">Railroad Trackwork Design Automation Programs</a>
        </li>
        <li>
          <a href="/portfolio/mechanical-engineering/project-8">Railroad Trackwork Design Portfolio</a>
        </li>
        <li>
          <a href="/portfolio/mechanical-engineering/project-7">Surgical Device Demonstration Kit</a>
        </li>
        <li>
          <a href="/portfolio/mechanical-engineering/project-6">Mirror Therapy Medical Rehab Device</a>
        </li>
        <li>
          <a href="/portfolio/mechanical-engineering/project-5">Mandelbrot Set Fractal Generator</a>
        </li>
        <li>
          <a href="/portfolio/mechanical-engineering/project-4">Aeroelastic Instability of Aircraft Wings</a>
        </li>
        <li>
          <a href="/portfolio/mechanical-engineering/project-3">Piston-Cylinder Pump Design & Manufacturing</a>
        </li>
        <li>
          <a href="/portfolio/mechanical-engineering/project-2">Solar Go-Kart</a>
        </li>
        <li>
          <a href="/portfolio/mechanical-engineering/project-1">Civil Land Surveying</a>
        </li>
      </ul>
      </section>
  )
} 