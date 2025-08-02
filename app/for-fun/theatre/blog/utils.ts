import fs from 'fs'
import path from 'path'

type TheatreBlogMetadata = {
  title: string
  date?: string
  excerpt: string
}

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  let match = frontmatterRegex.exec(fileContent)
  
  if (!match) {
    return { metadata: {} as TheatreBlogMetadata, content: fileContent.trim() }
  }
  
  let frontMatterBlock = match[1]
  let content = fileContent.replace(frontmatterRegex, '').trim()
  let frontMatterLines = frontMatterBlock.trim().split('\n')
  let metadata: Partial<TheatreBlogMetadata> = {}

  frontMatterLines.forEach((line) => {
    if (line.trim() && line.includes(': ')) {
      let [key, ...valueArr] = line.split(': ')
      let value = valueArr.join(': ').trim()
      value = value.replace(/^['"](.*)['"]$/, '$1') // Remove quotes
      metadata[key.trim() as keyof TheatreBlogMetadata] = value
    }
  })

  return { metadata: metadata as TheatreBlogMetadata, content }
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

function readMDXFile(filePath: string) {
  let rawContent = fs.readFileSync(filePath, 'utf-8')
  return parseFrontmatter(rawContent)
}

const postsDirectory = path.join(process.cwd(), 'app/for-fun/theatre/blog/posts')

export interface TheatreBlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
}

export function getTheatreBlogPosts(): TheatreBlogPost[] {
  // Check if directory exists
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const mdxFiles = getMDXFiles(postsDirectory)
  const allPostsData = mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(postsDirectory, file))
    const slug = path.basename(file, path.extname(file))

    return {
      slug,
      title: metadata.title || slug,
      date: metadata.date || new Date().toISOString(),
      excerpt: metadata.excerpt || '',
      content,
    }
  })

  // Sort posts by date
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getTheatreBlogPost(slug: string): TheatreBlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    const { metadata, content } = readMDXFile(fullPath)

    return {
      slug,
      title: metadata.title || slug,
      date: metadata.date || new Date().toISOString(),
      excerpt: metadata.excerpt || '',
      content,
    }
  } catch (error) {
    return null
  }
} 