import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        just another blog
      </h1>
      <p className="mb-4">
        {`Hey, I'm Ben Beaudet.`}
      </p>
      <p className="mb-4">
        {`I began pivoting from mechanical engineering to software engineering a few months ago and found that helps me get better at explaining my thought process, understanding new concepts, and processing both my insights and my struggles.`}
      </p>
      <p className="mb-4">
        {`From June 2nd to August 30th 2025, I will be doing the 
        <a href="https://fractalbootcamp.com/">
          Fractal Bootcamp & AI Accelerator 
        </a>
        in Brooklyn, NY. Most of my posts will be about coding and game dev, especially during this 3-month window, but I like to explore all kinds of topics and want this to be an experiment for both what I enjoy writing about and what you might want to read.`}
      </p>
      <p className="mb-4">
        {`Welcome and thanks for being here.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
