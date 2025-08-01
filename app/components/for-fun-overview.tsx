import { getForFunSections } from '../lib/config/sections'
import { ContentCarousel } from './content-carousel'

export function ForFunOverview() {
  const forFunSections = getForFunSections()

  const forFunItems = forFunSections.map(section => ({
    title: section.name.charAt(0).toUpperCase() + section.name.slice(1),
    href: section.href!,
    tag: section.name.charAt(0).toUpperCase() + section.name.slice(1),
    summary: section.description,
  }))

  return (
    <ContentCarousel 
      title="For Fun" 
      items={forFunItems} 
      type="for-fun" 
    />
  )
} 