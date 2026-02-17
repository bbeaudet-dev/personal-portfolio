'use client'

import { useState } from 'react'
import Link from 'next/link'
import { getShowRank, getTotalShows, formatRank, getShowBySlug, getShowDistrict } from 'app/for-fun/theatre/utils'
import TheatreCloud from 'app/components/TheatreCloud'
import { ContentList } from 'app/components/ContentListItem'
import { theatreShowList } from './data/shows-ben'
import { theatreShowListRose } from './data/shows-rose'
import { theatreShowListSophia } from './data/shows-sophia'
import { theatreShowListEric } from './data/shows-eric'

const PEOPLE = [
  { id: 'ben' as const, name: 'Ben', shows: theatreShowList, showFilters: true },
  { id: 'rose' as const, name: 'Rose', shows: theatreShowListRose, showFilters: false },
  { id: 'sophia' as const, name: 'Sophia', shows: theatreShowListSophia, showFilters: false },
  { id: 'eric' as const, name: 'Eric', shows: theatreShowListEric, showFilters: false },
]

type PersonId = typeof PEOPLE[number]['id']

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
  const [selectedPerson, setSelectedPerson] = useState<PersonId>('ben')
  const allReviews = reviews.sort((a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime())
  const current = PEOPLE.find(p => p.id === selectedPerson)!

  return (
    <section>
      <div className="mb-6">
        <h1 className="text-2xl font-bold relative z-10">Showbiz, Baby</h1>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
        My rankings, reviews, and thoughts on shows and the magic of theatre
      </p>
      
      {/* Story text above all clouds */}
      <div className="prose prose-neutral dark:prose-invert mb-8">
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
          My first trip to New York City (in 2022) was with my then-fiancee Sophia and her friend Rose. Despite living in the city with the second-largest theatre district (Cleveland's Playhouse Square), it was this trip that truly unlocked the magic of theatre for me.
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
            I didn&apos;t even <em>anticipate</em> liking Broadway shows very much - in fact, I primarily was in town to play in a squash tournament and watch the Tournament of Champions at Grand Central Terminal. So while the two of them went <Link href="/blog/show-maxxing" className="text-blue-600 dark:text-blue-400 hover:underline">show-maxxing</Link> (a term we apparently coined), I spent most of the weekend playing and watching squash. Eventually I went with them to see POTUS and I was hooked from there. We have Rose to thank for the introduction.
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
              Since then, my wife and I have indulged in many show-maxxing weekends in the big city, and we began paying attention to the theatre scene in Cleveland, which happens to be quite good as well.  
            </p>
          </>
        )}
      </div>

      {/* Single cloud for selected person */}
      <div className="mb-6">
        <TheatreCloud shows={current.shows} showFilters={current.showFilters} />
      </div>

      {/* Name selector - radio style, below cloud & filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-6" role="radiogroup" aria-label="Select whose cloud to view">
        {PEOPLE.map((person) => (
          <label
            key={person.id}
            className={`cursor-pointer select-none rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              selectedPerson === person.id
                ? 'bg-neutral-800 text-white dark:bg-neutral-200 dark:text-neutral-900'
                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700'
            }`}
          >
            <input
              type="radio"
              name="cloud-person"
              value={person.id}
              checked={selectedPerson === person.id}
              onChange={() => setSelectedPerson(person.id)}
              className="sr-only"
            />
            {person.name}
          </label>
        ))}
      </div>

      {/* Want your own cloud? */}
      <p className="text-center text-sm text-neutral-600 dark:text-neutral-400 mb-10">
        Want your own cloud?{' '}
        <a
          href="https://github.com/bbeaudet-dev/personal-portfolio/issues/55"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
        >
          Request via Github
        </a>
      </p>

      {/* Reviews Section */}
      {allReviews.length > 0 && (
        <div className="mt-12 mb-8">
          <h2 className="text-xl font-semibold mb-6 tracking-tighter">Theatre Reviews</h2>
          <ContentList
            items={allReviews}
            getItemProps={(review) => ({
              date: formatDate(review.metadata.publishedAt, false),
              title: review.metadata.showName,
              subtitle: review.metadata.summary,
              href: `/for-fun/theatre/${review.slug}`,
            })}
            getKey={(review) => review.slug}
          />
        </div>
      )}
    </section>
  )
} 