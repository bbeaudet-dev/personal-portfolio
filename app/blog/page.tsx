import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: "Ben's Blog",
  description: 'Read my blog plz.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
      <BlogPosts />
    </section>
  )
}
