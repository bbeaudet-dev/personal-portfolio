import { Metadata } from 'next'
import Link from 'next/link'
import { getTheatreBlogPosts } from './utils'

export const metadata: Metadata = {
  title: 'Theatre Blog | Ben Beauchemin',
  description: 'Longer-form thoughts and reflections on theatre, Broadway, and musicals.',
}

export default function TheatreBlogPage() {
  const posts = getTheatreBlogPosts()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Theatre Blog</h1>
        
        <div className="mb-12">
          <p className="text-lg text-muted-foreground mb-8">
            Longer-form thoughts and reflections on theatre, Broadway, and musicals.
          </p>
          
          {posts.length > 0 ? (
            <div className="space-y-6">
              {posts.map((post) => (
                <article key={post.slug} className="border-b border-border pb-6 last:border-b-0">
                  <Link href={`/for-fun/theatre/blog/${post.slug}`} className="group">
                    <h2 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground mb-2">{post.excerpt}</p>
                    <time className="text-sm text-muted-foreground">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">No blog posts yet. Check back soon!</p>
          )}
        </div>

        <div className="border-t border-border pt-8">
          <h2 className="text-2xl font-bold mb-4">Theatre Reviews</h2>
          <p className="text-muted-foreground mb-4">
            Looking for shorter reviews? Check out my theatre reviews below.
          </p>
          <Link 
            href="/for-fun/theatre" 
            className="inline-flex items-center text-primary hover:underline"
          >
            View all reviews →
          </Link>
        </div>
      </div>
    </div>
  )
} 