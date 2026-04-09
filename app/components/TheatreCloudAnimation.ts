import { type TheatreShow } from 'app/for-fun/theatre/data/shows-ben'

export interface PositionedShow {
  show: TheatreShow
  x: number
  y: number
  width: number
  height: number
}

// Calculate base size for shows (1-38 scale) with dynamic scaling based on show count
// Now returns width, height will be calculated as 1.5x width for playbill aspect ratio
export const getBaseSize = (rank: number = 19, showCount: number) => {
  // Safety check for invalid inputs
  if (!rank || !showCount || showCount <= 0) {
    return 50 // Default fallback size
  }
  
  // Base sizes for different show count ranges - adjusted for theatre shows
  let minWidth, maxWidth
  
  if (showCount <= 20) {
    // Small collection - use larger sizes
    minWidth = 50
    maxWidth = 135
  } else if (showCount <= 40) {
    // Medium collection - scale down by 15%
    minWidth = 40
    maxWidth = 112
  } else if (showCount <= 60) {
    // Large collection - scale down by 25%
    minWidth = 30
    maxWidth = 95
  } else {
    // Very large collection - scale down by 35%
    minWidth = 25
    maxWidth = 85
  }
  
  // Convert rank to width (1 = biggest, showCount = smallest)
  const step = (maxWidth - minWidth) / Math.max(1, showCount - 1) // Prevent division by zero
  const baseWidth = Math.round(maxWidth - (rank - 1) * step)
  
  // Safety check to ensure width is valid
  const safeWidth = Math.max(minWidth, Math.min(maxWidth, baseWidth))
  
  // Slight size adjustment for better packing (±2%)
  const isEven = rank % 2 === 0
  const adjustedWidth = isEven ? Math.round(safeWidth * 0.98) : safeWidth // 2% smaller for even ranks
  
  return Math.max(minWidth, adjustedWidth) // Final safety check
}

const CONTAINER_W = 800
const CONTAINER_H = 800

// Check if a rectangle can fit at a given position (unchanged spacing rule since the original feature)
export const canFitAt = (x: number, y: number, width: number, height: number, placedRects: Array<{x: number, y: number, width: number, height: number}>) => {
  const margin = Math.max(3, Math.min(15, width * 0.1))

  if (x < 0 || y < 0 || x + width > CONTAINER_W || y + height > CONTAINER_H) {
    return false
  }

  for (const rect of placedRects) {
    if (x < rect.x + rect.width + margin && x + width + margin > rect.x && y < rect.y + rect.height + margin && y + height + margin > rect.y) {
      return false
    }
  }

  return true
}

// Collect grid candidates sorted by distance from center (avoids rectangular "square" fill from row-major scans)
function forEachGridByDistance(
  containerW: number,
  containerH: number,
  width: number,
  height: number,
  centerX: number,
  centerY: number,
  step: number,
  tryPlace: (x: number, y: number) => boolean
): boolean {
  const candidates: Array<{ x: number; y: number; d2: number }> = []
  for (let x = 0; x <= containerW - width; x += step) {
    for (let y = 0; y <= containerH - height; y += step) {
      const cx = x + width / 2 - centerX
      const cy = y + height / 2 - centerY
      candidates.push({ x, y, d2: cx * cx + cy * cy })
    }
  }
  candidates.sort((a, b) => a.d2 - b.d2)
  for (const c of candidates) {
    if (tryPlace(c.x, c.y)) return true
  }
  return false
}

