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
    'moulin-rouge': '/images-theatre/moulin-rouge.jpg',
    'wicked': '/images-theatre/wicked.jpg',
    'les-miserables': '/images-theatre/les-miserables.jpg',
    'come-from-away': '/images-theatre/come-from-away.jpg',
    'the-outsiders': '/images-theatre/the-outsiders.jpg',
    'john-proctor-is-the-villain': '/images-theatre/john-proctor.jpg',
    'cabaret': '/images-theatre/cabaret.jpg',
    'potus': '/images-theatre/potus.jpg',
    'water-for-elephants': '/images-theatre/water-for-elephants.jpg',
    'in-the-heights': '/images-theatre/in-the-heights.jpg',
    'death-becomes-her': '/images-theatre/death-becomes-her.jpg',
    'operation-mincemeat': '/images-theatre/operation-mincemeat.jpg',
    'the-great-gatsby': '/images-theatre/great-gatsby.jpg',
    'some-like-it-hot': '/images-theatre/some-like-it-hot.jpg',
    'sunset-blvd': '/images-theatre/sunset-blvd.jpg',
    'gypsy': '/images-theatre/gypsy.jpg',
    'maybe-happy-ending': '/images-theatre/maybe-happy-ending.jpg',
    'two-strangers': '/images-theatre/two-strangers.jpg',
    'two-strangers-carry-a-cake-across-new-york': '/images-theatre/two-strangers.jpg',
    'parade': '/images-theatre/parade.jpg',
    'rent': '/images-theatre/rent.webp',
    'chess': '/images-theatre/chess.jpg',
    'shucked': '/images-theatre/shucked.jpg',
    'fiddler-on-the-roof': '/images-theatre/fiddler-on-the-roof.jpg',
    'life-of-pi': '/images-theatre/life-of-pi.jpg',
    'pride-prejudice': '/images-theatre/pride-and-prejudice.webp',
    'pride-and-prejudice': '/images-theatre/pride-and-prejudice.webp',
    'and-juliet': '/images-theatre/and-juliet.jpg',
    'harry-potter-cursed-child': '/images-theatre/harry-potter-cursed-child.jpg',
    'harry-potter-and-the-cursed-child': '/images-theatre/harry-potter-cursed-child.jpg',
    'hells-kitchen': '/images-theatre/hells-kitchen.jpg',
    'six': '/images-theatre/six.jpg',
    'dear-evan-hansen': '/images-theatre/dear-evan-hansen.jpg',
    'rocky-horror': '/images-theatre/rocky-horror.png',
    'the-rocky-horror-show': '/images-theatre/rocky-horror.png',
    'book-of-mormon': '/images-theatre/book-of-mormon.jpg',
    'a-strange-loop': '/images-theatre/a-strange-loop.jpg',
    'company': '/images-theatre/company.jpg',
    'oh-mary': '/images-theatre/oh-mary.jpg',
    'american-buffalo': '/images-theatre/american-buffalo.jpg',
    'merrily-we-roll-along': '/images-theatre/merrily-we-roll-along.jpg',
    'suffs': '/images-theatre/suffs.jpg',
    'the-notebook': '/images-theatre/the-notebook.jpg',
  }
  return existingImages[slug] || null
}

// Helper function to get images array
function getImages(slug: string): string[] {
  const image = getImagePath(slug)
  return image ? [image] : []
}

