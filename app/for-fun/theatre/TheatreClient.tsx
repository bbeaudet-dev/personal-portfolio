'use client'

import { useState } from 'react'
import { getShowRank, getTotalShows, formatRank, getShowBySlug } from 'app/for-fun/theatre/reviews/show-list'
import { ContentList } from 'app/components/ContentListItem'

interface TheatreClientProps {
  reviews: any[]
}

function formatDate(dateString: string, includeYear: boolean = true): string {
  const date = new Date(dateString)
  if (includeYear) {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

export default function TheatreClient({ reviews }: TheatreClientProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const allReviews = reviews.sort((a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime())

  return (
    <section>
      <h1 className="text-2xl font-bold mb-6">Theatre Reviews</h1>
      
      <div className="prose prose-neutral dark:prose-invert mb-8">
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
          My first trip to New York City was with my then-fiancee and her friend in April 2022. Since I was playing in a squash tournament and planned on watching the Tournament of Champions at Grand Central Terminal, it worked out well that Sophia's friend Rose came along with us.
          {!isExpanded && (
            <button
              onClick={() => setIsExpanded(true)}
              className="ml-2 text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              Read more...
            </button>
          )}
        </p>
        
        {isExpanded && (
          <>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
              They went "show-maxxing" a term we maybe invented(?) while I spent most of the weekend doing squash. Eventually I went with them to see POTUS and I was hooked from there. I have Rose to thank for the initial introduction.
            </p>
            
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
              What is it that I love? Ranking is fun, allegory, emotional depth, resonance, live performance, and live orchestra.
            </p>
          </>
        )}
      </div>

      <ContentList
        items={allReviews}
        getItemProps={(review) => {
          const showInfo = getShowBySlug(review.slug)
          const displayName = showInfo ? showInfo.name : review.metadata.showName
          const rank = getShowRank(displayName)
          const totalShows = getTotalShows()
          return {
            date: formatDate(review.metadata.publishedAt, false),
            title: displayName,
            href: `/for-fun/theatre/${review.slug}`,
            extra: formatRank(rank, totalShows),
          }
        }}
        getKey={(review) => review.slug}
      />
    </section>
  )
} 