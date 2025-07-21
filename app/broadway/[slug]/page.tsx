import { getBroadwayReviews, formatDate, calculateAverageRating } from 'app/broadway/utils'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'

function RatingCategory({ 
  title, 
  rating, 
  description 
}: { 
  title: string
  rating: number
  description: string 
}) {
  return (
    <div className="flex items-center justify-between py-1 border-b border-neutral-200 dark:border-neutral-800">
      <div className="flex-1">
        <h3 className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
          {title}
        </h3>
        <p className="text-xs text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 w-6 text-right">
          {rating}/5
        </span>
      </div>
    </div>
  )
}

export default function BroadwayReviewPage({
  params,
}: {
  params: { slug: string }
}) {
  const reviews = getBroadwayReviews()
  const review = reviews.find((review) => review.slug === params.slug)

  if (!review) {
    notFound()
  }

  const hasRating = review.metadata.rating && 
    Object.values(review.metadata.rating).some(rating => rating > 0)
  const averageRating = hasRating ? calculateAverageRating(review.metadata.rating) : 0

  return (
    <section>
      <div className="mb-8">
        <h1 className="font-bold text-3xl mb-2 tracking-tighter">
          {review.metadata.showName}
        </h1>
        <div className="flex items-center space-x-4 text-neutral-600 dark:text-neutral-400 mb-4">
          <span>{formatDate(review.metadata.publishedAt)}</span>
          {review.metadata.theater && (
            <span>• {review.metadata.theater}</span>
          )}
          {review.metadata.dateSeen && (
            <span>• Seen {formatDate(review.metadata.dateSeen)}</span>
          )}
        </div>
        {review.metadata.summary && (
          <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6">
            {review.metadata.summary}
          </p>
        )}
      </div>

      <div className="prose prose-neutral dark:prose-invert mb-8">
        <MDXRemote source={review.content} />
      </div>

      {/* Rating Box - Only show if rating data exists */}
      {hasRating && (
        <div className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-4 mt-8">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold">Rating</h2>
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                {averageRating.toFixed(1)}/5.0
              </span>
            </div>
          </div>
          
          {/* Individual Ratings */}
          <div className="space-y-0">
            <RatingCategory
              title="Resonance"
              rating={review.metadata.rating.emotionalResonance}
              description="Was I emotionally moved? Did it make me cry, laugh, or jaw-drop?"
            />
            <RatingCategory
              title="Engagement"
              rating={review.metadata.rating.engagement}
              description="Was I ever bored or confused?"
            />
            <RatingCategory
              title="Orchestration & Score"
              rating={review.metadata.rating.orchestration}
              description="Would I listen to the score again? Does it have a strong live performance?"
            />
            <RatingCategory
              title="Choreography & Stagecraft"
              rating={review.metadata.rating.choreography}
              description="What kind of choreography, acrobatics, etc. was there? Was the stagecraft impressive?"
            />
            <RatingCategory
              title="WOW Factors"
              rating={review.metadata.rating.wowFactor}
              description="Does it have any WOW factors?"
            />
          </div>
        </div>
      )}
    </section>
  )
} 