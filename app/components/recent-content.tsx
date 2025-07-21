import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'
import { getPortfolioProjects } from 'app/portfolio/utils'
import { getTheatreReviews } from 'app/theatre/utils'
import { getShowRank, getTotalShows, formatRank, getShowBySlug } from 'app/theatre/reviews/show-list'
import { ContentListItem } from 'app/components/content-list-item'

export function RecentContent() {
  let allBlogs = getBlogPosts()
  let allProjects = getPortfolioProjects()
  let allReviews = getTheatreReviews()

  // Prepare recent items for each category
  let recentBlogs = allBlogs
    .sort((a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime())
    .slice(0, 3)
  let recentProjects = allProjects
    .sort((a, b) => new Date(b.metadata.completedAt).getTime() - new Date(a.metadata.completedAt).getTime())
    .slice(0, 3)
  let recentReviews = allReviews
    .sort((a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime())
    .slice(0, 3)

  // Define categories config
  const categories = [
    {
      label: 'Portfolio',
      link: '/portfolio',
      items: recentProjects,
      getItemProps: (project: any) => ({
        date: formatDate(project.metadata.completedAt),
        title: project.metadata.title,
        href: `/portfolio/${project.slug}`,
        vertical: true,
      }),
    },
    {
      label: 'Blog',
      link: '/blog',
      items: recentBlogs,
      getItemProps: (post: any) => ({
        date: formatDate(post.metadata.publishedAt, false),
        title: post.metadata.title,
        href: `/blog/${post.slug}`,
        vertical: true,
      }),
    },
    {
      label: 'Theatre',
      link: '/theatre',
      items: recentReviews,
      getItemProps: (review: any) => {
        const showInfo = getShowBySlug(review.slug)
        const displayName = showInfo ? showInfo.name : review.metadata.showName
        const rank = getShowRank(displayName)
        const totalShows = getTotalShows()
        return {
          date: formatDate(review.metadata.publishedAt, false),
          title: displayName,
          href: `/theatre/${review.slug}`,
          extra: formatRank(rank, totalShows),
          vertical: true,
        }
      },
    },
  ]

  return (
    <div className="my-8 w-full max-w-screen-xl mx-auto flex flex-row gap-8 justify-center">
      {categories.map((cat) => (
        <div key={cat.label} className="border border-neutral-200 dark:border-neutral-800 rounded-lg bg-white dark:bg-neutral-900 p-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold tracking-tight">{cat.label}</h2>
              <Link
                href={cat.link}
                className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
              >
                View all →
              </Link>
            </div>
            <div className="space-y-1">
              {cat.items.map((item: any) => (
                <ContentListItem key={item.slug} {...cat.getItemProps(item)} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
} 