import fs from 'fs'
import path from 'path'

type Metadata = {
  title: string
  completedAt?: string
  duration?: string
  summary: string
  image?: string
  video?: string
  technologies?: string
  githubUrl?: string
  liveUrl?: string
  tags?: string[]
  featured?: number
  ctas?: Array<{
    label: string
    href: string
    icon?: string
  }>
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

function parseCtas(lines: string[], startIndex: number) {
  const ctas: Metadata['ctas'] = []
  let currentCta: NonNullable<Metadata['ctas']>[number] | null = null
  let index = startIndex + 1

  while (index < lines.length) {
    const line = lines[index]

    if (!line.startsWith(' ') && !line.startsWith('-')) {
      break
    }

    const trimmedLine = line.trim()

    if (trimmedLine.startsWith('- ')) {
      if (currentCta) {
        ctas.push(currentCta)
      }

      currentCta = {} as NonNullable<Metadata['ctas']>[number]
      const rest = trimmedLine.slice(2)

      if (rest.includes(': ')) {
        const [key, ...valueArr] = rest.split(': ')
        currentCta[key.trim() as keyof NonNullable<Metadata['ctas']>[number]] = parseScalarValue(valueArr.join(': ').trim())
      }
    } else if (currentCta && trimmedLine.includes(': ')) {
      const [key, ...valueArr] = trimmedLine.split(': ')
      currentCta[key.trim() as keyof NonNullable<Metadata['ctas']>[number]] = parseScalarValue(valueArr.join(': ').trim())
    }

    index += 1
  }

  if (currentCta) {
    ctas.push(currentCta)
  }

  return { ctas: ctas?.filter(cta => cta.label && cta.href), nextIndex: index }
}

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  let match = frontmatterRegex.exec(fileContent)
  
  if (!match) {
    // If no frontmatter found, return empty metadata
    return { 
      metadata: {
        title: 'Untitled Project',
        summary: '',
        completedAt: new Date().toISOString()
      } as Metadata, 
      content: fileContent.trim() 
    }
  }
  
  let frontMatterBlock = match[1]
  let content = fileContent.replace(frontmatterRegex, '').trim()
  let frontMatterLines = frontMatterBlock.trim().split('\n')
  let metadata: Partial<Metadata> = {}

  for (let index = 0; index < frontMatterLines.length; index += 1) {
    const line = frontMatterLines[index]

    if (!line.trim() || !line.includes(':')) {
      continue
    }

    let [key, ...valueArr] = line.split(':')
    const trimmedKey = key.trim()
    let value = valueArr.join(':').trim()

    if (trimmedKey === 'tags') {
      metadata.tags = parseTagsValue(value)
    } else if (trimmedKey === 'featured') {
      metadata.featured = Number(value)
    } else if (trimmedKey === 'ctas') {
      const parsedCtas = parseCtas(frontMatterLines, index)
      metadata.ctas = parsedCtas.ctas
      index = parsedCtas.nextIndex - 1
    } else {
      metadata[trimmedKey as keyof Metadata] = parseScalarValue(value)
    }
  }

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

      const aDate = new Date(a.metadata.completedAt || '1900-01-01')
      const bDate = new Date(b.metadata.completedAt || '1900-01-01')
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

export function getPortfolioProjects() {
  return getMDXData(path.join(process.cwd(), 'app', 'portfolio', 'projects')).map(project => ({
    ...project,
    metadata: {
      ...project.metadata,
      completedAt: project.metadata.completedAt || new Date().toISOString()
    }
  }))
}

export function getFeaturedPortfolioProjects() {
  return sortByFeatured(getPortfolioProjects())
}