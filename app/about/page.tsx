import { HighlightReel } from 'app/components/HighlightReel'
import Image from 'next/image'

export const metadata = {
  title: 'About',
  description: 'Learn more about Ben Beaudet - engineer, creative, and game developer.',
}

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden">
      <section className="max-w-3xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-start md:gap-8 mb-8">
          <div className="flex-1">
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
              hey, I'm ben
            </h1>
            
            {/* Introduction Section */}
            <div className="mb-4 space-y-4">
              <p className="text-base leading-relaxed">
                I'm a mechanical engineer pivoting to software engineering with a passion for creative design and game development, currently diving deep into embedded systems, full-stack development, AI integration, and indie game development.
              </p>
              <p className="text-base leading-relaxed">
                After years of working on medical devices and railroad trackwork, I taught myself how to code and started writing automation programs for 3D models. Through Fractal Tech's program, I've accelerated my learning and am now exploring the intersection of hardware,
                software, and creative design.
              </p>
              
              <p className="text-base leading-relaxed">
                 I'm passionate about clean code, intuitive design, and using technology in creative and unexpected ways.
              </p>
            </div>
          </div>
          
          {/* Professional Headshot */}
          <div className="flex-shrink-0 mb-6 md:mb-0">
            <div className="w-48 h-48 mx-auto md:mx-0">
              <Image
                src="/images/Professional Headshot.JPG"
                alt="Ben Beaudet - Professional Headshot"
                width={192}
                height={192}
                className="rounded-full object-cover w-full h-full shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
        
        {/* Highlight Reel */}
        <div className="my-8">
          <p className="text-base leading-relaxed mb-4">Here are some highlights thus far:</p>
          <HighlightReel />
        </div>
        
        <p className="text-base leading-relaxed">
          When I'm not coding, you'll find me at Broadway shows, hiking the National Parks, or enjoying some live music or a good book. I believe in unlocking your true potential, the importance of human connection, and building things that matter.
        </p>
        
        <p className="text-base mb-8">
          Welcome, thanks for being here.
        </p>
      </section>
    </div>
  )
} 