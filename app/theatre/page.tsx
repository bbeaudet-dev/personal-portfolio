import { getTheatreReviews, formatDate } from 'app/theatre/utils'
import { getShowRank, getTotalShows, formatRank, getShowBySlug } from 'app/theatre/reviews/show-list'
import { ContentList } from 'app/components/content-list-item'

export default function TheatrePage() {
  const allReviews = getTheatreReviews().sort((a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime())
  return (
    <section>
      <h1 className="text-2xl font-bold mb-6">Theatre Reviews</h1>
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
            href: `/theatre/${review.slug}`,
            extra: formatRank(rank, totalShows),
          }
        }}
        getKey={(review) => review.slug}
      />
    </section>
  )
} 