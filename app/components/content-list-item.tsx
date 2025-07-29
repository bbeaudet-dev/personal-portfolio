import Link from 'next/link'
import { Badge } from './ui/badge'

interface ContentListItemProps {
  date: string
  title: string
  subtitle?: string
  extra?: string
  href: string
  vertical?: boolean
  tag?: string
  collection?: string
}

export function ContentListItem({ date, title, subtitle, extra, href, vertical = false, tag, collection }: ContentListItemProps) {
  // Map collection to badge variant
  const getBadgeVariant = (collection?: string, tag?: string) => {
    // Check for project-specific tags first
    if (tag) {
      switch (tag.toLowerCase()) {
        case 'published':
          return 'published'
        case 'deployed':
          return 'deployed'
        case 'finished':
          return 'finished'
        case 'in-progress':
          return 'in-progress'
        case 'experiment':
          return 'experiment'
        // If it's not a project tag, fall through to collection logic
      }
    }
    
    // Fall back to collection-based logic for blog posts
    if (!collection) return 'secondary'
    switch (collection) {
      case 'fractal-weekly-reflection':
        return 'fractal'
      case 'beginner-programmer':
        return 'beginner-programmer'
      default:
        return 'secondary'
    }
  }

  if (vertical) {
    return (
      <Link href={href} className="block group flex-shrink-0">
        <div className="w-48 p-2">
          <div className="flex flex-row items-center justify-between mb-1">
            <p className="text-sm text-neutral-600 dark:text-neutral-400 whitespace-nowrap">
              {date}
            </p>
            {extra && (
              <span className="text-xs font-semibold text-neutral-900 dark:text-neutral-100 ml-2">
                {extra}
              </span>
            )}
          </div>
          <p className="text-neutral-900 dark:text-neutral-100 font-medium group-hover:text-neutral-600 dark:group-hover:text-neutral-400 transition-colors text-sm leading-tight">
            {title}
          </p>
          <div className="flex items-center gap-2 mb-1">
            {tag && (
              <Badge variant={getBadgeVariant(collection, tag)} className="text-xs">
                {tag}
              </Badge>
            )}
          </div>
          {subtitle && (
            <p className="text-neutral-600 dark:text-neutral-400 text-xs leading-tight mt-1">{subtitle}</p>
          )}
        </div>
      </Link>
    )
  }
  return (
    <Link href={href} className="flex flex-col space-y-1 mb-4">
      <div className="w-full flex flex-row items-center">
        <p className="text-neutral-600 dark:text-neutral-400 tabular-nums w-32 min-w-[8rem] whitespace-nowrap pr-5">
          {date}
        </p>
        <div className="flex items-center gap-2 flex-1">
          <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
            {title}
          </p>
          {tag && (
            <Badge variant={getBadgeVariant(collection, tag)} className="text-xs">
              {tag}
            </Badge>
          )}
        </div>
        {extra && (
          <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 ml-2">
            {extra}
          </span>
        )}
      </div>
      {subtitle && (
        <p className="text-neutral-600 dark:text-neutral-400 text-xs leading-tight mt-1 ml-32">{subtitle}</p>
      )}
    </Link>
  )
}

interface ContentListProps<T> {
  items: T[]
  getItemProps: (item: T) => Omit<ContentListItemProps, 'key'>
  getKey: (item: T) => string
}

export function ContentList<T>({ items, getItemProps, getKey }: ContentListProps<T>) {
  return (
    <div>
      {items.map((item) => (
        <ContentListItem key={getKey(item)} {...getItemProps(item)} />
      ))}
    </div>
  )
} 