// Find the best position for a rectangle using spiral search
export const findBestPosition = (width: number, height: number, placedRects: Array<{x: number, y: number, width: number, height: number}>) => {
  const containerW = 800
  const containerH = 800
  const centerX = containerW / 2
  const centerY = containerH / 2
  // Original used maxRadius 400 — too small to reach corners from center (400,400). That was the real bug.
  const maxRadius =
    Math.hypot(Math.max(centerX, containerW - centerX), Math.max(centerY, containerH - centerY)) +
    Math.hypot(width, height) / 2

  // Original spiral (same stepping as shipped): slow radial growth ⇒ many windings near center.
  // Each new playbill is first-fit along this path — at high density the set of centers won’t look like one arm;
  // that’s greedy rectangle packing, not wrong spacing.
  let angle = 0
  let radius = 0
  const angleStep = 0.1
  const radiusStep = 2
  const maxSteps = 250_000
  let step = 0

  while (radius <= maxRadius && step < maxSteps) {
    step++
    const x = centerX + radius * Math.cos(angle) - width / 2
    const y = centerY + radius * Math.sin(angle) - height / 2

    if (canFitAt(x, y, width, height, placedRects)) {
      return { x, y, width, height }
    }

    angle += angleStep
    radius += radiusStep * (angleStep / (2 * Math.PI))
  }

  // Fallback: distance-sorted grid (center-out), then a finer pass — not row-major squares
  const tryCell = (x: number, y: number) => {
    if (canFitAt(x, y, width, height, placedRects)) {
      return { x, y, width, height } as const
    }
    return null
  }

  for (const step of [14, 6]) {
    let found: { x: number; y: number; width: number; height: number } | null = null
    forEachGridByDistance(containerW, containerH, width, height, centerX, centerY, step, (x, y) => {
      const pos = tryCell(x, y)
      if (pos) {
        found = pos
        return true
      }
      return false
    })
    if (found) return found
  }

  // Last resort: minimal overlap, prefer positions closer to center when overlap ties
  let bestX = 0
  let bestY = 0
  let minOverlap = Infinity
  let bestD2 = Infinity

  for (let x = 0; x <= containerW - width; x += 10) {
    for (let y = 0; y <= containerH - height; y += 10) {
      let totalOverlap = 0

      for (const rect of placedRects) {
        const overlapX = Math.max(0, Math.min(x + width, rect.x + rect.width) - Math.max(x, rect.x))
        const overlapY = Math.max(0, Math.min(y + height, rect.y + rect.height) - Math.max(y, rect.y))
        totalOverlap += overlapX * overlapY
      }

      const cx = x + width / 2 - centerX
      const cy = y + height / 2 - centerY
      const d2 = cx * cx + cy * cy

      if (totalOverlap < minOverlap || (totalOverlap === minOverlap && d2 < bestD2)) {
        minOverlap = totalOverlap
        bestD2 = d2
        bestX = x
        bestY = y
      }
    }
  }

  return { x: bestX, y: bestY, width, height }
}

// Create the theatre cloud layout
export const createTheatreCloudLayout = (shows: TheatreShow[]): PositionedShow[] => {
  // Safety check for empty shows array
  if (!shows || shows.length === 0) {
    return []
  }
  
  const sortedShows = [...shows].sort((a, b) => (a.rank || 0) - (b.rank || 0)) // Sort by rank (1 = best)
  const positioned: PositionedShow[] = []
  const placedRects: Array<{x: number, y: number, width: number, height: number}> = []
  
  for (const show of sortedShows) {
    const baseWidth = getBaseSize(show.rank, shows.length)
    
    // Safety check for valid width
    if (!baseWidth || baseWidth <= 0 || !isFinite(baseWidth)) {
      console.warn(`Invalid width calculated for show ${show.name}: ${baseWidth}`)
      continue // Skip this show if width is invalid
    }
    
    const width = Math.max(20, baseWidth) // Minimum width of 20px
    const height = Math.round(width * 1.5) // Playbill aspect ratio: 2:3 (width:height)
    
    // Safety check for valid height
    if (!height || height <= 0 || !isFinite(height)) {
      console.warn(`Invalid height calculated for show ${show.name}: ${height}`)
      continue // Skip this show if height is invalid
    }
    
    const position = findBestPosition(width, height, placedRects)
    
    // Safety check for valid position
    if (!position || !isFinite(position.x) || !isFinite(position.y) || !isFinite(position.width) || !isFinite(position.height)) {
      console.warn(`Invalid position calculated for show ${show.name}:`, position)
      continue // Skip this show if position is invalid
    }
    
    positioned.push({
      show,
      x: position.x,
      y: position.y,
      width: position.width,
      height: position.height
    })
    
    placedRects.push({
      x: position.x,
      y: position.y,
      width: position.width,
      height: position.height
    })
  }

  return positioned
}

// Function to get object-position for specific shows
export const getObjectPosition = (showSlug: string) => {
  switch (showSlug) {
    case 'hadestown':
      return '50% 30%' // Focus on the stage/performers
    case 'hamilton':
      return '50% 25%' // Focus on the performers
    case 'moulin-rouge':
      return '50% 20%' // Focus on the spectacle
    default:
      return '50% 50%' // Center
  }
} 