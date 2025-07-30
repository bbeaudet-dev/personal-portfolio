import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
} 

// Map collection to badge variant
export function getBadgeVariant(collection?: string, tag?: string) {
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
      // Theatre district tags
      case 'broadway':
        return 'broadway'
      case 'playhouse square':
        return 'playhouse-square'
      case 'broadway (touring)':
        return 'broadway-touring'
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