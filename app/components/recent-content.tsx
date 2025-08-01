import { getBlogPosts } from '../blog/utils'
import { getPortfolioProjects } from '../portfolio/utils'
import { getTheatreReviews } from '../for-fun/theatre/utils'
import { getShowRank, getTotalShows, formatRank, getShowBySlug, getShowDistrict } from '../for-fun/theatre/reviews/show-list'
import { ContentCarousel } from './content-carousel'

export function RecentContent() {
  let allBlogs = getBlogPosts()
  let allProjects = getPortfolioProjects()
  let allReviews = getTheatreReviews()

  // Sort blog posts: prominence first, then by date
  let sortedBlogs = allBlogs.sort((a, b) => {
    const aProminence = a.metadata.prominence || 999
    const bProminence = b.metadata.prominence || 999
    
    if (aProminence !== bProminence) {
      return (aProminence as number) - (bProminence as number)
    }
    
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime()
  })

  // Sort projects by prominence
  let sortedProjects = allProjects.sort((a, b) => {
    const aProminence = a.metadata.prominence || 999
    const bProminence = b.metadata.prominence || 999
    return (aProminence as number) - (bProminence as number)
  })

  // Sort theatre reviews by date (most recent first)
  let sortedReviews = allReviews.sort((a, b) => 
    new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime()
  )

  // Prepare carousel items
  const portfolioItems = sortedProjects.map(project => ({
    title: project.metadata.title,
    href: `/portfolio/${project.slug}`,
    tag: project.metadata.tag,
    date: project.metadata.completedAt,
    summary: project.metadata.summary,
  }))

  const blogItems = sortedBlogs.map(post => ({
    title: post.metadata.title,
    href: `/blog/${post.slug}`,
    tag: post.metadata.tag,
    collection: post.metadata.collection,
    date: post.metadata.publishedAt,
    summary: post.metadata.summary,
  }))

  const theatreItems = sortedReviews.map(review => {
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

  return (
    <div className="w-full">
      <ContentCarousel 
        title={
          <div className="flex items-center gap-2">
            <span>Portfolio</span>
            <span className="text-sm text-neutral-600 dark:text-neutral-400 font-normal">
              (<a href="/portfolio/resume" className="underline hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors">resume</a>)
            </span>
          </div>
        }
        items={portfolioItems} 
        type="portfolio" 
      />
      <ContentCarousel 
        title="Blog Posts" 
        items={blogItems} 
        type="blog" 
      />
      <ContentCarousel 
        title="Theatre Reviews" 
        items={theatreItems} 
        type="theatre" 
      />
    </div>
  )
} 