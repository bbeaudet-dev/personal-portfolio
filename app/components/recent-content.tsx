import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'
import { getPortfolioProjects } from 'app/portfolio/utils'
import { getBroadwayReviews } from 'app/broadway/utils'
import { getShowRank, getTotalShows, formatRank, getShowBySlug } from 'app/broadway/reviews/show-list'

export function RecentContent() {
  let allBlogs = getBlogPosts()
  let allProjects = getPortfolioProjects()
  let allReviews = getBroadwayReviews()

  // Get the 5 most recent blog posts
  let recentBlogs = allBlogs
    .sort((a, b) => {
      if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
        return -1
      }
      return 1
    })
    .slice(0, 5)

  // Get the 5 most recent portfolio projects
  let recentProjects = allProjects
    .sort((a, b) => {
      if (new Date(a.metadata.completedAt) > new Date(a.metadata.completedAt)) {
        return -1
      }
      return 1
    })
    .slice(0, 5)

  // Get the 5 most recent Broadway reviews
  let recentReviews = allReviews
    .sort((a, b) => {
      if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
        return -1
      }
      return 1
    })
    .slice(0, 5)

  return (
    <div className="space-y-6 my-8">
      {/* Recent Blog Posts */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold tracking-tight">Blog Posts</h2>
          <Link 
            href="/blog" 
            className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
          >
            View all →
          </Link>
        </div>
        <div className="flex space-x-4 overflow-x-auto pb-4 w-full">
          {recentBlogs.map((post) => (
            <Link
              key={post.slug}
              className="block group flex-shrink-0"
              href={`/blog/${post.slug}`}
            >
              <div className="w-48 p-3 border border-neutral-300 dark:border-neutral-800 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors">
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
                <p className="text-neutral-900 dark:text-neutral-100 font-medium group-hover:text-neutral-600 dark:group-hover:text-neutral-400 transition-colors text-sm">
                  {post.metadata.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Portfolio Projects */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold tracking-tight">Portfolio</h2>
          <Link 
            href="/portfolio" 
            className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
          >
            View all →
          </Link>
        </div>
        <div className="flex space-x-4 overflow-x-auto pb-4 w-full">
          {recentProjects.map((project) => (
            <Link
              key={project.slug}
              className="block group flex-shrink-0"
              href={`/portfolio/${project.slug}`}
            >
              <div className="w-48 p-3 border border-neutral-300 dark:border-neutral-800 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors">
                <p className="text-neutral-900 dark:text-neutral-100 font-medium group-hover:text-neutral-600 dark:group-hover:text-neutral-400 transition-colors text-sm">
                  {project.metadata.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Broadway Reviews */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold tracking-tight">Broadway</h2>
          <Link 
            href="/broadway" 
            className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
          >
            View all →
          </Link>
        </div>
        <div className="flex space-x-4 overflow-x-auto pb-4 w-full">
          {recentReviews.map((review) => {
            const showInfo = getShowBySlug(review.slug)
            const displayName = showInfo ? showInfo.name : review.metadata.showName
            const rank = getShowRank(displayName)
            const totalShows = getTotalShows()
            return (
              <Link
                key={review.slug}
                className="block group flex-shrink-0"
                href={`/broadway/${review.slug}`}
              >
                <div className="w-48 p-3 border border-neutral-300 dark:border-neutral-800 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors">
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                    {formatDate(review.metadata.publishedAt, false)}
                  </p>
                  <p className="text-neutral-900 dark:text-neutral-100 font-medium group-hover:text-neutral-600 dark:group-hover:text-neutral-400 transition-colors mb-2 text-sm">
                    {displayName}
                  </p>
                  <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                    {formatRank(rank, totalShows)}
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
} 