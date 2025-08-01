import { ContentCarousel } from './content-carousel'
import { PortfolioItem } from './sections/PortfolioHome'
import { BlogItem } from './sections/BlogHome'
import { TheatreItem } from './sections/TheatreHome'

interface RecentContentProps {
  portfolioItems: PortfolioItem[]
  blogItems: BlogItem[]
  theatreItems: TheatreItem[]
}

export function RecentContent({ portfolioItems, blogItems, theatreItems }: RecentContentProps) {
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