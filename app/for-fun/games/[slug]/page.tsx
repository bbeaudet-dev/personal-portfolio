import { notFound } from 'next/navigation'
import { CustomMDX } from '../../../components/MDX'
import { getGames, getGameBySlug } from '../utils'
import { baseUrl } from '../../../sitemap'
import Image from 'next/image'

export async function generateStaticParams() {
  const games = getGames()
  return games.map((game) => ({
    slug: game.slug,
  }))
}

export function generateMetadata({ params }) {
  const game = getGameBySlug(params.slug)
  if (!game) {
    return
  }

  const { title, summary, image } = game.metadata
  const ogImage = image ? image : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description: summary,
    openGraph: {
      title,
      description: summary,
      type: 'article',
      url: `${baseUrl}/for-fun/games/${game.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: summary,
      images: [ogImage],
    },
  }
}

export default function GamePage({ params }) {
  const game = getGameBySlug(params.slug)

  if (!game) {
    notFound()
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Game',
            headline: game.metadata.title,
            description: game.metadata.summary,
            image: game.metadata.image
              ? `${baseUrl}${game.metadata.image}`
              : `/og?title=${encodeURIComponent(game.metadata.title)}`,
            url: `${baseUrl}/for-fun/games/${game.slug}`,
            author: {
              '@type': 'Person',
              name: 'Ben B',
            },
          }),
        }}
      />
      
      <div className="mb-8">
        <h1 className="font-semibold text-2xl mb-4 tracking-tighter">
          {game.metadata.title}
        </h1>
        
        {game.metadata.image && (
          <div className="mb-6 relative h-64 w-full max-w-2xl">
            <Image
              src={game.metadata.image}
              alt={game.metadata.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        )}
        
        <div className="flex flex-wrap gap-4 mb-6 text-sm">
          <div className="flex items-center gap-2">
            <span className="font-medium">Genre:</span>
            <span className="text-neutral-600 dark:text-neutral-400">{game.metadata.genre}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium">Platform:</span>
            <span className="text-neutral-600 dark:text-neutral-400">{game.metadata.platform}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium">Playtime:</span>
            <span className="text-neutral-600 dark:text-neutral-400">{game.metadata.playtime}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium">Rating:</span>
            <span className="text-neutral-600 dark:text-neutral-400">{game.metadata.rating}/10</span>
          </div>
        </div>
        
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
          {game.metadata.summary}
        </p>
      </div>
      
      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <CustomMDX source={game.content} />
      </article>
      
      <div className="mt-8 flex justify-left">
        <a 
          href="/for-fun/games" 
          className="inline-block px-6 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 font-medium shadow hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
        >
          ← Back to Games
        </a>
      </div>
    </section>
  )
} 