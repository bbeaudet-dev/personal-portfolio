import { RecentContent } from 'app/components/recent-content'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        just another blog
      </h1>
      <p className="mb-4">
        {`Hey, I'm Ben.`}
      </p>
      <p className="mb-4">
        {`I'm pivoting from mechanical to software engineering and I've found that writing helps me understand myself and the world better.`}
      </p>
      <p className="mb-4">
        {`I'll be doing the Fractal Engineering Bootcamp & AI Accelerator throughout the summer, so most of my posts will be about coding, although who knows where my mind will take us. `}
      </p>
      <p className="mb-4">
        {`Welcome and thanks for being here.`}
      </p>
      <RecentContent />
    </section>
  )
}
