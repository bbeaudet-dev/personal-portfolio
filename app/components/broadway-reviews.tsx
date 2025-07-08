import Link from 'next/link'
import { formatDate, getBroadwayReviews, calculateAverageRating } from 'app/broadway/utils'

export function BroadwayReviews() {
  let allReviews = getBroadwayReviews()

  return (
    <div>
      {allReviews
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((review) => {
          const averageRating = calculateAverageRating(review.metadata.rating)
          return (
            <Link
              key={review.slug}
              className="flex flex-col space-y-1 mb-4 blog-post-link"
              href={`/broadway/${review.slug}`}
            >
              <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                  {formatDate(review.metadata.publishedAt, false)}
                </p>
                <div className="flex-1">
                  <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                    {review.metadata.showName}
                  </p>
                  {review.metadata.summary && (
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                      {review.metadata.summary}
                    </p>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-base text-neutral-900 dark:text-neutral-100 font-semibold">
                    {averageRating.toFixed(1)}/5
                  </span>
                </div>
              </div>
            </Link>
          )
        })}
    </div>
  )
} 