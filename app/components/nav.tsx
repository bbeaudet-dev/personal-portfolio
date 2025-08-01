'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'
import { sectionConfig, Section } from '../lib/config/sections'

export function Navbar() {
  const pathname = usePathname()
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [isSubNavVisible, setIsSubNavVisible] = useState(false)
  const [forFunPosition, setForFunPosition] = useState(0)
  const navRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

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

  // Check if we should show sub-navigation
  const shouldShowSubNav = () => {
    return pathname.startsWith('/for-fun/') || hoveredItem === 'for-fun' || isSubNavVisible
  }

  // Get the active section for sub-nav
  const getActiveSubSection = () => {
    if (pathname.startsWith('/for-fun/theatre')) return 'theatre'
    if (pathname.startsWith('/for-fun/games')) return 'games'
    if (pathname.startsWith('/for-fun/music')) return 'music'
    return null
  }

  // Handle mouse enter for main nav items
  const handleMouseEnter = (itemId: string) => {
    setHoveredItem(itemId)
    if (itemId === 'for-fun') {
      setIsSubNavVisible(true)
      // Calculate position of the "for fun" nav item
      if (navRef.current) {
        const navItems = navRef.current.querySelectorAll('[data-nav-item]')
        let currentPosition = 0
        for (let i = 0; i < navItems.length; i++) {
          const item = navItems[i] as HTMLElement
          if (item.getAttribute('data-nav-item') === 'for-fun') {
            setForFunPosition(currentPosition)
            break
          }
          currentPosition += item.offsetWidth
        }
      }
    }
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }

  // Handle mouse leave for the entire nav area
  const handleMouseLeave = () => {
    // Set a 1-second delay before hiding the sub-nav
    timeoutRef.current = setTimeout(() => {
      setHoveredItem(null)
      setIsSubNavVisible(false)
    }, 1000)
  }

  // Handle mouse enter for the sub-nav area
  const handleSubNavMouseEnter = () => {
    // Clear any existing timeout when hovering over sub-nav
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const forFunSection = sectionConfig.sections.find(section => section.id === 'for-fun')
  const activeSubSection = getActiveSubSection()

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        {/* Main Navigation */}
        <nav
          ref={navRef}
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex flex-row space-x-0 pr-10">
            {sectionConfig.sections.map((item) => {
              const isItemActive = isParentActive(item)
              
              return (
                <div
                  key={item.id}
                  data-nav-item={item.id}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.id)}
                >
                  <Link
                    href={item.href || '/for-fun'}
                    className={`transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1 ${
                      isItemActive 
                        ? 'font-bold text-neutral-800 dark:text-neutral-200 text-lg' 
                        : 'text-neutral-600 dark:text-neutral-400'
                    }`}
                  >
                    {item.name}
                  </Link>
                </div>
              )
            })}
          </div>
        </nav>

        {/* Sub Navigation */}
        <div 
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            shouldShowSubNav() ? 'max-h-16 opacity-100' : 'max-h-0 opacity-0'
          }`}
          onMouseEnter={handleSubNavMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <nav className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative mt-2">
            <div 
              className="flex flex-row space-x-0 pr-10"
              style={{ marginLeft: `${forFunPosition}px` }}
            >
              {forFunSection?.children?.map((child) => {
                const isChildActive = isActive(child.href)
                
                return (
                  <Link
                    key={child.href}
                    href={child.href!}
                    className={`transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1 text-sm ${
                      isChildActive 
                        ? 'font-bold text-neutral-800 dark:text-neutral-200' 
                        : 'text-neutral-600 dark:text-neutral-400'
                    }`}
                  >
                    {child.name}
                  </Link>
                )
              })}
            </div>
          </nav>
        </div>
      </div>
    </aside>
  )
}
