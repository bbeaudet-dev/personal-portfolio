import { TheatreShow, VisitInfo } from './shows-ben'

// Helper function to create a slug from a show name
function createSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

// Helper function to get image path
function getImagePath(slug: string): string | null {
  const existingImages: Record<string, string> = {
    'hamilton': '/images-theatre/hamilton.jpg',
    'hadestown': '/images-theatre/hadestown.jpg',
    'potus': '/images-theatre/potus.jpg',
    'sunset-blvd': '/images-theatre/sunset-blvd.jpg',
    'maybe-happy-ending': '/images-theatre/maybe-happy-ending.jpg',
    'parade': '/images-theatre/parade.jpg',
    'wicked': '/images-theatre/wicked.jpg',
    'come-from-away': '/images-theatre/come-from-away.jpg',
    'company': '/images-theatre/company.jpg',
    'gypsy': '/images-theatre/gypsy.jpg',
    'les-miserables': '/images-theatre/les-miserables.jpg',
    'moulin-rouge': '/images-theatre/moulin-rouge.jpg',
    'six': '/images-theatre/six.jpg',
    'water-for-elephants': '/images-theatre/water-for-elephants.jpg',
    'a-strange-loop': '/images-theatre/a-strange-loop.jpg',
    'book-of-mormon': '/images-theatre/book-of-mormon.jpg',
    'dear-evan-hansen': '/images-theatre/dear-evan-hansen.jpg',
    'the-great-gatsby': '/images-theatre/great-gatsby.jpg',
    'cabaret': '/images-theatre/cabaret.jpg',
    'merrily-we-roll-along': '/images-theatre/merrily-we-roll-along.jpg',
    'take-me-out': '/images-theatre/take-me-out.jpg',
    'suffs': '/images-theatre/suffs.jpg',
    'waitress': '/images-theatre/waitress.jpg',
    'sweeney-todd': '/images-theatre/sweeney-todd.jpg',
    'a-gentlemans-guide-to-love-and-murder': '/images-theatre/a-gentlemans-guide-to-love-and-murder.jpg',
    'freestyle-love-supreme': '/images-theatre/freestyle-love-supreme.jpg',
    'purlie-victorious': '/images-theatre/purlie-victorious.jpg',
    'to-kill-a-mockingbird': '/images-theatre/to-kill-a-mockingbird.jpg',
    'lion-king': '/images-theatre/lion-king.jpg',
    'funny-girl': '/images-theatre/funny-girl.jpg',
    'once-upon-a-mattress': '/images-theatre/once-upon-a-mattress.jpg',
    'gutenberg': '/images-theatre/gutenberg.jpg',
    'beetlejuice': '/images-theatre/beetlejuice.jpg',
    'on-the-20th-century': '/images-theatre/on-the-20th-century.jpg',
    'mean-girls': '/images-theatre/mean-girls.jpg',
    'all-in': '/images-theatre/all-in.jpg',
    'american-buffalo': '/images-theatre/american-buffalo.jpg',
    'fat-ham': '/images-theatre/fat-ham.jpg',
    'chess': '/images-theatre/chess.jpg',
    'two-strangers': '/images-theatre/two-strangers.jpg',
    'two-strangers-carry-a-cake-across-new-york': '/images-theatre/two-strangers.jpg',
    'death-becomes-her': '/images-theatre/death-becomes-her.jpg',
    'oh-mary': '/images-theatre/oh-mary.jpg',
    'the-last-five-years': '/images-theatre/the-last-5-years.jpg',
    'the-last-5-years': '/images-theatre/the-last-5-years.jpg',
    'ragtime': '/images-theatre/ragtime.jpg',
    'back-to-the-future': '/images-theatre/back-to-the-future.jpg',
  }
  return existingImages[slug] || null
}

// Helper function to get images array
function getImages(slug: string): string[] {
  const image = getImagePath(slug)
  return image ? [image] : []
}

