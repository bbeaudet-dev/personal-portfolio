'use client'

import { useState, useEffect, useMemo, useCallback } from 'react'
import Image from 'next/image'

interface GameData {
  slug: string
  metadata: {
    title: string
    images: string[]
    size: number
    periods: ('childhood' | 'teenager' | 'adult')[]
    blogPosts?: Array<{
      title: string
      slug: string
    }>
    portfolioProjects?: Array<{
      title: string
      slug: string
    }>
    other?: Array<{
      title: string
      url: string
    }>
    series?: Array<{
      title: string
    }>
  }
  content: string
}

interface GameWordCloudProps {
  games: GameData[]
}

interface PositionedGame {
  game: GameData
  x: number
  y: number
  width: number
  height: number
}

export default function GameWordCloud({ games }: GameWordCloudProps) {
  const [selectedGame, setSelectedGame] = useState<GameData | null>(null)
  const [positionedGames, setPositionedGames] = useState<PositionedGame[]>([])
  const [filter, setFilter] = useState<'all' | 'childhood' | 'teenager' | 'adult'>('all')
  const [imageIndexes, setImageIndexes] = useState<Record<string, number>>({})
  const [imageOpacity, setImageOpacity] = useState<Record<string, number>>({})
  const [gameScale, setGameScale] = useState<Record<string, number>>({})
  const [currentPattern, setCurrentPattern] = useState(0)
  
  // Filter games based on selected period - memoized to prevent recreation
  const filteredGames = useMemo(() => {
    return games.filter(game => {
      if (filter === 'all') return true
      return game.metadata.periods.includes(filter)
    })
  }, [games, filter])

  // Initialize image indexes for games with multiple images
  useEffect(() => {
    const initialIndexes: Record<string, number> = {}
    const initialOpacity: Record<string, number> = {}
    const initialScale: Record<string, number> = {}
    games.forEach(game => {
      if (game.metadata.images.length > 1) {
        initialIndexes[game.slug] = 0
        initialOpacity[game.slug] = 1
      }
      initialScale[game.slug] = 1 // All games start at normal scale
    })
    setImageIndexes(initialIndexes)
    setImageOpacity(initialOpacity)
    setGameScale(initialScale)
  }, [games])

  // Update image indexes when filter changes to include new filtered games
  useEffect(() => {
    setImageIndexes(prev => {
      const newIndexes = { ...prev }
      filteredGames.forEach(game => {
        if (game.metadata.images.length > 1 && !(game.slug in newIndexes)) {
          newIndexes[game.slug] = 0
        }
      })
      return newIndexes
    })
  }, [filteredGames])

  // Calculate base size for games (1-10 scale) with dynamic scaling based on game count
  const getBaseSize = (size: number = 5) => {
    const gameCount = filteredGames.length
    
    // Base sizes for different game count ranges - increased overall scale
    let minSize, maxSize
    
    if (gameCount <= 20) {
      // Small collection - use larger sizes
      minSize = 35
      maxSize = 180
    } else if (gameCount <= 40) {
      // Medium collection - scale down by 15%
      minSize = 30
      maxSize = 153
    } else if (gameCount <= 60) {
      // Large collection - scale down by 25%
      minSize = 26
      maxSize = 135
    } else if (gameCount <= 80) {
      // Very large collection - scale down by 35%
      minSize = 23
      maxSize = 117
    } else {
      // Massive collection - scale down by 45%
      minSize = 19
      maxSize = 99
    }
    
    const step = (maxSize - minSize) / 9 // 10 sizes total
    const baseSize = Math.round(minSize + (size - 1) * step)
    
    // Much smaller size adjustment for better packing (±3%)
    const isEven = size % 2 === 0
    const adjustedSize = isEven ? Math.round(baseSize * 0.97) : baseSize // 3% smaller for even sizes
    
    return adjustedSize
  }

  // Check if a rectangle can fit at a given position
  const canFitAt = (x: number, y: number, width: number, height: number, placedRects: Array<{x: number, y: number, width: number, height: number}>) => {
    // Calculate dynamic margin based on item size
    // Smaller items get smaller margins, larger items get proportional margins
    const margin = Math.max(2, Math.min(12, width * 0.08)) // 8% of width, min 2px, max 12px
    
    // Check bounds - increased height to 800px
    if (x < 0 || y < 0 || x + width > 800 || y + height > 800) {
      return false
    }
    
    // Check collision with existing rectangles using dynamic margin
    for (const rect of placedRects) {
      if (x < rect.x + rect.width + margin && x + width + margin > rect.x && y < rect.y + rect.height + margin && y + height + margin > rect.y) {
        return false
      }
    }
    
    return true
  }

  // Find the best position for a rectangle using spiral search
  const findBestPosition = (width: number, height: number, placedRects: Array<{x: number, y: number, width: number, height: number}>) => {
    const centerX = 400
    const centerY = 400
    const maxRadius = 400
    
    // Simple spiral search - no size adjustments for now
    let angle = 0
    let radius = 0
    const angleStep = 0.1
    const radiusStep = 2
    
    while (radius <= maxRadius) {
      const x = centerX + radius * Math.cos(angle) - width / 2
      const y = centerY + radius * Math.sin(angle) - height / 2
      
      if (canFitAt(x, y, width, height, placedRects)) {
        return { x, y, width, height }
      }
      
      angle += angleStep
      radius += radiusStep * (angleStep / (2 * Math.PI))
    }
    
    // Fall back to grid search
    for (let x = 0; x <= 800 - width; x += 20) {
      for (let y = 0; y <= 800 - height; y += 20) {
        if (canFitAt(x, y, width, height, placedRects)) {
          return { x, y, width, height }
        }
      }
    }
    
    // Last resort: place with minimal overlap
    let bestX = 0
    let bestY = 0
    let minOverlap = Infinity
    
    for (let x = 0; x <= 800 - width; x += 10) {
      for (let y = 0; y <= 800 - height; y += 10) {
        let totalOverlap = 0
        
        for (const rect of placedRects) {
          const overlapX = Math.max(0, Math.min(x + width, rect.x + rect.width) - Math.max(x, rect.x))
          const overlapY = Math.max(0, Math.min(y + height, rect.y + rect.height) - Math.max(y, rect.y))
          totalOverlap += overlapX * overlapY
        }
        
        if (totalOverlap < minOverlap) {
          minOverlap = totalOverlap
          bestX = x
          bestY = y
        }
      }
    }
    
    return { x: bestX, y: bestY, width, height }
  }

  // Create the word cloud layout
  const createWordCloudLayout = (games: GameData[]) => {
    const sortedGames = [...games].sort((a, b) => (b.metadata.size || 0) - (a.metadata.size || 0))
    const positioned: PositionedGame[] = []
    const placedRects: Array<{x: number, y: number, width: number, height: number}> = []
    
    for (const game of sortedGames) {
      const baseSize = getBaseSize(game.metadata.size)
      const width = baseSize
      const height = baseSize
      
      const position = findBestPosition(width, height, placedRects)
      
      positioned.push({
        game,
        x: position.x,
        y: position.y,
        width: position.width,
        height: position.height
      })
      
      placedRects.push({
        x: position.x,
        y: position.y,
        width: position.width,
        height: position.height
      })
    }
    
    return positioned
  }

  // Update layout when filtered games change
  useEffect(() => {
    const layout = createWordCloudLayout(filteredGames)
    setPositionedGames(layout)
  }, [filteredGames])

  const handleGameClick = (game: GameData) => {
    setSelectedGame(selectedGame?.slug === game.slug ? null : game)
  }

  // Function to get object-position for specific games
  const getObjectPosition = (gameSlug: string) => {
    switch (gameSlug) {
      case 'outer-wilds':
        return '50% 25%' // Move up more to hide text at bottom
      case 'state-of-decay':
        return '50% 20%' // Move towards top of image
      case 'anatomy':
        return '50% 50%' // Center, but we'll use object-contain instead
      case 'smash-bros':
        return '50% 30%' // Zoom in on Wii U Smash Bros image
      default:
        return '50% 50%' // Center
    }
  }

  // Wave animation for all games (alternating patterns)
  useEffect(() => {
    const interval = setInterval(() => {
      // Get all games in order based on current pattern
      let gamesInOrder = [...filteredGames]
      
      switch (currentPattern) {
        case 0: // Top-left to bottom-right diagonal
          gamesInOrder.sort((a, b) => {
            const gameA = positionedGames.find(pg => pg.game.slug === a.slug)
            const gameB = positionedGames.find(pg => pg.game.slug === b.slug)
            if (!gameA || !gameB) return 0
            const diagonalA = gameA.x + gameA.y
            const diagonalB = gameB.x + gameB.y
            return diagonalA - diagonalB
          })
          break
          
        case 1: // Top-right to bottom-left diagonal
          gamesInOrder.sort((a, b) => {
            const gameA = positionedGames.find(pg => pg.game.slug === a.slug)
            const gameB = positionedGames.find(pg => pg.game.slug === b.slug)
            if (!gameA || !gameB) return 0
            const diagonalA = gameA.x - gameA.y
            const diagonalB = gameB.x - gameB.y
            return diagonalB - diagonalA // Reverse order
          })
          break
          
        case 2: // Inwards from outer ring to center
          gamesInOrder.sort((a, b) => {
            const gameA = positionedGames.find(pg => pg.game.slug === a.slug)
            const gameB = positionedGames.find(pg => pg.game.slug === b.slug)
            if (!gameA || !gameB) return 0
            const centerX = 400 // Approximate center
            const centerY = 300
            const distanceA = Math.sqrt((gameA.x - centerX) ** 2 + (gameA.y - centerY) ** 2)
            const distanceB = Math.sqrt((gameB.x - centerX) ** 2 + (gameB.y - centerY) ** 2)
            return distanceB - distanceA // Furthest to closest
          })
          break
          
        case 3: // Bottom-right to top-left diagonal
          gamesInOrder.sort((a, b) => {
            const gameA = positionedGames.find(pg => pg.game.slug === a.slug)
            const gameB = positionedGames.find(pg => pg.game.slug === b.slug)
            if (!gameA || !gameB) return 0
            const diagonalA = gameA.x + gameA.y
            const diagonalB = gameB.x + gameB.y
            return diagonalB - diagonalA // Reverse order
          })
          break
          
        case 4: // Bottom-left to top-right diagonal
          gamesInOrder.sort((a, b) => {
            const gameA = positionedGames.find(pg => pg.game.slug === a.slug)
            const gameB = positionedGames.find(pg => pg.game.slug === b.slug)
            if (!gameA || !gameB) return 0
            const diagonalA = gameA.x - gameA.y
            const diagonalB = gameB.x - gameB.y
            return diagonalA - diagonalB
          })
          break
          
        case 5: // Outwards from center to edges
          gamesInOrder.sort((a, b) => {
            const gameA = positionedGames.find(pg => pg.game.slug === a.slug)
            const gameB = positionedGames.find(pg => pg.game.slug === b.slug)
            if (!gameA || !gameB) return 0
            const centerX = 400 // Approximate center
            const centerY = 300
            const distanceA = Math.sqrt((gameA.x - centerX) ** 2 + (gameA.y - centerY) ** 2)
            const distanceB = Math.sqrt((gameB.x - centerX) ** 2 + (gameB.y - centerY) ** 2)
            return distanceA - distanceB // Closest to furthest
          })
          break
      }
      
      // Stagger the wave animation
      gamesInOrder.forEach((game, index) => {
        const delay = index * 21 // 30% faster: 30ms -> 21ms delay between each game
        
        setTimeout(() => {
          // Scale up (20% bigger: 1.15 -> 1.38)
          setGameScale(prev => ({
            ...prev,
            [game.slug]: 1.125
          }))
          
          // Change image at peak size (after 150ms of growing)
          setTimeout(() => {
            if (game.metadata.images.length > 1) {
              // Start cross-fade
              setImageOpacity(prev => ({
                ...prev,
                [game.slug]: 0
              }))
              
              // After cross-fade completes, update image index
              setTimeout(() => {
                setImageIndexes(prev => {
                  const currentIndex = prev[game.slug] || 0
                  return {
                    ...prev,
                    [game.slug]: (currentIndex + 1) % game.metadata.images.length
                  }
                })
                
                // Reset opacity for this game
                setImageOpacity(prev => ({
                  ...prev,
                  [game.slug]: 1
                }))
              }, 1250)
            }
          }, 150) // Change image at peak size
          
          // Scale back down after 450ms (longer duration: 210ms -> 450ms)
          setTimeout(() => {
            setGameScale(prev => ({
              ...prev,
              [game.slug]: 1
            }))
          }, 450)
        }, delay)
      })
      
      // Move to next pattern
      setCurrentPattern((prev) => (prev + 1) % 6)
      
    }, 2000) // Every 2 seconds

    return () => {
      clearInterval(interval)
    }
  }, [filteredGames, positionedGames, currentPattern])

  return (
    <div>
      {/* Game Cloud */}
      <div className="relative" style={{ width: '800px', height: '800px' }}>
        {positionedGames.map((positionedGame) => (
          <div
            key={positionedGame.game.slug}
            className="absolute cursor-pointer transition-all duration-200 hover:scale-105"
            style={{
              left: positionedGame.x,
              top: positionedGame.y,
              width: positionedGame.width,
              height: positionedGame.height,
              transform: `scale(${gameScale[positionedGame.game.slug] ?? 1})`,
              transition: 'transform 0.5s ease-in-out',
              zIndex: Math.round(positionedGame.width) // Bigger icons get higher z-index
            }}
            onClick={() => handleGameClick(positionedGame.game)}
          >
            {positionedGame.game.metadata.images.length > 0 ? (
              <div 
                className="w-full h-full overflow-hidden"
                style={{ borderRadius: `${Math.max(2, Math.min(8, positionedGame.width * 0.1))}px` }}
              >
                <div
                  className="relative overflow-hidden border border-gray-300 dark:border-gray-600"
                  style={{
                    width: positionedGame.width,
                    height: positionedGame.height,
                    borderRadius: `${Math.max(2, Math.min(8, positionedGame.width * 0.1))}px`
                  }}
                >
                  <div className="relative w-full h-full">
                    {/* Current image */}
                    <Image
                      key={`${positionedGame.game.slug}-current-${imageIndexes[positionedGame.game.slug] || 0}`}
                      src={positionedGame.game.metadata.images[imageIndexes[positionedGame.game.slug] || 0]}
                      alt={positionedGame.game.metadata.title}
                      width={positionedGame.width}
                      height={positionedGame.height}
                      className={`absolute inset-0 w-full h-full transition-opacity ease-in-out ${
                        positionedGame.game.slug === 'anatomy' ? 'object-contain' : 'object-cover'
                      }`}
                      style={{
                        objectPosition: getObjectPosition(positionedGame.game.slug),
                        opacity: imageOpacity[positionedGame.game.slug] ?? 1,
                        transitionDuration: '750ms'
                      }}
                    />
                    
                    {/* Next image (for cross-fade) */}
                    {positionedGame.game.metadata.images.length > 1 && (
                      <Image
                        key={`${positionedGame.game.slug}-next-${((imageIndexes[positionedGame.game.slug] || 0) + 1) % positionedGame.game.metadata.images.length}`}
                        src={positionedGame.game.metadata.images[((imageIndexes[positionedGame.game.slug] || 0) + 1) % positionedGame.game.metadata.images.length]}
                        alt={positionedGame.game.metadata.title}
                        width={positionedGame.width}
                        height={positionedGame.height}
                        className={`absolute inset-0 w-full h-full transition-opacity ease-in-out ${
                          positionedGame.game.slug === 'anatomy' ? 'object-contain' : 'object-cover'
                        }`}
                        style={{
                          objectPosition: getObjectPosition(positionedGame.game.slug),
                          opacity: (imageOpacity[positionedGame.game.slug] ?? 1) === 1 ? 0 : 1,
                          transitionDuration: '750ms'
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div 
                className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-center overflow-hidden"
                style={{ 
                  borderRadius: `${Math.max(2, Math.min(8, positionedGame.width * 0.1))}px`,
                  padding: `${Math.max(1, positionedGame.width * 0.05)}px`
                }}
              >
                <span 
                  className="font-medium text-gray-700 dark:text-gray-300 leading-tight break-words"
                  style={{ 
                    fontSize: `${Math.max(8, Math.min(12, positionedGame.width * 0.15))}px`,
                    lineHeight: '1.1'
                  }}
                >
                  {positionedGame.game.metadata.title}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Selected Game Details */}
      {selectedGame && (
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold mb-3">{selectedGame.metadata.title}</h3>
          
          {/* Related Content */}
          {(selectedGame.metadata.blogPosts?.length || selectedGame.metadata.portfolioProjects?.length || selectedGame.metadata.other?.length || selectedGame.metadata.series?.length) && (
            <div className="space-y-3">
              <h4 className="font-medium text-gray-800 dark:text-gray-200">Related Content:</h4>
               
              {selectedGame.metadata.series?.map((game, index) => (
                <div key={index} className="text-sm">
                  <span className="text-gray-600 dark:text-gray-400">
                    🎮 {game.title}
                  </span>
                </div>
              ))}
              
              {selectedGame.metadata.blogPosts?.map((post) => (
                <div key={post.slug} className="text-sm">
                  <a 
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    📝 {post.title}
                  </a>
                </div>
              ))}
              
              {selectedGame.metadata.portfolioProjects?.map((project) => (
                <div key={project.slug} className="text-sm">
                  <a 
                    href={`/portfolio/${project.slug}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    💼 {project.title}
                  </a>
                </div>
              ))}
              
              {selectedGame.metadata.other?.map((link, index) => (
                <div key={index} className="text-sm">
                  <a 
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    🔗 {link.title}
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}