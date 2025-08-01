import { HighlightReel } from './HighlightReel'

export function Introduction() {
  return (
    <section className="max-w-3xl mx-auto px-4">
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        hey, I'm ben
      </h1>
      
      {/* Introduction Section */}
      <div className="mb-4 space-y-4">
        <p className="text-base leading-relaxed">
          I'm a mechanical engineer turned software engineer, currently diving deep into full-stack development, AI integration, embedded systems, and game development. After years of working on medical devices and railroad trackwork, I taught myself how to code and started writing automation programs for 3D models. Through Fractal Tech's program, I've accelerated my learning and am now exploring the intersection of hardware, 
          software, and creative design.
        </p>
        
        <p className="text-base leading-relaxed">
          I love creating things that surprise and delight people - whether it's a deceptive puzzle game that 
          uses your phone's sensors, a real-time multiplayer experience, or a tool that makes someone's day 
          a little easier. I'm passionate about clean code, intuitive design, and using technology in creative and unexpected ways.
        </p>
        
        {/* Highlight Reel */}
        <div className="my-8">
          <p className="text-base leading-relaxed mb-4">Here are some highlights thus far:</p>
          <HighlightReel />
        </div>
        
        <p className="text-base leading-relaxed">
          When I'm not coding, you'll find me at Broadway shows, hiking the National Parks, or enjoying some live music or a good book. I believe in unlocking your true potential, the importance of human connection, and building things that matter. I'm excited about the future 
          of AI, the potential for immersive experiences, and creating technology that enhances rather than 
          replaces human creativity.
        </p>
      </div>
      
      <p className="text-base mb-8">
        Welcome, thanks for being here.
      </p>
    </section>
  )
} 