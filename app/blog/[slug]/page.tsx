import { notFound } from 'next/navigation'
import { CustomMDX } from '../../components/MDX'
import { formatDate, getBlogPosts } from 'app/blog/utils'
import { baseUrl } from 'app/sitemap'
import { Badge } from 'app/components/ui/badge'

// Add type for Metadata with optional collection

type Metadata = {
  title: string
  publishedAt?: string
  date?: string
  summary: string
  image?: string
  collection?: string
  tag?: string
}

export async function generateStaticParams() {
  let posts = getBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug)
  if (!post) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default function Blog({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  let allPosts = getBlogPosts().sort((a, b) => new Date(a.metadata.publishedAt).getTime() - new Date(b.metadata.publishedAt).getTime()) as { metadata: Metadata; slug: string; content: string }[]
  let currentIndex = allPosts.findIndex((p) => p.slug === params.slug)
  let prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null
  let nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null
  let collection = (post.metadata as Metadata).collection
  let relatedPosts: { metadata: Metadata; slug: string; content: string }[] = []
  if (collection) {
    relatedPosts = allPosts.filter((p) => p.slug !== params.slug && (p.metadata as Metadata).collection === collection).slice(-3).reverse()
  }

  // Map collection to badge variant
  const getBadgeVariant = (collection?: string) => {
    if (!collection) return 'secondary'
    switch (collection) {
      case 'fractal-weekly-reflection':
        return 'fractal'
      case 'beginner-programmer':
        return 'beginner-programmer'
      default:
        return 'secondary'
    }
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'just another blog',
            },
          }),
        }}
      />
      <div className="flex items-center gap-3 mb-2">
        <h1 className="title font-semibold text-2xl tracking-tighter">
          {post.metadata.title}
        </h1>
        {(post.metadata as Metadata).tag && (
          <Badge variant={getBadgeVariant(collection)} className="text-xs">
            {(post.metadata as Metadata).tag}
          </Badge>
        )}
      </div>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.metadata.publishedAt)}
        </p>
      </div>
      <article className="prose">
        <CustomMDX source={post.content} />
      </article>

      {/* Horizontal rule after blog post */}
      <hr className="my-8 border-neutral-200 dark:border-neutral-800" />

      {/* Related Posts Section */}
      {collection && relatedPosts.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-4">Related Posts</h3>
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
            {relatedPosts.map((related) => (
              <a key={related.slug} href={`/blog/${related.slug}`} className="block group flex-1 border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors">
                <div className="flex items-center gap-2 mb-1">
                  <div className="font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {related.metadata.title}
                  </div>
                  {related.metadata.tag && (
                    <Badge variant={getBadgeVariant(related.metadata.collection)} className="text-xs">
                      {related.metadata.tag}
                    </Badge>
                  )}
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">
                  {formatDate(related.metadata.publishedAt)}
                </div>
                <div className="text-neutral-700 dark:text-neutral-300 text-sm line-clamp-2">
                  {related.metadata.summary}
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Back to Blog link */}
      <div className="mt-8 flex justify-left">
        <a href="/blog" className="inline-block px-6 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 font-medium shadow hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
          ← Back to Blog Posts
        </a>
      </div>
    </section>
  )
}