export const theatreShowListSophia: TheatreShow[] = [
  { id: 0, slug: createSlug("Hadestown"), name: "Hadestown", rank: 1, visits: [], images: getImages('hadestown') },
  { id: 1, slug: createSlug("Hamilton"), name: "Hamilton", rank: 2, visits: [], images: getImages('hamilton') },
  { id: 2, slug: createSlug("Moulin Rouge"), name: "Moulin Rouge", rank: 3, visits: [], images: getImages('moulin-rouge') },
  { id: 3, slug: createSlug("Wicked"), name: "Wicked", rank: 4, visits: [], images: getImages('wicked') },
  { id: 4, slug: createSlug("Les Misérables"), name: "Les Misérables", rank: 5, visits: [], images: getImages('les-miserables') },
  { id: 5, slug: createSlug("Come From Away"), name: "Come From Away", rank: 6, visits: [], images: getImages('come-from-away') },
  { id: 6, slug: createSlug("Phantom of the Opera"), name: "Phantom of the Opera", rank: 7, visits: [], images: getImages('phantom-of-the-opera') },
  { id: 7, slug: createSlug("The Outsiders"), name: "The Outsiders", rank: 8, visits: [], images: getImages('the-outsiders') },
  { id: 8, slug: createSlug("John Proctor is the Villain"), name: "John Proctor is the Villain", rank: 9, visits: [], images: getImages('john-proctor-is-the-villain') },
  { id: 9, slug: createSlug("Cabaret"), name: "Cabaret", rank: 10, visits: [], images: getImages('cabaret') },
  { id: 10, slug: createSlug("POTUS"), name: "POTUS", rank: 11, visits: [], images: getImages('potus') },
  { id: 11, slug: createSlug("Water for Elephants"), name: "Water for Elephants", rank: 12, visits: [], images: getImages('water-for-elephants') },
  { id: 12, slug: createSlug("In the Heights"), name: "In the Heights", rank: 13, visits: [], images: getImages('in-the-heights') },
  { id: 13, slug: createSlug("Death Becomes Her"), name: "Death Becomes Her", rank: 14, visits: [], images: getImages('death-becomes-her') },
  { id: 14, slug: createSlug("Operation Mincemeat"), name: "Operation Mincemeat", rank: 15, visits: [], images: getImages('operation-mincemeat') },
  { id: 15, slug: createSlug("The Great Gatsby"), name: "The Great Gatsby", rank: 16, visits: [], images: getImages('the-great-gatsby') },
  { id: 16, slug: createSlug("Some Like It Hot"), name: "Some Like It Hot", rank: 17, visits: [], images: getImages('some-like-it-hot') },
  { id: 17, slug: createSlug("Sunset Blvd"), name: "Sunset Blvd", rank: 18, visits: [], images: getImages('sunset-blvd') },
  { id: 18, slug: createSlug("Gypsy"), name: "Gypsy", rank: 19, visits: [], images: getImages('gypsy') },
  { id: 19, slug: createSlug("Maybe Happy Ending"), name: "Maybe Happy Ending", rank: 20, visits: [], images: getImages('maybe-happy-ending') },
  { id: 20, slug: createSlug("Two Strangers (Carry a Cake Across New York)"), name: "Two Strangers (Carry a Cake Across New York)", rank: 21, visits: [], images: getImages('two-strangers') },
  { id: 21, slug: createSlug("Merrily We Roll Along (pro shot)"), name: "Merrily We Roll Along (pro shot)", rank: 22, visits: [], images: getImages('merrily-we-roll-along') },
  { id: 22, slug: createSlug("Parade"), name: "Parade", rank: 23, visits: [], images: getImages('parade') },
  { id: 23, slug: createSlug("Suffs"), name: "Suffs", rank: 24, visits: [], images: getImages('suffs') },
  { id: 24, slug: createSlug("RENT"), name: "RENT", rank: 25, visits: [], images: getImages('rent') },
  { id: 25, slug: createSlug("Chess"), name: "Chess", rank: 26, visits: [], images: getImages('chess') },
  { id: 26, slug: createSlug("Shucked"), name: "Shucked", rank: 27, visits: [], images: getImages('shucked') },
  { id: 27, slug: createSlug("Fiddler on the Roof"), name: "Fiddler on the Roof", rank: 28, visits: [], images: getImages('fiddler-on-the-roof') },
  { id: 28, slug: createSlug("Life of Pi"), name: "Life of Pi", rank: 29, visits: [], images: getImages('life-of-pi') },
  { id: 29, slug: createSlug("Pride and Prejudice"), name: "Pride and Prejudice", rank: 30, visits: [], images: getImages('pride-and-prejudice') },
  { id: 30, slug: createSlug("& Juliet"), name: "& Juliet", rank: 31, visits: [], images: getImages('and-juliet') },
  { id: 31, slug: createSlug("Harry Potter and the Cursed Child"), name: "Harry Potter and the Cursed Child", rank: 32, visits: [], images: getImages('harry-potter-cursed-child') },
  { id: 32, slug: createSlug("Hell's Kitchen"), name: "Hell's Kitchen", rank: 33, visits: [], images: getImages('hells-kitchen') },
  { id: 33, slug: createSlug("Six"), name: "Six", rank: 34, visits: [], images: getImages('six') },
  { id: 34, slug: createSlug("Dear Evan Hansen"), name: "Dear Evan Hansen", rank: 35, visits: [], images: getImages('dear-evan-hansen') },
  { id: 35, slug: createSlug("The Notebook"), name: "The Notebook", rank: 36, visits: [], images: getImages('the-notebook') },
  { id: 36, slug: createSlug("The Rocky Horror Show"), name: "The Rocky Horror Show", rank: 37, visits: [], images: getImages('rocky-horror') },
  { id: 37, slug: createSlug("Book of Mormon"), name: "Book of Mormon", rank: 38, visits: [], images: getImages('book-of-mormon') },
  { id: 38, slug: createSlug("A Strange Loop"), name: "A Strange Loop", rank: 39, visits: [], images: getImages('a-strange-loop') },
  { id: 39, slug: createSlug("Company"), name: "Company", rank: 40, visits: [], images: getImages('company') },
  { id: 40, slug: createSlug("Oh, Mary!"), name: "Oh, Mary!", rank: 41, visits: [], images: getImages('oh-mary') },
  { id: 41, slug: createSlug("American Buffalo"), name: "American Buffalo", rank: 42, visits: [], images: getImages('american-buffalo') },
]
