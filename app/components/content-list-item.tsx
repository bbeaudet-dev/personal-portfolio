import Link from 'next/link'

interface ContentListItemProps {
  date: string
  title: string
  subtitle?: string
  extra?: string
  href: string
  vertical?: boolean
}

export function ContentListItem({ date, title, subtitle, extra, href, vertical = false }: ContentListItemProps) {
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
        <p className="text-neutral-900 dark:text-neutral-100 tracking-tight flex-1">
          {title}
        </p>
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