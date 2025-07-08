import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'
import { getPortfolioProjects } from 'app/portfolio/utils'
import { getBroadwayReviews, calculateAverageRating } from 'app/broadway/utils'

export function RecentContent() {
  let allBlogs = getBlogPosts()
  let allProjects = getPortfolioProjects()
  let allReviews = getBroadwayReviews()

  // Get the 3 most recent blog posts
  let recentBlogs = allBlogs
    .sort((a, b) => {
      if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
        return -1
      }
      return 1
    })
    .slice(0, 3)

  // Get the 3 most recent portfolio projects
  let recentProjects = allProjects
    .sort((a, b) => {
      if (new Date(a.metadata.completedAt) > new Date(b.metadata.completedAt)) {
        return -1
      }
      return 1
    })
    .slice(0, 3)

  // Get the 3 most recent Broadway reviews
  let recentReviews = allReviews
    .sort((a, b) => {
      if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
        return -1
      }
      return 1
    })
    .slice(0, 3)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
      {/* Recent Blog Posts */}
      <div className="space-y-4 p-6 border border-neutral-300 dark:border-neutral-800 rounded-lg">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold tracking-tight">Blog Posts</h2>
          <Link 
            href="/blog" 
            className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
          >
            View all →
          </Link>
        </div>
        <div className="space-y-3">
          {recentBlogs.map((post) => (
            <Link
              key={post.slug}
              className="block group"
              href={`/blog/${post.slug}`}
            >
              <div className="p-3 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">
                      {formatDate(post.metadata.publishedAt, false)}
                    </p>
                    <p className="text-neutral-900 dark:text-neutral-100 font-medium group-hover:text-neutral-600 dark:group-hover:text-neutral-400 transition-colors">
                      {post.metadata.title}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Portfolio Projects */}
      <div className="space-y-4 p-6 border border-neutral-300 dark:border-neutral-800 rounded-lg">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold tracking-tight">Portfolio</h2>
          <Link 
            href="/portfolio" 
            className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
          >
            View all →
          </Link>
        </div>
        <div className="space-y-3">
          {recentProjects.map((project) => (
            <Link
              key={project.slug}
              className="block group"
              href={`/portfolio/${project.slug}`}
            >
              <div className="p-3 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">
                      {project.metadata.completedAt}
                    </p>
                    <p className="text-neutral-900 dark:text-neutral-100 font-medium group-hover:text-neutral-600 dark:group-hover:text-neutral-400 transition-colors">
                      {project.metadata.title}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Broadway Reviews */}
      <div className="space-y-4 p-6 border border-neutral-300 dark:border-neutral-800 rounded-lg">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold tracking-tight">Broadway</h2>
          <Link 
            href="/broadway" 
            className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
          >
            View all →
          </Link>
        </div>
        <div className="space-y-3">
          {recentReviews.map((review) => {
            const averageRating = calculateAverageRating(review.metadata.rating)
            return (
              <Link
                key={review.slug}
                className="block group"
                href={`/broadway/${review.slug}`}
              >
                <div className="p-3 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">
                        {formatDate(review.metadata.publishedAt, false)}
                      </p>
                      <p className="text-neutral-900 dark:text-neutral-100 font-medium group-hover:text-neutral-600 dark:group-hover:text-neutral-400 transition-colors">
                        {review.metadata.showName}
                      </p>
                    </div>
                    <div className="flex items-center ml-2">
                      <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                        {averageRating.toFixed(1)}/5
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
} 