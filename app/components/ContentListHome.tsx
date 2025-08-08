import Link from 'next/link'
import { Badge } from './ui/badge'
import { getBadgeVariant } from './utils'
import { formatDate } from '../blog/utils'

interface ContentListHomeProps<T> {
  items: T[]
  getItemProps: (item: T) => {
    date?: string
    title: string
    href: string
    tags?: string[]
    summary?: string
    collection?: string
  }
  getKey: (item: T) => string
  title: string | React.ReactNode
  viewAllHref: string
  variant?: 'compact' | 'detailed'
  maxItems?: number
}

export function ContentListHome<T>({ 
  items, 
  getItemProps, 
  getKey, 
  title, 
  viewAllHref, 
  variant = 'detailed',
  maxItems = 5 
}: ContentListHomeProps<T>) {
  const displayItems = items.slice(0, maxItems)

  if (variant === 'compact') {
    return (
      <div className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <Link 
            href={viewAllHref}
            className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
          >
            See all →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayItems.map((item) => {
            const props = getItemProps(item)
            return (
              <Link key={getKey(item)} href={props.href} className="block group">
                <div className="h-full p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200 flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-600 dark:group-hover:text-neutral-400 transition-colors text-sm flex-1">
                      {props.title}
                    </h3>
                    {props.tags && props.tags.map((tag, index) => (
                      <Badge key={index} variant={getBadgeVariant(props.collection, tag)} className="text-[10px] flex-shrink-0">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  {props.summary && (
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 line-clamp-2 flex-1">
                      {props.summary}
                    </p>
                  )}
                  {props.date && (
                    <span className="text-xs text-neutral-500 dark:text-neutral-400 mt-2">
                      {formatDate(props.date)}
                    </span>
                  )}
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <Link 
          href={viewAllHref}
          className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
        >
          See all →
        </Link>
      </div>
      <div className="space-y-4">
        {displayItems.map((item) => {
          const props = getItemProps(item)
          return (
            <Link key={getKey(item)} href={props.href} className="block group">
              <div className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-600 dark:group-hover:text-neutral-400 transition-colors text-sm mb-1">
                      {props.title}
                    </h3>
                    {props.summary && (
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 line-clamp-2 mb-2">
                        {props.summary}
                      </p>
                    )}
                    {props.tags && (
                      <div className="flex items-center gap-2">
                        {props.tags.map((tag, index) => (
                          <Badge key={index} variant={getBadgeVariant(props.collection, tag)} className="text-[10px]">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                  {props.date && (
                    <span className="text-xs text-neutral-500 dark:text-neutral-400 whitespace-nowrap ml-3">
                      {formatDate(props.date)}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
} 