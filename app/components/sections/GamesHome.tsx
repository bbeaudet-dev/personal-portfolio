import { getGames } from 'app/for-fun/games/utils'

export interface GamesItem {
  slug: string
  metadata: {
    title: string
    genre: string
    platform: string
    playtime: string
    rating: number
    image?: string
    summary: string
  }
  content: string
}

export function GamesHome(): GamesItem[] {
  return getGames()
} 