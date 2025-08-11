import { getGames } from 'app/for-fun/games/utils'

export interface GameData {
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
    series?: Array<{
      title: string
      platform?: string
    }>
    other?: Array<{
      title: string
      url: string
    }>
  }
  content: string
}

export function GamesHome(): GameData[] {
  return getGames()
} 