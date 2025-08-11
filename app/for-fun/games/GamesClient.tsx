'use client'

import { useState, useMemo } from 'react'
import { GameData } from 'app/components/sections'
import GameWordCloud from 'app/components/GameWordCloud'

interface GamesClientProps {
  games: GameData[]
}

export default function GamesClient({ games }: GamesClientProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [filter, setFilter] = useState<'all' | 'childhood' | 'teenager' | 'adult'>('all')

  // Filter games based on selected period
  const filteredGames = useMemo(() => {
    return games.filter(game => {
      if (filter === 'all') return true
      return game.metadata.periods.includes(filter)
    })
  }, [games, filter])

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter"></h1>
      
      {/* Game Cloud */}
      <div className="mb-8">
        <GameWordCloud games={filteredGames} />
      </div>

      {/* Filter Controls */}
      <div className="flex justify-center space-x-2 mb-8">
        <button
          onClick={() => setFilter('all')}
          className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
            filter === 'all'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          All ({games.length})
        </button>
        <button
          onClick={() => setFilter('childhood')}
          className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
            filter === 'childhood'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          Childhood ({games.filter(g => g.metadata.periods.includes('childhood')).length})
        </button>
        <button
          onClick={() => setFilter('teenager')}
          className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
            filter === 'teenager'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          Teenager ({games.filter(g => g.metadata.periods.includes('teenager')).length})
        </button>
        <button
          onClick={() => setFilter('adult')}
          className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
            filter === 'adult'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          Adult ({games.filter(g => g.metadata.periods.includes('adult')).length})
        </button>
      </div>

      {/* Introduction Paragraph */}
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
    </section>
  )
} 