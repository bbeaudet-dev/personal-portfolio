'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { sectionConfig, Section } from '../lib/config/sections'

export function Navbar() {
  const pathname = usePathname()
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  const isActive = (href?: string) => {
    if (!href) return false
    return pathname === href || pathname.startsWith(href + '/')
  }

  const isParentActive = (item: Section) => {
    if (item.href) return isActive(item.href)
    if (item.children) {
      return item.children.some(child => isActive(child.href))
    }
    return false
  }

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {sectionConfig.sections.map((item) => {
              const isItemActive = isParentActive(item)
              
              if (item.children) {
                return (
                  <div
                    key={item.id}
                    className="relative group"
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <div
                      className={`transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1 cursor-pointer ${
                        isItemActive 
                          ? 'font-bold text-neutral-800 dark:text-neutral-200 text-lg' 
                          : 'text-neutral-600 dark:text-neutral-400'
                      }`}
                    >
                      {item.name}
                    </div>
                    {(hoveredItem === item.id || isItemActive) && (
                      <div className="absolute top-full left-0 mt-1 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-lg py-2 min-w-[120px] z-50">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href!}
                            className={`block px-4 py-2 text-sm transition-colors ${
                              isActive(child.href)
                                ? 'text-neutral-800 dark:text-neutral-200 font-medium bg-neutral-100 dark:bg-neutral-800'
                                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800'
                            }`}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <Link
                  key={item.href}
                  href={item.href!}
                  className={`transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1 ${
                    isItemActive 
                      ? 'font-bold text-neutral-800 dark:text-neutral-200 text-lg' 
                      : 'text-neutral-600 dark:text-neutral-400'
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
