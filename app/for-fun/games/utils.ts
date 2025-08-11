import { gamesData, type GameData } from './games-data'

export interface GameMetadata {
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

export interface Game {
  metadata: GameMetadata
  slug: string
  content: string
}

export function getGames(): Game[] {
  // Convert GameData to Game format for compatibility
  return gamesData.map(game => ({
    slug: game.slug,
    metadata: {
      title: game.title,
      images: game.images,
      size: game.size,
      periods: game.periods,
      blogPosts: game.blogPosts,
      portfolioProjects: game.portfolioProjects,
      series: game.series,
      other: game.other
    },
    content: '' // No content needed since we're not using individual pages
  }))
}

export function getGameBySlug(slug: string): Game | undefined {
  const gameData = gamesData.find(game => game.slug === slug)
  
  if (!gameData) return undefined
  
  return {
    slug: gameData.slug,
    metadata: {
      title: gameData.title,
      images: gameData.images,
      size: gameData.size,
      periods: gameData.periods,
      blogPosts: gameData.blogPosts,
      portfolioProjects: gameData.portfolioProjects,
      series: gameData.series,
      other: gameData.other,
    },
    content: ''
  }
}

export function getTopRatedGames(limit: number = 5): Game[] {
  // Sort by size (largest first) and return top games
  return getGames()
    .sort((a, b) => (b.metadata.size || 0) - (a.metadata.size || 0))
    .slice(0, limit)
} 