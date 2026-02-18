export type ShowForm = 'musical' | 'play' | 'opera' | 'dance' | 'other'

export interface TheatreShow {
  // Core show info
  id: number // Unique show ID (0 = first unique show added, 1 = second unique show added, etc.)
  slug: string
  name: string
  rank: number // 1 = best, higher numbers = lower rank
  
  // Genre/form (for filtering)
  form?: ShowForm
  
  // Visits information
  visits: VisitInfo[]
  
  // Media
  images: string[]
  
  // Related content (for future use)
  reviews?: Array<{
    title: string
    slug: string
  }>
  blogPosts?: Array<{
    title: string
    slug: string
  }>
  other?: Array<{
    title: string
    url: string
  }>
}

export interface VisitInfo {
  chronologicalId: number // Overall chronological order (0 = first show ever seen, 1 = second show ever seen, etc.)
  visitId: number // 0 for first visit to this show, 1 for second, etc.
  date: string
  theatre: string
  district: 'Broadway' | 'Playhouse Square' | 'West End' | 'Off-Broadway' | 'Local' | 'Touring' | 'Other'
  notes?: string // Optional notes about the visit (cast, special circumstances, etc.)
}

export const theatreShowList: TheatreShow[] = [
  { 
    id: 0,
    slug: "hadestown",
    name: "Hadestown", 
    rank: 1,
    visits: [
      { chronologicalId: 23, visitId: 0, theatre: "Connor Palace", date: "2024-12-15", district: "Playhouse Square" },
      { chronologicalId: 25, visitId: 1, theatre: "Walter Kerr Theatre", date: "2025-01-20", district: "Broadway" },
      { chronologicalId: 34, visitId: 2, theatre: "Walter Kerr Theatre", date: "2025-07-06", district: "Broadway" },
      { chronologicalId: 75, visitId: 3, theatre: "Walter Kerr Theatre", date: "2026-02-03", district: "Broadway", notes: "Jack Wolfe was AMAZING" }
    ],
    images: ['/images-theatre/hadestown.jpg'],
    form: 'musical'
  },
  { 
    id: 1,
    slug: "hamilton",
    name: "Hamilton", 
    rank: 4,
    visits: [
      { chronologicalId: 7, visitId: 0, theatre: "Keybank State Theatre", date: "2024-01-15", district: "Playhouse Square" }
    ],
    images: ['/images-theatre/hamilton.jpg'],
    form: 'musical'
  },
  { 
    id: 2,
    slug: "come-from-away",
    name: "Come From Away", 
    rank: 7,
    visits: [
      { chronologicalId: 10, visitId: 0, theatre: "Connor Palace", date: "2024-08-13", district: "Playhouse Square" },
      { chronologicalId: 26, visitId: 1, theatre: "Detroit Fisher Theatre", date: "2025-02-15", district: "Touring" }
    ],
    images: ['/images-theatre/come-from-away.jpg'],
    form: 'musical'
  },
  { 
    id: 3,
    slug: "john-proctor-is-the-villain",
    name: "John Proctor is the Villain", 
    rank: 12,
    visits: [
      { chronologicalId: 37, visitId: 0, theatre: "Booth Theatre", date: "2025-08-02", district: "Broadway" },
      { chronologicalId: 40, visitId: 1, theatre: "Booth Theatre", date: "2025-08-09", district: "Broadway" }
    ],
    images: ['/images-theatre/john-proctor.jpg'],
    form: 'play'
  },
  {
    id: 70,
    slug: "suffs",
    name: "Suffs",
    rank: 13,
    visits: [{ chronologicalId: 81, visitId: 0, theatre: "Connor Palace", date: "2026-02-11", district: "Playhouse Square" }],
    images: ['/images-theatre/suffs.jpg'],
    form: 'musical'
  },
  {
    id: 4,
    slug: "gypsy",
    name: "Gypsy", 
    rank: 16,
    visits: [
      { chronologicalId: 33, visitId: 0, theatre: "Majestic Theatre", date: "2025-06-28", district: "Broadway" }
    ],
    images: ['/images-theatre/gypsy.jpg'],
    form: 'musical'
  },
  { 
    id: 5,
    slug: "water-for-elephants",
    name: "Water for Elephants", 
    rank: 14,
    visits: [
      { chronologicalId: 9, visitId: 0, theatre: "Imperial Theatre", date: "2024-08-03", district: "Broadway" }
    ],
    images: ['/images-theatre/water-for-elephants.jpg'],
    form: 'musical'
  },
  { 
    id: 6,
    slug: "death-becomes-her",
    name: "Death Becomes Her", 
    rank: 8,
    visits: [
      { chronologicalId: 38, visitId: 0, theatre: "Lunt-Fontanne Theatre", date: "2025-08-03", district: "Broadway", notes: "Main Viola, backup Stefan" },
      { chronologicalId: 39, visitId: 1, theatre: "Lunt-Fontanne Theatre", date: "2025-08-08", district: "Broadway", notes: "Main Stefan, backup Viola" }
    ],
    images: ['/images-theatre/death-becomes-her.jpg'],
    form: 'musical'
  },
  {
    id: 7,
    slug: "sunset-blvd",
    name: "Sunset Blvd.", 
    rank: 17,
    visits: [
      { chronologicalId: 24, visitId: 0, theatre: "St. James Theatre", date: "2024-12-20", district: "Broadway" }
    ],
    images: ['/images-theatre/sunset-blvd.jpg'],
    form: 'musical'
  },
  {
    id: 71,
    slug: "spelling-bee",
    name: "The 25th Annual Putnam County Spelling Bee",
    rank: 18,
    visits: [{ chronologicalId: 68, visitId: 0, theatre: "New World Stages", date: "2026-01-09", district: "Off-Broadway" }],
    images: ['/images-theatre/spelling-bee.jpg'],
    form: 'musical'
  },
  {
    id: 8,
    slug: "the-outsiders",
    name: "The Outsiders", 
    rank: 43,
    visits: [
      { chronologicalId: 12, visitId: 0, theatre: "Bernard B. Jacobs Theatre", date: "2024-09-19", district: "Broadway" }
    ],
    images: ['/images-theatre/the-outsiders.jpg'],
    form: 'musical'
  },
  { 
    id: 9,
    slug: "floyd-collins",
    name: "Floyd Collins", 
    rank: 29,
    visits: [
      { chronologicalId: 31, visitId: 0, theatre: "Vivian Beaumont Theatre", date: "2025-06-20", district: "Broadway" }
    ],
    images: ['/images-theatre/floyd-collins.jpg'],
    form: 'musical'
  },
  { 
    id: 10,
    slug: "moulin-rouge",
    name: "Moulin Rouge", 
    rank: 23,
    visits: [
      { chronologicalId: 4, visitId: 0, theatre: "Al Hirschfeld Theatre", date: "2023-01-29", district: "Broadway" }
    ],
    images: ['/images-theatre/moulin-rouge.jpg'],
    form: 'musical'
  },
  { 
    id: 11,
    slug: "wicked",
    name: "Wicked", 
    rank: 26,
    visits: [
      { chronologicalId: 3, visitId: 0, theatre: "Gershwin Theatre", date: "2023-01-28", district: "Broadway" }
    ],
    images: ['/images-theatre/wicked.jpg'],
    form: 'musical'
  },
  { 
    id: 12,
    slug: "potus",
    name: "POTUS", 
    rank: 24,
    visits: [
      { chronologicalId: 1, visitId: 0, theatre: "Shubert Theatre", date: "2022-05-01", district: "Broadway" }
    ],
    images: ['/images-theatre/potus.jpg'],
    form: 'play'
  },
  {
    id: 13,
    slug: "job",
    name: "Job", 
    rank: 21,
    visits: [
      { chronologicalId: 8, visitId: 0, theatre: "Hayes Theatre", date: "2024-08-02", district: "Broadway" }
    ],
    images: ['/images-theatre/job.jpg'],
    form: 'play'
  },
  {
    id: 14,
    slug: "les-miserables",
    name: "Les Misérables", 
    rank: 3,
    visits: [
      { chronologicalId: 13, visitId: 0, theatre: "Connor Palace", date: "2024-09-19", district: "Playhouse Square" },
      { chronologicalId: 74, visitId: 1, theatre: "Ohio Theatre", date: "2026-01-28", district: "Touring" }
    ],
    images: ['/images-theatre/les-miserables.jpg'],
    form: 'musical'
  },
  { 
    id: 15,
    slug: "call-me-izzy",
    name: "Call Me Izzy", 
    rank: 46,
    visits: [
      { chronologicalId: 32, visitId: 0, theatre: "Studio 54", date: "2025-06-22", district: "Broadway" }
    ],
    images: ['/images-theatre/call-me-izzy.jpg'],
    form: 'play'
  },
  { 
    id: 16,
    slug: "some-like-it-hot",
    name: "Some Like It Hot", 
    rank: 31,
    visits: [
      { chronologicalId: 18, visitId: 0, theatre: "Connor Palace", date: "2024-11-10", district: "Playhouse Square" }
    ],
    images: ['/images-theatre/some-like-it-hot.jpg'],
    form: 'musical'
  },
  { 
    id: 17,
    slug: "hells-kitchen",
    name: "Hell's Kitchen", 
    rank: 44,
    visits: [
      { chronologicalId: 21, visitId: 0, theatre: "Shubert Theatre", date: "2024-12-05", district: "Broadway" }
    ],
    images: ['/images-theatre/hells-kitchen.jpg'],
    form: 'musical'
  },
  { 
    id: 18,
    slug: "parade",
    name: "Parade", 
    rank: 34,
    visits: [
      { chronologicalId: 20, visitId: 0, theatre: "Connor Palace", date: "2024-11-20", district: "Playhouse Square" }
    ],
    images: ['/images-theatre/parade.jpg'],
    form: 'musical'
  },
  { 
    id: 19,
    slug: "the-last-5-years",
    name: "The Last 5 Years", 
    rank: 47,
    visits: [
      { chronologicalId: 29, visitId: 0, theatre: "Hudson Theatre", date: "2025-06-01", district: "Broadway" }
    ],
    images: ['/images-theatre/the-last-5-years.jpg'],
    form: 'musical'
  },
  { 
    id: 20,
    slug: "the-great-gatsby",
    name: "The Great Gatsby", 
    rank: 42,
    visits: [
      { chronologicalId: 16, visitId: 0, theatre: "Broadway Theatre", date: "2024-10-15", district: "Broadway" }
    ],
    images: ['/images-theatre/great-gatsby.jpg'],
    form: 'musical'
  },
  { 
    id: 21,
    slug: "fiddler-on-the-roof",
    name: "Fiddler on the Roof", 
    rank: 50,
    visits: [
      { chronologicalId: 28, visitId: 0, theatre: "Allen Theatre", date: "2025-05-13", district: "Playhouse Square" }
    ],
    images: ['/images-theatre/fiddler-on-the-roof.jpg'],
    form: 'musical'
  },
  { 
    id: 22,
    slug: "shucked",
    name: "Shucked", 
    rank: 64,
    visits: [
      { chronologicalId: 19, visitId: 0, theatre: "Connor Palace", date: "2024-11-15", district: "Playhouse Square" }
    ],
    images: ['/images-theatre/shucked.jpg'],
    form: 'musical'
  },
  { 
    id: 23,
    slug: "life-of-pi",
    name: "Life of Pi", 
    rank: 48,
    visits: [
      { chronologicalId: 22, visitId: 0, theatre: "Connor Palace", date: "2024-12-10", district: "Playhouse Square" }
    ],
    images: ['/images-theatre/life-of-pi.jpg'],
    form: 'play'
  },
  { 
    id: 24,
    slug: "in-the-heights",
    name: "In the Heights", 
    rank: 51,
    visits: [
      { chronologicalId: 17, visitId: 0, theatre: "Connor Palace", date: "2024-10-20", district: "Playhouse Square" }
    ],
    images: ['/images-theatre/in-the-heights.jpg'],
    form: 'musical'
  },
  { 
    id: 25,
    slug: "pride-prejudice",
    name: "Pride & Prejudice", 
    rank: 55,
    visits: [
      { chronologicalId: 14, visitId: 0, theatre: "Connor Palace", date: "2024-09-25", district: "Playhouse Square" }
    ],
    images: ['/images-theatre/pride-and-prejudice.webp'],
    form: 'play'
  },
  { 
    id: 26,
    slug: "dead-outlaw",
    name: "Dead Outlaw", 
    rank: 41,
    visits: [
      { chronologicalId: 30, visitId: 0, theatre: "Audible Theatre", date: "2025-06-15", district: "Broadway" }
    ],
    images: ['/images-theatre/dead-outlaw.jpg'],
    reviews: [
      { title: "Dead Outlaw", slug: "dead-outlaw" }
    ],
    form: 'musical'
  },
  { 
    id: 27,
    slug: "dear-evan-hansen",
    name: "Dear Evan Hansen", 
    rank: 49,
    visits: [
      { chronologicalId: 5, visitId: 0, theatre: "Connor Palace", date: "2023-05-17", district: "Playhouse Square" }
    ],
    images: ['/images-theatre/dear-evan-hansen.jpg'],
    reviews: [
      { title: "Dear Evan Hansen", slug: "dear-evan-hansen" }
    ],
    form: 'musical'
  },
  { 
    id: 28,
    slug: "and-juliet",
    name: "& Juliet", 
    rank: 45,
    visits: [
      { chronologicalId: 27, visitId: 0, theatre: "Connor Palace", date: "2025-03-06", district: "Playhouse Square" },
      { chronologicalId: 80, visitId: 1, theatre: "Stephen Sondheim Theatre", date: "2026-02-07", district: "Broadway" }
    ],
    images: ['/images-theatre/and-juliet.jpg'],
    reviews: [
      { title: "& Juliet", slug: "and-juliet" }
    ],
    form: 'musical'
  },
  { 
    id: 29,
    slug: "harry-potter-cursed-child",
    name: "Harry Potter and the Cursed Child", 
    rank: 63,
    visits: [
      { chronologicalId: 15, visitId: 0, theatre: "Lyric Theatre", date: "2024-09-25", district: "Broadway" }
    ],
    images: ['/images-theatre/harry-potter-cursed-child.jpg'],
    form: 'play'
  },
  { 
    id: 30,
    slug: "a-strange-loop",
    name: "A Strange Loop", 
    rank: 53,
    visits: [
      { chronologicalId: 6, visitId: 0, theatre: "Lyceum Theatre", date: "2023-08-20", district: "Broadway" }
    ],
    images: ['/images-theatre/a-strange-loop.jpg'],
    reviews: [
      { title: "A Strange Loop", slug: "a-strange-loop" }
    ],
    form: 'musical'
  },
  { 
    id: 31,
    slug: "book-of-mormon",
    name: "Book of Mormon", 
    rank: 52,
    visits: [
      { chronologicalId: 2, visitId: 0, theatre: "Eugene O'Neill Theatre", date: "2023-01-27", district: "Broadway" }
    ],
    images: ['/images-theatre/book-of-mormon.jpg'],
    reviews: [
      { title: "Book of Mormon", slug: "book-of-mormon" }
    ],
    form: 'musical'
  },
  { 
    id: 32,
    slug: "lord-nil-seven-deadly-sins",
    name: "Lord Nil: Seven Deadly Sins", 
    rank: 69,
    visits: [
      { chronologicalId: 36, visitId: 0, theatre: "Stage 42", date: "2025-08-01", district: "Off-Broadway" }
    ],
    images: ['/images-theatre/lord-nil.jpg'],
    form: 'other'
  },
  { 
    id: 33,
    slug: "stranger-things-first-shadow",
    name: "Stranger Things: The First Shadow", 
    rank: 66,
    visits: [
      { chronologicalId: 35, visitId: 0, theatre: "Marquis Theatre", date: "2025-07-18", district: "Broadway" }
    ],
    images: ['/images-theatre/stranger-things.jpg'],
    reviews: [
      { title: "Stranger Things: The First Shadow", slug: "stranger-things-first-shadow" }
    ],
    form: 'play'
  },
  { 
    id: 34,
    slug: "company",
    name: "Company", 
    rank: 62,
    visits: [
      { chronologicalId: 0, visitId: 0, theatre: "Bernard B. Jacobs Theatre", date: "2022-04-30", district: "Broadway" }
    ],
    images: ['/images-theatre/company.jpg'],
    reviews: [
      { title: "Company", slug: "company" }
    ],
    form: 'musical'
  },
  { 
    id: 35,
    slug: "six",
    name: "Six", 
    rank: 68,
    visits: [
      { chronologicalId: 11, visitId: 0, theatre: "Connor Palace", date: "2024-09-05", district: "Playhouse Square" }
    ],
    images: ['/images-theatre/six.jpg'],
    reviews: [
      { title: "Six", slug: "six" }
    ],
    form: 'musical'
  },
  { 
    id: 36,
    slug: "cabaret",
    name: "Cabaret", 
    rank: 20,
    visits: [
      { chronologicalId: 41, visitId: 0, theatre: "August Wilson Theatre", date: "2025-08-09", district: "Broadway" }
    ],
    images: ['/images-theatre/cabaret.jpg'],
    form: 'musical'
  },
  { 
    id: 37,
    slug: "maybe-happy-ending",
    name: "Maybe Happy Ending", 
    rank: 2,
    visits: [
      { chronologicalId: 42, visitId: 0, theatre: "Belasco Theatre", date: "2025-08-10", district: "Broadway" },
      { chronologicalId: 67, visitId: 1, theatre: "Belasco Theatre", date: "2026-01-08", district: "Broadway" }
    ],
    images: ['/images-theatre/maybe-happy-ending.jpg'],
    form: 'musical'
  },
  { 
    id: 38,
    slug: "operation-mincemeat",
    name: "Operation Mincemeat", 
    rank: 6,
    visits: [
      { chronologicalId: 43, visitId: 0, theatre: "Golden Theatre", date: "2025-08-15", district: "Broadway" },
      { chronologicalId: 52, visitId: 1, theatre: "Golden Theatre", date: "2025-10-14", district: "Broadway" },
      { chronologicalId: 60, visitId: 2, theatre: "Golden Theatre", date: "2025-12-06", district: "Broadway" }
    ],
    images: ['/images-theatre/operation-mincemeat.jpg'],
    reviews: [
      { title: "Operation Mincemeat", slug: "operation-mincemeat" }
    ],
    form: 'musical'
  },
  { 
    id: 39,
    slug: "play-that-goes-wrong",
    name: "Play That Goes Wrong", 
    rank: 38,
    visits: [
      { chronologicalId: 44, visitId: 0, theatre: "New World Stages", date: "2025-08-17", district: "Off-Broadway" }
    ],
    images: ['/images-theatre/play-that-goes-wrong.jpg'],
    form: 'play'
  },
  {
    id: 40,
    slug: "ginger-twinsies",
    name: "Ginger Twinsies", 
    rank: 54,
    visits: [
      { chronologicalId: 45, visitId: 0, theatre: "Orpheum Theatre", date: "2025-08-23", district: "Off-Broadway" }
    ],
    images: ['/images-theatre/ginger-twinsies.jpg'],
    form: 'play'
  },
  { 
    id: 41,
    slug: "chicago",
    name: "Chicago", 
    rank: 32,
    visits: [
      { chronologicalId: 46, visitId: 0, theatre: "Ambassador Theatre", date: "2025-08-24", district: "Broadway" }
    ],
    images: ['/images-theatre/chicago.jpg'],
    form: 'musical'
  },
  { 
    id: 42,
    slug: "mexodus",
    name: "Mexodus", 
    rank: 5,
    visits: [
      { chronologicalId: 51, visitId: 0, theatre: "Minetta Lane Theatre", date: "2025-10-13", district: "Off-Broadway" },
      { chronologicalId: 53, visitId: 1, theatre: "Minetta Lane Theatre", date: "2025-10-15", district: "Off-Broadway" }
    ],
    images: ['/images-theatre/mexodus.webp'],
    form: 'musical'
  },
  { 
    id: 43,
    slug: "punch",
    name: "Punch", 
    rank: 19,
    visits: [
      { chronologicalId: 48, visitId: 0, theatre: "Samuel J. Friedman Theatre", date: "2025-10-11", district: "Broadway" }
    ],
    images: ['/images-theatre/punch.jpg'],
    form: 'play'
  },
  {
    id: 44,
    slug: "little-shop-of-horrors",
    name: "Little Shop of Horrors", 
    rank: 28,
    visits: [
      { chronologicalId: 47, visitId: 0, theatre: "Westside Theatre", date: "2025-08-30", district: "Off-Broadway" }
    ],
    images: ['/images-theatre/little-shop-of-horrors.jpg'],
    form: 'musical'
  },
  { 
    id: 45,
    slug: "mamma-mia",
    name: "Mamma Mia!", 
    rank: 37,
    visits: [
      { chronologicalId: 50, visitId: 0, theatre: "Winter Garden Theatre", date: "2025-10-12", district: "Broadway" }
    ],
    images: ['/images-theatre/mamma-mia.jpg'],
    form: 'musical'
  },
  { 
    id: 46,
    slug: "andre-de-shields-is-tartuffe",
    name: "André de Shields is Tartuffe", 
    rank: 70,
    visits: [
      { chronologicalId: 49, visitId: 0, theatre: "House of the Redeemer", date: "2025-10-12", district: "Off-Broadway" }
    ],
    images: ['/images-theatre/tartuffe.webp'],
    form: 'play'
  },
  {
    id: 47,
    slug: "rent",
    name: "RENT", 
    rank: 36,
    visits: [
      { chronologicalId: 55, visitId: 0, theatre: "Columbus Performing Arts Center (CPAC)", date: "2025-11-07", district: "Local" }
    ],
    images: ['/images-theatre/rent.webp'],
    form: 'musical'
  },
  { 
    id: 48,
    slug: "pen-pals",
    name: "Pen Pals", 
    rank: 57,
    visits: [
      { chronologicalId: 56, visitId: 0, theatre: "DR2 Theatre", date: "2025-11-30", district: "Off-Broadway" }
    ],
    images: ['/images-theatre/pen-pals.jpg'],
    form: 'play'
  },
  {
    id: 49,
    slug: "marjorie-prime",
    name: "Marjorie Prime", 
    rank: 61,
    visits: [
      { chronologicalId: 57, visitId: 0, theatre: "Hayes Theater", date: "2025-11-29", district: "Broadway" }
    ],
    images: ['/images-theatre/marjorie-prime.jpg'],
    form: 'play'
  },
  {
    id: 50,
    slug: "waiting-for-godot",
    name: "Waiting For Godot", 
    rank: 33,
    visits: [
      { chronologicalId: 58, visitId: 0, theatre: "Hudson Theatre", date: "2025-12-03", district: "Broadway" }
    ],
    images: ['/images-theatre/waiting-for-godot.jpg'],
    form: 'play'
  },
  {
    id: 51,
    slug: "chess",
    name: "Chess", 
    rank: 40,
    visits: [
      { chronologicalId: 59, visitId: 0, theatre: "Imperial Theatre", date: "2025-12-05", district: "Broadway" }
    ],
    images: ['/images-theatre/chess.jpg'],
    reviews: [
      { title: "Chess", slug: "chess" }
    ],
    form: 'musical'
  },
  { 
    id: 52,
    slug: "two-strangers",
    name: "Two Strangers (Carry a Cake Across New York)", 
    rank: 10,
    visits: [
      { chronologicalId: 61, visitId: 0, theatre: "Longacre Theatre", date: "2025-12-06", district: "Broadway" }
    ],
    images: ['/images-theatre/two-strangers.jpg'],
    form: 'musical'
  },
  { 
    id: 53,
    slug: "oh-mary",
    name: "Oh, Mary!", 
    rank: 67,
    visits: [
      { chronologicalId: 62, visitId: 0, theatre: "Lyceum Theatre", date: "2025-12-07", district: "Broadway" }
    ],
    images: ['/images-theatre/oh-mary.jpg'],
    form: 'play'
  },
  {
    id: 54,
    slug: "rockettes-christmas-spectacular",
    name: "Rockettes Christmas Spectacular", 
    rank: 56,
    visits: [
      { chronologicalId: 63, visitId: 0, theatre: "Radio City Music Hall", date: "2025-12-07", district: "Broadway" }
    ],
    images: ['/images-theatre/rockettes-christmas-spectacular.webp'],
    form: 'dance'
  },
  { 
    id: 55,
    slug: "rocky-horror",
    name: "The Rocky Horror Show", 
    rank: 59,
    visits: [
      { chronologicalId: 54, visitId: 0, theatre: "Garden Theatre", date: "2025-10-25", district: "Local" }
    ],
    images: ['/images-theatre/rocky-horror.png'],
    form: 'musical'
  },
  { 
    id: 56,
    slug: "perfect-crime",
    name: "Perfect Crime", 
    rank: 72,
    visits: [
      { chronologicalId: 64, visitId: 0, theatre: "The Theater Center", date: "2026-01-05", district: "Off-Broadway" }
    ],
    images: ['/images-theatre/perfect-crime.jpg'],
    form: 'play'
  },
  {
    id: 57,
    slug: "phantom-of-the-opera",
    name: "Phantom of the Opera",
    rank: 9,
    visits: [
      { chronologicalId: 83, visitId: 0, theatre: "Detroit Opera House", date: "2026-02-14", district: "Touring" }
    ],
    images: ['/images-theatre/phantom-of-the-opera.jpg'],
    form: 'musical'
  },
  {
    id: 58,
    slug: "marcel-on-the-train",
    name: "Marcel on the Train",
    rank: 11,
    visits: [
      { chronologicalId: 79, visitId: 0, theatre: "Classic Stage Company", date: "2026-02-06", district: "Off-Broadway" }
    ],
    images: ['/images-theatre/marcel-on-the-train.jpg'],
    form: 'play'
  },
  {
    id: 59,
    slug: "oedipus",
    name: "Oedipus",
    rank: 15,
    visits: [
      { chronologicalId: 66, visitId: 0, theatre: "Studio 54", date: "2026-01-07", district: "Broadway" }
    ],
    images: ['/images-theatre/oedipus.jpg'],
    form: 'play'
  },
  {
    id: 60,
    slug: "high-spirits",
    name: "High Spirits",
    rank: 22,
    visits: [
      { chronologicalId: 78, visitId: 0, theatre: "New York City Center", date: "2026-02-05", district: "Off-Broadway" }
    ],
    images: ['/images-theatre/high-spirits.jpg'],
    form: 'musical'
  },
  {
    id: 61,
    slug: "bug",
    name: "Bug",
    rank: 25,
    visits: [
      { chronologicalId: 70, visitId: 0, theatre: "Samuel J. Friedman Theatre", date: "2026-01-11", district: "Broadway" }
    ],
    images: ['/images-theatre/bug.jpg'],
    form: 'play'
  },
  {
    id: 62,
    slug: "heart-of-robin-hood",
    name: "The Heart of Robin Hood",
    rank: 27,
    visits: [
      { chronologicalId: 82, visitId: 0, theatre: "Hanna Theatre", date: "2026-02-12", district: "Playhouse Square" }
    ],
    images: ['/images-theatre/the-heart-of-robin-hood.png'],
    form: 'play'
  },
  {
    id: 63,
    slug: "the-disappear",
    name: "The Disappear",
    rank: 30,
    visits: [
      { chronologicalId: 72, visitId: 0, theatre: "Minetta Lane Theatre", date: "2026-01-12", district: "Off-Broadway" }
    ],
    images: ['/images-theatre/the-disappear.jpg'],
    form: 'play'
  },
  {
    id: 64,
    slug: "the-other-place",
    name: "The Other Place",
    rank: 35,
    visits: [
      { chronologicalId: 76, visitId: 0, theatre: "The Shed", date: "2026-02-04", district: "Off-Broadway" }
    ],
    images: ['/images-theatre/the-other-place.jpg'],
    form: 'play'
  },
  {
    id: 65,
    slug: "an-ark",
    name: "An Ark",
    rank: 71,
    visits: [
      { chronologicalId: 77, visitId: 0, theatre: "The Shed", date: "2026-02-04", district: "Off-Broadway" }
    ],
    images: ['/images-theatre/an-ark.webp'],
    form: 'play'
  },
  {
    id: 66,
    slug: "liberation",
    name: "Liberation",
    rank: 39,
    visits: [
      { chronologicalId: 65, visitId: 0, theatre: "James Earl Jones Theatre", date: "2026-01-06", district: "Broadway" }
    ],
    images: ['/images-theatre/liberation.jpg'],
    form: 'play'
  },
  {
    id: 67,
    slug: "the-notebook",
    name: "The Notebook",
    rank: 58,
    visits: [
      { chronologicalId: 73, visitId: 0, theatre: "Hollywood Pantages Theatre", date: "2026-01-18", district: "Touring" }
    ],
    images: ['/images-theatre/the-notebook.jpg'],
    form: 'musical'
  },
  {
    id: 68,
    slug: "the-bookstore",
    name: "The Bookstore",
    rank: 60,
    visits: [
      { chronologicalId: 69, visitId: 0, theatre: "59E59 Theater A", date: "2026-01-10", district: "Off-Broadway" }
    ],
    images: ['/images-theatre/the-bookstore.jpg'],
    form: 'play'
  },
  {
    id: 69,
    slug: "data",
    name: "Data",
    rank: 65,
    visits: [
      { chronologicalId: 71, visitId: 0, theatre: "Lucille Lortel Theatre", date: "2026-01-11", district: "Off-Broadway" }
    ],
    images: ['/images-theatre/data.jpg'],
    form: 'play'
  },
]; 