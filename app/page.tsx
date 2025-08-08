import { ContentCarousel } from 'app/components/ContentCarousel'
import { Introduction } from 'app/components/Introduction'
import { BlogHome, PortfolioHome } from 'app/components/sections'

export default function Page() {
  // Fetch data from each section
  const { portfolioItems } = PortfolioHome()
  const { blogItems } = BlogHome()

  return (
    <div className="overflow-x-hidden">
      <Introduction />
      
      {/* Section carousels */}
      <section className="w-full max-w-screen-2xl mx-auto px-4 overflow-hidden">
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
      </section>
    </div>
  )
}
