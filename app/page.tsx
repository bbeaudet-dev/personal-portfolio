import { BlogPosts } from 'app/components/posts'

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
        {`I'm pivoting from mechanical engineering to software engineering and writing helps me process/understand/explain everything better. `}
      </p>
      <p className="mb-4">
        {`From 06/02 to 08/30, I'll be doing the Fractal Bootcamp & AI Accelerator, so most of my posts will be about coding and game dev, but I want to leave it open based on what I like to write and what you might like to read. `}
      </p>
      <p className="mb-4">
        {`Welcome and thanks for being here!`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
