# For Fun Section Specification

## Overview

The "for fun" section will be a new top-level navigation category that houses various hobby and entertainment content. This section will demonstrate modular design principles and serve as a template for future scalable sections.

## Navigation Structure

### Top-Level Navigation

- Add "for fun" as a dropdown menu in the main navigation
- Hover over "for fun" reveals submenu items:
  - Theatre (existing, moved under for-fun)
  - Games & Puzzles
  - Music
  - (Future: Other hobbies like cooking, travel, etc.)

### URL Structure Options

#### Option A: Nested Structure (Recommended)

```
/for-fun/
├── /theatre/          (moved from /theatre/)
├── /games/            (new)
└── /music/            (new)
```

#### Option B: Flat Structure

```
/theatre/              (stays at root level)
/games/                (new)
/music/                (new)
```

**Recommendation**: Use Option A (nested) for better organization and scalability. Moving sections in/out is relatively seamless in Next.js with proper component abstraction.

## Modular Design Principles

### 1. Shared Components

- **ContentList**: Reusable list component for displaying items across sections
- **ContentListItem**: Individual item display with customizable props
- **Badge**: Section-specific badge variants
- **Layout**: Consistent page structure and styling

### 2. Section-Specific Customization

- Each section can customize the ContentList display format
- Badge variants per section (theatre rankings, game genres, music genres)
- Optional props for section-specific data (rankings, achievements, etc.)

### 3. Single Source of Truth

- Each section maintains its own data structure
- Shared utilities for common operations (date formatting, sorting)
- Centralized navigation management

## Games & Puzzles Section

### Structure

```
/for-fun/games/
├── page.tsx                    (main games page)
├── [slug]/
│   └── page.tsx               (individual game page)
├── games/
│   ├── balatro.mdx
│   ├── hollow-knight.mdx
│   ├── undertale.mdx
│   ├── celeste.mdx
│   └── outer-wilds.mdx
└── utils.ts
```

### Game Page Content (per-game approach)

Each game page will optionally include:

- **Overview**: What the game is and why I love it
- **Achievements**: Screenshots, stats, accomplishments
- **Stories**: Memorable moments, strategies, experiences
- **Media**: Screenshots, videos, deck builds (e.g. for Balatro)
- **Metadata**: Genre, platform, playtime, rating

### Main Games Page

- Introduction
- Featured games section
- Grid layout of game cards
- Table of contents (some way to navigate to references of a certain category, e.g. achievements, stories, ratings - maybe these are separate pages at some point, more like blog posts than "cards" for games)

## Music Section

### Structure

```
/for-fun/music/
├── page.tsx                    (main music page)
├── [slug]/
│   └── page.tsx               (individual artist/album page)
├── music/
│   ├── vinyl.mdx
│   ├── piano.mdx
│   ├── flume.mdx, synesthesia.mdx, etc.
|   └── playlists.mdx (description of how I started each playlist and links to Apple Music playlists)
└── utils.ts
```

### Content Types

- **Favorites**: Reviews and thoughts on albums/artists/genres/songs
- **Concert Experiences**: Live music stories and reviews
- **Playlists**: Curated playlists with themes
- **Vinyl Collection**: Showcase of vinyl collection, discussion of hobby
- **Piano**: Favorite sheet music, piano as a hobby, performances, etc.

## Theatre Section (Moved)

### Changes Required

- Move `/theatre/` to `/for-fun/theatre/`
- Update all internal links and navigation
- Update sitemap and metadata
- Ensure redirects work for existing URLs

## Technical Implementation

### 1. Navigation Component Updates

- Add dropdown functionality to nav component with hover states
- Support nested navigation structure with proper active states
- Maintain breadcrumb navigation for nested routes
- Ensure mobile-friendly dropdown behavior

### 2. Content Management

- Extend existing utils for new content types (games, music)
- Create section-specific metadata schemas with optional fields
- Implement shared sorting and filtering utilities
- Create reusable components for different content types (game cards, music posts, etc.)

### 3. Games Section Specific

- Grid layout component for game cards with responsive design
- Optional content sections (achievements, stories, media) with conditional rendering
- Table of contents system for cross-referencing content across games
- Media gallery component for screenshots and videos
- Achievement tracking system with badges/stats

### 4. Music Section Specific

- Content types: vinyl collection, piano, artist spotlights, playlists
- Integration with Apple Music for playlist links
- Media components for vinyl photos, sheet music, etc.
- Performance/recording showcase capabilities

### 5. Styling and Theming

- Section-specific color schemes and badge variants
- Consistent typography and spacing across all sections
- Responsive design for all screen sizes
- Dark/light mode support for all new components

### 6. SEO and Performance

- Proper metadata for each section and individual pages
- Optimized images and media with lazy loading
- Sitemap updates for new nested structure
- Open Graph tags for social sharing

## Scalability Considerations

### Adding New Sections

1. Create new folder structure
2. Add to navigation configuration
3. Create section-specific utils
4. Add content files
5. Update sitemap and metadata

### Moving Sections

- Update navigation configuration
- Update internal links
- Update sitemap
- Add redirects if needed

### Shared Components

- ContentList remains the primary display component
- Badge variants can be extended per section
- Layout components are reusable
- Styling is themeable per section

## Implementation Priority

### Phase 1: Foundation ✅ COMPLETED

1. ✅ Create for-fun folder structure
2. ✅ Update navigation with dropdown
3. ✅ Move theatre section
4. ✅ Create basic games and music pages

### Phase 2: Component Architecture (CURRENT)

1. 🔄 Fix navigation dropdown functionality
2. 🔄 Refactor to proper component hierarchy:
   - Create section-specific home components (TheatreHome, BlogHome, etc.)
   - Move section-specific imports out of RecentContent
   - Pass data to RecentContent instead of importing directly
3. 🔄 Implement centralized section configuration
4. 🔄 Create proper separation of concerns

### Phase 3: Content

1. Create first few game pages (Balatro, Hollow Knight)
2. Add game-specific components (achievement displays, screenshots)
3. Create music content structure
4. Add filtering and search functionality

### Phase 4: Enhancement

1. Add advanced features (achievement tracking, playtime stats)
2. Implement media galleries
3. Add social sharing features
4. Optimize performance and SEO

## Component Architecture Discussion

### Current Issue

The RecentContent component currently imports all section-specific functions (getTheatreReviews, getBlogPosts, etc.) directly, violating separation of concerns.

### Proposed Solution

Create a proper component hierarchy:

- **Home** component imports section home components
- **TheatreHome**, **BlogHome**, etc. handle their own data fetching
- **RecentContent** receives data as props instead of importing directly
- Each section maintains its own data management

### Benefits

- Better separation of concerns
- Easier to maintain and extend
- More modular architecture
- Clearer data flow

## Questions for Discussion

1. **URL Structure**: Do you prefer nested (/for-fun/games) or flat (/games) URLs?
2. **Content Organization**: Should games be organized by genre, platform, or chronologically?
3. **Media Management**: How should we handle screenshots, videos, and other media files?
4. **Achievement Tracking**: Should we create a system for tracking gaming achievements across games?
5. **Integration**: Should the games section integrate with external APIs (Steam, etc.) for automatic data?

## Benefits of This Approach

1. **Modular**: Easy to add/remove sections without breaking others
2. **Consistent**: Shared components ensure consistent UX
3. **Scalable**: New content types can be added easily
4. **Maintainable**: Single source of truth for each data type
5. **Flexible**: Each section can be customized while maintaining consistency
