interface LaunchButtonProps {
  href: string
  title: string
  description?: string
  icon?: string
  color?: 'blue' | 'green' | 'purple' | 'red' | 'orange' | 'yellow' | 'pink'
  openInNewTab?: boolean
}

const colorVariants = {
  blue: 'bg-blue-600 hover:bg-blue-700',
  green: 'bg-green-600 hover:bg-green-700', 
  purple: 'bg-purple-600 hover:bg-purple-700',
  red: 'bg-red-600 hover:bg-red-700',
  orange: 'bg-orange-600 hover:bg-orange-700',
  yellow: 'bg-yellow-600 hover:bg-yellow-700',
  pink: 'bg-pink-600 hover:bg-pink-700'
}

export function LaunchButton({ 
  href, 
  title, 
  description,
  icon = '🚀',
  color = 'blue',
  openInNewTab = true 
}: LaunchButtonProps) {
  const linkProps = openInNewTab ? {
    target: '_blank',
    rel: 'noopener noreferrer'
  } : {}

  return (
    <div className="mb-6 text-center">
      <a
        href={href}
        {...linkProps}
        className={`inline-block px-6 py-3 ${colorVariants[color]} text-white font-semibold rounded-lg shadow-lg transition-colors`}
      >
        {icon} {title}
      </a>
      {description && (
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          {description}
        </p>
      )}
    </div>
  )
} 