export const theatreShowListRose: TheatreShow[] = [
  { id: 0, slug: createSlug("Merrily We Roll Along"), name: "Merrily We Roll Along", rank: 1, visits: [], images: getImages('merrily-we-roll-along') },
  { id: 1, slug: createSlug("Maybe Happy Ending"), name: "Maybe Happy Ending", rank: 2, visits: [], images: getImages('maybe-happy-ending') },
  { id: 2, slug: createSlug("Hamilton"), name: "Hamilton", rank: 3, visits: [], images: getImages('hamilton') },
  { id: 3, slug: createSlug("Hadestown"), name: "Hadestown", rank: 4, visits: [], images: getImages('hadestown') },
  { id: 4, slug: createSlug("Ragtime"), name: "Ragtime", rank: 5, visits: [], images: getImages('ragtime') },
  { id: 5, slug: createSlug("Wicked"), name: "Wicked", rank: 6, visits: [], images: getImages('wicked') },
  { id: 6, slug: createSlug("Cabaret"), name: "Cabaret", rank: 7, visits: [], images: getImages('cabaret') },
  { id: 7, slug: createSlug("Sunset Blvd."), name: "Sunset Blvd.", rank: 8, visits: [], images: getImages('sunset-blvd') },
  { id: 8, slug: createSlug("Take Me Out"), name: "Take Me Out", rank: 9, visits: [], images: getImages('take-me-out') },
  { id: 9, slug: createSlug("Suffs"), name: "Suffs", rank: 10, visits: [], images: getImages('suffs') },
  { id: 10, slug: createSlug("POTUS"), name: "POTUS", rank: 11, visits: [], images: getImages('potus') },
  { id: 11, slug: createSlug("The Great Gatsby"), name: "The Great Gatsby", rank: 12, visits: [], images: getImages('the-great-gatsby') },
  { id: 12, slug: createSlug("Chess"), name: "Chess", rank: 13, visits: [], images: getImages('chess') },
  { id: 13, slug: createSlug("Waitress"), name: "Waitress", rank: 14, visits: [], images: getImages('waitress') },
  { id: 14, slug: createSlug("Come From Away"), name: "Come From Away", rank: 15, visits: [], images: getImages('come-from-away') },
  { id: 15, slug: createSlug("Company"), name: "Company", rank: 16, visits: [], images: getImages('company') },
  { id: 16, slug: createSlug("Two Strangers Carry a Cake Across New York"), name: "Two Strangers Carry a Cake Across New York", rank: 17, visits: [], images: getImages('two-strangers') },
  { id: 17, slug: createSlug("Sweeney Todd"), name: "Sweeney Todd", rank: 18, visits: [], images: getImages('sweeney-todd') },
  { id: 18, slug: createSlug("A Gentleman's Guide to Love and Murder"), name: "A Gentleman's Guide to Love and Murder", rank: 19, visits: [], images: getImages('a-gentlemans-guide-to-love-and-murder') },
  { id: 19, slug: createSlug("Freestyle Love Supreme"), name: "Freestyle Love Supreme", rank: 20, visits: [], images: getImages('freestyle-love-supreme') },
  { id: 20, slug: createSlug("Parade"), name: "Parade", rank: 21, visits: [], images: getImages('parade') },
  { id: 21, slug: createSlug("Les Miserables"), name: "Les Miserables", rank: 22, visits: [], images: getImages('les-miserables') },
  { id: 22, slug: createSlug("Book of Mormon"), name: "Book of Mormon", rank: 23, visits: [], images: getImages('book-of-mormon') },
  { id: 23, slug: createSlug("To Kill a Mockingbird"), name: "To Kill a Mockingbird", rank: 24, visits: [], images: getImages('to-kill-a-mockingbird') },
  { id: 24, slug: createSlug("A Strange Loop"), name: "A Strange Loop", rank: 25, visits: [], images: getImages('a-strange-loop') },
  { id: 25, slug: createSlug("Moulin Rouge"), name: "Moulin Rouge", rank: 26, visits: [], images: getImages('moulin-rouge') },
  { id: 26, slug: createSlug("Six"), name: "Six", rank: 27, visits: [], images: getImages('six') },
  { id: 27, slug: createSlug("Gypsy"), name: "Gypsy", rank: 28, visits: [], images: getImages('gypsy') },
  { id: 28, slug: createSlug("Purlie Victorious"), name: "Purlie Victorious", rank: 29, visits: [], images: getImages('purlie-victorious') },
  { id: 29, slug: createSlug("The Lion King"), name: "The Lion King", rank: 30, visits: [], images: getImages('lion-king') },
  { id: 30, slug: createSlug("Death Becomes Her"), name: "Death Becomes Her", rank: 31, visits: [], images: getImages('death-becomes-her') },
  { id: 31, slug: createSlug("Funny Girl"), name: "Funny Girl", rank: 32, visits: [], images: getImages('funny-girl') },
  { id: 32, slug: createSlug("Water for Elephants"), name: "Water for Elephants", rank: 33, visits: [], images: getImages('water-for-elephants') },
  { id: 33, slug: createSlug("Once Upon a Mattress"), name: "Once Upon a Mattress", rank: 34, visits: [], images: getImages('once-upon-a-mattress') },
  { id: 34, slug: createSlug("Beetlejuice"), name: "Beetlejuice", rank: 35, visits: [], images: getImages('beetlejuice') },
  { id: 35, slug: createSlug("Gutenberg! The Musical!"), name: "Gutenberg! The Musical!", rank: 36, visits: [], images: getImages('gutenberg') },
  { id: 36, slug: createSlug("On the 20th Century"), name: "On the 20th Century", rank: 37, visits: [], images: getImages('on-the-20th-century') },
  { id: 37, slug: createSlug("Back to the Future"), name: "Back to the Future", rank: 38, visits: [], images: getImages('back-to-the-future') },
  { id: 38, slug: createSlug("Dear Evan Hansen"), name: "Dear Evan Hansen", rank: 39, visits: [], images: getImages('dear-evan-hansen') },
  { id: 39, slug: createSlug("Mean Girls"), name: "Mean Girls", rank: 40, visits: [], images: getImages('mean-girls') },
  { id: 40, slug: createSlug("Oh, Mary!"), name: "Oh, Mary!", rank: 41, visits: [], images: getImages('oh-mary') },
  { id: 41, slug: createSlug("All In: A Comedy About Love"), name: "All In: A Comedy About Love", rank: 42, visits: [], images: getImages('all-in') },
  { id: 42, slug: createSlug("American Buffalo"), name: "American Buffalo", rank: 43, visits: [], images: getImages('american-buffalo') },
  { id: 43, slug: createSlug("Fat Ham"), name: "Fat Ham", rank: 44, visits: [], images: getImages('fat-ham') },
  { id: 44, slug: createSlug("The Last Five Years"), name: "The Last Five Years", rank: 45, visits: [], images: getImages('the-last-five-years') },
]
