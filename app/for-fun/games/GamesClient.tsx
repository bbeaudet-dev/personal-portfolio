'use client'

import { useState } from 'react'
import Image from 'next/image'
import { GamesItem } from 'app/components/sections'

interface GamesClientProps {
  games: GamesItem[]
}

export default function GamesClient({ games }: GamesClientProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Games & Puzzles</h1>
      
      <div className="prose prose-neutral dark:prose-invert mb-8">
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
          My relationship with games has evolved significantly over the years. Some of my earliest memories are of playing <strong>Pokemon</strong> on long car rides, simply something to do to fill the in-between time.
          {!isExpanded && (
            <button
              onClick={() => setIsExpanded(true)}
              className="ml-2 text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              Read more...
            </button>
          )}
        </p>
        
        {isExpanded && (
          <>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
              As I grew older, games like <strong>Minecraft</strong> became an escape from difficult emotions and responsibilities.
            </p>
            
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
              Out of college, I discovered transformative story-driven games that changed me as a person - starting with <strong>Horizon Zero Dawn</strong> and <strong>Subnautica</strong>, and then, once I met my good friend Parth, games like<strong>Undertale</strong>, <strong>Firewatch</strong>, <strong>Hollow Knight</strong>, <strong>Celeste</strong>, and <strong>Outer Wilds</strong> became foundational to this relationship.
            </p>
            
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
              A few years later, having seemingly exhausted all of the "Undertale-like" games, I discovered the world of Sudoku variants - clever rulesets and endless variations that activated the logical, analytical, and creative parts of my brain - eventually leading me to pursue mechanical engineering and technical design work.
            </p>
            
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
              As I explored coding and automation in my technical role, I gravitated toward games about building and designing systems - games like <strong>Faster Than Light</strong>, <strong>Plate Up</strong>, <strong>Factorio</strong>, <strong>Opus Magnum</strong>, and <strong>Balatro</strong> that give me the same rush as coding.
            </p>
            
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              While designing and building games for real money would be a dream come true, I still wrestle with the feeling that they're "just games" and that my intelligence might be better used elsewhere. Nevertheless, I can now celebrate and appreciate my relationship with games and how they have shaped me as a human.
            </p>
          </>
        )}
      </div>

      <div className="mb-8">
        <h2 className="font-semibold text-xl mb-4">My Games</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <a
              key={game.slug}
              href={`/for-fun/games/${game.slug}`}
              className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 hover:border-neutral-300 dark:hover:border-neutral-600 transition-colors"
            >
              {game.metadata.image && (
                <div className="mb-4 relative h-32 w-full">
                  <Image
                    src={game.metadata.image}
                    alt={game.metadata.title}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              )}
              <h3 className="font-medium mb-2">{game.metadata.title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                {game.metadata.summary}
              </p>
              <div className="flex gap-2">
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                  {game.metadata.genre}
                </span>
                <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">
                  {game.metadata.rating}/10
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
} 