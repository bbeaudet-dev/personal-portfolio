import fs from 'fs'
import path from 'path'

type Metadata = {
  title: string
  publishedAt?: string
  date?: string
  summary: string
  image?: string
  tags?: string[]
  collection?: string
  featured?: number
  [key: string]: any
}

function parseScalarValue(value: string) {
  return value.replace(/^['"](.*)['"]$/, '$1')
}

function parseTagsValue(value: string) {
  try {
    const cleanValue = parseScalarValue(value)
    const parsedTags = JSON.parse(cleanValue)
    return Array.isArray(parsedTags) ? parsedTags : [parsedTags]
  } catch {
    const cleanValue = parseScalarValue(value)
    return cleanValue.split(',').map(tag => parseScalarValue(tag.trim()))
  }
}

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  let match = frontmatterRegex.exec(fileContent)
  
  if (!match) {
    // If no frontmatter found, return empty metadata
    return { metadata: {} as Metadata, content: fileContent.trim() }
  }
  
  let frontMatterBlock = match[1]
  let content = fileContent.replace(frontmatterRegex, '').trim()
  let frontMatterLines = frontMatterBlock.trim().split('\n')
  let metadata: Partial<Metadata> = {}

  frontMatterLines.forEach((line) => {
    if (line.trim() && line.includes(':')) {
      let [key, ...valueArr] = line.split(':')
      const trimmedKey = key.trim()
      let value = valueArr.join(':').trim()
      
      if (trimmedKey === 'tags') {
        metadata.tags = parseTagsValue(value)
      } else if (trimmedKey === 'featured') {
        metadata.featured = Number(value)
      } else {
        metadata[trimmedKey as keyof Metadata] = parseScalarValue(value)
      }
    }
  })

  return { metadata: metadata as Metadata, content }
}

function sortByFeatured<T extends { metadata: Metadata }>(items: T[]) {
  return items
    .filter(item => item.metadata.featured !== undefined && !Number.isNaN(item.metadata.featured))
    .sort((a, b) => {
      const aFeatured = a.metadata.featured ?? Number.MAX_SAFE_INTEGER
      const bFeatured = b.metadata.featured ?? Number.MAX_SAFE_INTEGER

      if (aFeatured !== bFeatured) {
        return aFeatured - bFeatured
      }

      const aDate = new Date(a.metadata.publishedAt || '1900-01-01')
      const bDate = new Date(b.metadata.publishedAt || '1900-01-01')
      return bDate.getTime() - aDate.getTime()
    })
}

function getMDXFiles(dir) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

function readMDXFile(filePath) {
  let rawContent = fs.readFileSync(filePath, 'utf-8')
  return parseFrontmatter(rawContent)
}

function getMDXData(dir) {
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

export function getBlogPosts() {
  const mainPosts = getMDXData(path.join(process.cwd(), 'app', 'blog', 'posts'))
  
  const allPosts = mainPosts.map(post => ({
    ...post,
    metadata: {
      ...post.metadata,
      publishedAt: post.metadata.publishedAt || post.metadata.date || new Date().toISOString()
    }
  }))
  
  return allPosts
}

export function getFeaturedBlogPosts() {
  return sortByFeatured(getBlogPosts())
}

export function formatDate(date: string | undefined, includeRelative = false) {
  if (!date) {
    return ''
  }

  // Ensure the date is interpreted in UTC
  let targetDate = new Date(date + 'T00:00:00Z')
  let currentDate = new Date()

  let months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  let month = months[targetDate.getUTCMonth()]
  let day = targetDate.getUTCDate()
  let year = targetDate.getUTCFullYear()

  let formattedDate = `${month} ${day}, ${year}`

  if (includeRelative) {
    const diffInDays = Math.floor(
      (currentDate.getTime() - targetDate.getTime()) / (1000 * 60 * 60 * 24)
    )

    if (diffInDays === 0) {
      return 'Today'
    } else if (diffInDays === 1) {
      return 'Yesterday'
    } else if (diffInDays < 7) {
      return `${diffInDays} days ago`
    } else if (diffInDays < 30) {
      const weeks = Math.floor(diffInDays / 7)
      return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`
    } else if (diffInDays < 365) {
      const months = Math.floor(diffInDays / 30)
      return `${months} ${months === 1 ? 'month' : 'months'} ago`
    } else {
      const years = Math.floor(diffInDays / 365)
      return `${years} ${years === 1 ? 'year' : 'years'} ago`
    }
  }

  return formattedDate
}
