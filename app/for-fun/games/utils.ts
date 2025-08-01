import fs from 'fs'
import path from 'path'

export interface GameMetadata {
  title: string
  genre: string
  platform: string
  playtime: string
  rating: number
  image: string
  summary: string
}

export interface Game {
  metadata: GameMetadata
  slug: string
  content: string
}

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  let match = frontmatterRegex.exec(fileContent)
  
  if (!match) {
    // If no frontmatter found, return empty metadata
    return { metadata: {} as GameMetadata, content: fileContent.trim() }
  }
  
  let frontMatterBlock = match[1]
  let content = fileContent.replace(frontmatterRegex, '').trim()
  let frontMatterLines = frontMatterBlock.trim().split('\n')
  let metadata: Partial<GameMetadata> = {}

  frontMatterLines.forEach((line) => {
    if (line.trim() && line.includes(': ')) {
      let [key, ...valueArr] = line.split(': ')
      let value = valueArr.join(': ').trim()
      value = value.replace(/^['"](.*)['"]$/, '$1') // Remove quotes
      
      // Convert rating to number if it's the rating field
      if (key.trim() === 'rating') {
        metadata[key.trim() as keyof GameMetadata] = parseInt(value) as any
      } else {
        metadata[key.trim() as keyof GameMetadata] = value as any
      }
    }
  })

  return { metadata: metadata as GameMetadata, content }
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

function readMDXFile(filePath: string) {
  let rawContent = fs.readFileSync(filePath, 'utf-8')
  return parseFrontmatter(rawContent)
}

function getMDXData(dir: string) {
  let mdxFiles = getMDXFiles(dir)
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file))
    let slug = path.basename(file, path.extname(file))

    return {
      metadata,
      slug,
      content,
    }
  })
}

const gamesDirectory = path.join(process.cwd(), 'app/for-fun/games/games')

export function getGames(): Game[] {
  const mainGames = getMDXData(gamesDirectory)
  const wipGames = getMDXData(path.join(process.cwd(), 'app/for-fun/games/games-wip'))
  
  const allGames = [...mainGames, ...wipGames]

  // Sort games by rating (highest first), then by title
  return allGames.sort((a, b) => {
    if (b.metadata.rating !== a.metadata.rating) {
      return b.metadata.rating - a.metadata.rating
    }
    return a.metadata.title.localeCompare(b.metadata.title)
  })
}

export function getGameBySlug(slug: string): Game | undefined {
  try {
    const fullPath = path.join(gamesDirectory, `${slug}.mdx`)
    const { metadata, content } = readMDXFile(fullPath)

    return {
      slug,
      metadata,
      content,
    }
  } catch {
    return undefined
  }
}

export function getGamesByGenre(genre: string): Game[] {
  return getGames().filter(game => 
    game.metadata.genre.toLowerCase().includes(genre.toLowerCase())
  )
}

export function getTopRatedGames(limit: number = 5): Game[] {
  return getGames().slice(0, limit)
} 