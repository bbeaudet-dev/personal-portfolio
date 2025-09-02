import { HighlightReel } from './HighlightReel'
import Image from 'next/image'

export function Introduction() {
  return (
    <section className="max-w-3xl mx-auto px-4">
      <div className="flex flex-col md:flex-row md:items-start md:gap-8 mb-8">
        <div className="flex-1">
          <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
            hey, I'm ben
          </h1>
          
          {/* Introduction Section */}
          <div className="mb-4 space-y-4">
            <p className="text-base leading-relaxed">
              After 5 years as a mechanical engineer, I discovered my passion for coding and pivoted to software engineering. I'm drawn to projects that blend physical and digital worlds—from developing AI-powered smart mirrors to designing medical devices for stroke rehab and EEG brainwave monitoring. I'm seeking opportunities in fullstack development and AI engineering to drive meaningful innovation.
            </p>
          </div>
        </div>
        
        {/* Professional Headshot */}
        <div className="flex-shrink-0 mb-6 md:mb-0">
          <div className="w-48 h-48 mx-auto md:mx-0">
            <Image
              src="/Professional Headshot.JPG"
              alt="Ben Beaudet - Professional Headshot"
              width={192}
              height={192}
              className="rounded-full object-cover w-full h-full shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
} 