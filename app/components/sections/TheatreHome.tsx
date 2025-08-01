import { getTheatreReviews } from '../../for-fun/theatre/utils'
import { getShowRank, getTotalShows, formatRank, getShowBySlug, getShowDistrict } from '../../for-fun/theatre/reviews/show-list'

export interface TheatreItem {
  title: string
  href: string
  tag: string
  extra: string
  date: string
  summary: string
}

export function TheatreHome() {
  const allReviews = getTheatreReviews()
  
  // Sort theatre reviews by date (most recent first)
  const sortedReviews = allReviews.sort((a, b) => 
    new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime()
  )

  const theatreItems: TheatreItem[] = sortedReviews.map(review => {
    const showInfo = getShowBySlug(review.slug)
    const displayName = showInfo ? showInfo.name : review.metadata.showName
    const rank = getShowRank(displayName)
    const totalShows = getTotalShows()
    
    return {
      title: displayName,
      href: `/for-fun/theatre/${review.slug}`,
      tag: getShowDistrict(displayName),
      extra: formatRank(rank, totalShows),
      date: review.metadata.publishedAt,
      summary: review.metadata.summary,
    }
  })

  return { theatreItems }
} 