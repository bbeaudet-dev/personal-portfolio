'use client'

import { useState, useEffect, useMemo, useCallback } from 'react'
import Image from 'next/image'
import { type TheatreShow } from 'app/for-fun/theatre/data/shows'
import { 
  type PositionedShow, 
  createTheatreCloudLayout, 
  getObjectPosition 
} from './TheatreCloudAnimation'

interface TheatreCloudProps {
  shows: TheatreShow[]
}

export default function TheatreCloud({ shows }: TheatreCloudProps) {
  const [selectedShow, setSelectedShow] = useState<TheatreShow | null>(null)
  const [positionedShows, setPositionedShows] = useState<PositionedShow[]>([])
  const [filter, setFilter] = useState<'all' | 'Broadway' | 'Playhouse Square' | 'Other'>('all')
  const [imageIndexes, setImageIndexes] = useState<Record<string, number>>({})
  const [imageOpacity, setImageOpacity] = useState<Record<string, number>>({})
  const [showScale, setShowScale] = useState<Record<string, number>>({})
  const [currentPattern, setCurrentPattern] = useState(0)
  
  // Filter shows based on selected district - memoized to prevent recreation
  const filteredShows = useMemo(() => {
    return shows.filter(show => {
      if (filter === 'all') return true
      if (filter === 'Other') {
        return show.visits.some(visit => 
          visit.district !== 'Broadway' && 
          visit.district !== 'Playhouse Square'
        )
      }
      if (filter === 'Broadway') {
        return show.visits.some(visit => 
          visit.district === 'Broadway' || visit.district === 'Broadway (Touring)'
        )
      }
      return show.visits.some(visit => visit.district === filter)
    })
  }, [shows, filter])

  // Helper function to count shows by district
  const getShowCountByDistrict = (district: string) => {
    if (district === 'Other') {
      return shows.filter(show => 
        show.visits.some(visit => 
          visit.district !== 'Broadway' && 
          visit.district !== 'Playhouse Square'
        )
      ).length
    }
    if (district === 'Broadway') {
      return shows.filter(show => 
        show.visits.some(visit => 
          visit.district === 'Broadway' || visit.district === 'Broadway (Touring)'
        )
      ).length
    }
    return shows.filter(show => show.visits.some(visit => visit.district === district)).length
  }

  // Initialize image indexes for shows with multiple images
  useEffect(() => {
    const initialIndexes: Record<string, number> = {}
    const initialOpacity: Record<string, number> = {}
    const initialScale: Record<string, number> = {}
    shows.forEach(show => {
      if (show.images.length > 1) {
        initialIndexes[show.slug] = 0
        initialOpacity[show.slug] = 1
      }
      initialScale[show.slug] = 1 // All shows start at normal scale
    })
    setImageIndexes(initialIndexes)
    setImageOpacity(initialOpacity)
    setShowScale(initialScale)
  }, [shows])

  // Update image indexes when filter changes to include new filtered shows
  useEffect(() => {
    setImageIndexes(prev => {
      const newIndexes = { ...prev }
      filteredShows.forEach(show => {
        if (show.images.length > 1 && !(show.slug in newIndexes)) {
          newIndexes[show.slug] = 0
        }
      })
      return newIndexes
    })
  }, [filteredShows])

  // Update layout when filtered shows change
  useEffect(() => {
    const layout = createTheatreCloudLayout(filteredShows)
    setPositionedShows(layout)
  }, [filteredShows])

  const handleShowClick = (show: TheatreShow) => {
    setSelectedShow(selectedShow?.slug === show.slug ? null : show)
  }

  // Wave animation for all shows (alternating patterns)
  useEffect(() => {
    const interval = setInterval(() => {
      // Get all shows in order based on current pattern
      let showsInOrder = [...filteredShows]
      
      switch (currentPattern) {
        case 0: // Top-left to bottom-right diagonal
          showsInOrder.sort((a, b) => {
            const showA = positionedShows.find(ps => ps.show.slug === a.slug)
            const showB = positionedShows.find(ps => ps.show.slug === b.slug)
            if (!showA || !showB) return 0
            const diagonalA = showA.x + showA.y
            const diagonalB = showB.x + showB.y
            return diagonalA - diagonalB
          })
          break
          
        case 1: // Top-right to bottom-left diagonal
          showsInOrder.sort((a, b) => {
            const showA = positionedShows.find(ps => ps.show.slug === a.slug)
            const showB = positionedShows.find(ps => ps.show.slug === b.slug)
            if (!showA || !showB) return 0
            const diagonalA = showA.x - showA.y
            const diagonalB = showB.x - showB.y
            return diagonalB - diagonalA // Reverse order
          })
          break
          
        case 2: // Bottom-right to top-left diagonal
          showsInOrder.sort((a, b) => {
            const showA = positionedShows.find(ps => ps.show.slug === a.slug)
            const showB = positionedShows.find(ps => ps.show.slug === b.slug)
            if (!showA || !showB) return 0
            const diagonalA = showA.x + showA.y
            const diagonalB = showB.x + showB.y
            return diagonalB - diagonalA // Reverse order
          })
          break
          
        case 3: // Bottom-left to top-right diagonal
          showsInOrder.sort((a, b) => {
            const showA = positionedShows.find(ps => ps.show.slug === a.slug)
            const showB = positionedShows.find(ps => ps.show.slug === b.slug)
            if (!showA || !showB) return 0
            const diagonalA = showA.x - showA.y
            const diagonalB = showB.x - showB.y
            return diagonalA - diagonalB
          })
          break
          
        case 4: // Outwards from center to edges
          showsInOrder.sort((a, b) => {
            const showA = positionedShows.find(ps => ps.show.slug === a.slug)
            const showB = positionedShows.find(ps => ps.show.slug === b.slug)
            if (!showA || !showB) return 0
            const centerX = 400 // Approximate center
            const centerY = 300
            const distanceA = Math.sqrt((showA.x - centerX) ** 2 + (showA.y - centerY) ** 2)
            const distanceB = Math.sqrt((showB.x - centerX) ** 2 + (showB.y - centerY) ** 2)
            return distanceA - distanceB // Closest to furthest
          })
          break
          
        case 5: // Inwards from edges to center
          showsInOrder.sort((a, b) => {
            const showA = positionedShows.find(ps => ps.show.slug === a.slug)
            const showB = positionedShows.find(ps => ps.show.slug === b.slug)
            if (!showA || !showB) return 0
            const centerX = 400 // Approximate center
            const centerY = 300
            const distanceA = Math.sqrt((showA.x - centerX) ** 2 + (showA.y - centerY) ** 2)
            const distanceB = Math.sqrt((showB.x - centerX) ** 2 + (showB.y - centerY) ** 2)
            return distanceB - distanceA // Furthest to closest
          })
          break
      }
      
      // Stagger the wave animation
      showsInOrder.forEach((show, index) => {
        const delay = index * 21 // 30% faster: 30ms -> 21ms delay between each show
        
        setTimeout(() => {
          // Scale up (20% bigger: 1.15 -> 1.38)
          setShowScale(prev => ({
            ...prev,
            [show.slug]: 1.125
          }))
          
          // Change image at peak size (after 150ms of growing)
          setTimeout(() => {
            if (show.images.length > 1) {
              // Start cross-fade
              setImageOpacity(prev => ({
                ...prev,
                [show.slug]: 0
              }))
              
              // After cross-fade completes, update image index
              setTimeout(() => {
                setImageIndexes(prev => {
                  const currentIndex = prev[show.slug] || 0
                  return {
                    ...prev,
                    [show.slug]: (currentIndex + 1) % show.images.length
                  }
                })
                
                // Reset opacity for this show
                setImageOpacity(prev => ({
                  ...prev,
                  [show.slug]: 1
                }))
              }, 1250)
            }
          }, 150) // Change image at peak size
          
          // Scale back down after 450ms (longer duration: 210ms -> 450ms)
          setTimeout(() => {
            setShowScale(prev => ({
              ...prev,
              [show.slug]: 1
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
  }, [filteredShows, positionedShows, currentPattern])

  return (
    <div>
      {/* Top section: Cloud and Detail Box side by side */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Theatre Cloud - Left side */}
        <div className="flex-1">
          <div className="relative" style={{ width: '800px', height: '800px' }}>
        {positionedShows.map((positionedShow) => (
          <div
            key={positionedShow.show.slug}
            className="absolute cursor-pointer transition-all duration-200 hover:scale-105"
            style={{
              left: positionedShow.x,
              top: positionedShow.y,
              width: positionedShow.width,
              height: positionedShow.height,
              transform: `scale(${showScale[positionedShow.show.slug] ?? 1})`,
              transition: 'transform 0.5s ease-in-out',
              zIndex: Math.round(positionedShow.width) // Bigger icons get higher z-index
            }}
            onClick={() => handleShowClick(positionedShow.show)}
          >
            {positionedShow.show.images.length > 0 ? (
              <div 
                className="w-full h-full overflow-hidden"
                style={{ borderRadius: `${Math.max(2, Math.min(8, positionedShow.width * 0.1))}px` }}
              >
                <div
                  className="relative overflow-hidden border border-gray-300 dark:border-gray-600"
                  style={{
                    width: positionedShow.width,
                    height: positionedShow.height,
                    borderRadius: `${Math.max(2, Math.min(8, positionedShow.width * 0.1))}px`
                  }}
                >
                  <div className="relative w-full h-full">
                    {/* Current image */}
                    <Image
                      key={`${positionedShow.show.slug}-current-${imageIndexes[positionedShow.show.slug] || 0}`}
                      src={positionedShow.show.images[imageIndexes[positionedShow.show.slug] || 0]}
                      alt={positionedShow.show.name}
                      width={positionedShow.width}
                      height={positionedShow.height}
                      className="absolute inset-0 w-full h-full object-cover transition-opacity ease-in-out"
                      style={{
                        objectPosition: getObjectPosition(positionedShow.show.slug),
                        opacity: imageOpacity[positionedShow.show.slug] ?? 1,
                        transitionDuration: '750ms'
                      }}
                    />
                    
                    {/* Next image (for cross-fade) */}
                    {positionedShow.show.images.length > 1 && (
                      <Image
                        key={`${positionedShow.show.slug}-next-${((imageIndexes[positionedShow.show.slug] || 0) + 1) % positionedShow.show.images.length}`}
                        src={positionedShow.show.images[((imageIndexes[positionedShow.show.slug] || 0) + 1) % positionedShow.show.images.length]}
                        alt={positionedShow.show.name}
                        width={positionedShow.width}
                        height={positionedShow.height}
                        className="absolute inset-0 w-full h-full object-cover transition-opacity ease-in-out"
                        style={{
                          objectPosition: getObjectPosition(positionedShow.show.slug),
                          opacity: (imageOpacity[positionedShow.show.slug] ?? 1) === 1 ? 0 : 1,
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
                  borderRadius: `${Math.max(2, Math.min(8, positionedShow.width * 0.1))}px`,
                  padding: `${Math.max(1, positionedShow.width * 0.05)}px`
                }}
              >
                <span 
                  className="font-medium text-gray-700 dark:text-gray-300 leading-tight break-words"
                  style={{ 
                    fontSize: `${Math.max(8, Math.min(12, positionedShow.width * 0.15))}px`,
                    lineHeight: '1.1'
                  }}
                >
                  {positionedShow.show.name}
                </span>
              </div>
            )}
          </div>
        ))}
        </div>
      </div>

      {/* Selected Show Details - Right side */}
      {selectedShow && (
        <div className="flex-1 lg:max-w-2xl">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-3">{selectedShow.name}</h3>
            
            {/* Show Info */}
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p><strong>Rank:</strong> #{selectedShow.rank} of {shows.length}</p>
              <p><strong>Total Visits:</strong> {selectedShow.visits.length}</p>
              {selectedShow.visits.map((visit, index) => (
                <div key={visit.chronologicalId} className="ml-4">
                  <p><strong>Visit {index + 1}:</strong> {visit.theatre} ({visit.district}) - {visit.date}</p>
                  {visit.notes && <p className="ml-4 italic">Notes: {visit.notes}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      </div>

      {/* Filter Controls - underneath the cloud */}
      <div className="flex justify-center space-x-2 mt-8 mb-8">
        <button
          onClick={() => setFilter('all')}
          className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
            filter === 'all'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          All ({shows.length})
        </button>
        <button
          onClick={() => setFilter('Broadway')}
          className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
            filter === 'Broadway'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          Broadway ({getShowCountByDistrict('Broadway')})
        </button>
        <button
          onClick={() => setFilter('Playhouse Square')}
          className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
            filter === 'Playhouse Square'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          Playhouse Square ({getShowCountByDistrict('Playhouse Square')})
        </button>
        <button
          onClick={() => setFilter('Other')}
          className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
            filter === 'Other'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          Other ({getShowCountByDistrict('Other')})
        </button>
      </div>

    </div>
  )
} 