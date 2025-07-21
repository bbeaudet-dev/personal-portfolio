export interface BroadwayShow {
  name: string;
  rank: number;
  slug: string;
  theaters: TheaterInfo[];
}

export interface TheaterInfo {
  name: string;
  date?: string; // Optional since some dates weren't provided
  location?: string; // For non-Broadway venues like Detroit
}

export const broadwayShowList: BroadwayShow[] = [
  { 
    name: "Hadestown", 
    rank: 1, 
    slug: "hadestown",
    theaters: [
      { name: "Connor Palace", date: "2024-12-15" }
    ]
  },
  { 
    name: "Hadestown (2)", 
    rank: 1, 
    slug: "hadestown-2",
    theaters: [
      { name: "Walter Kerr Theatre", date: "2025-01-20" }
    ]
  },
  { 
    name: "Hadestown (3)", 
    rank: 1, 
    slug: "hadestown-3",
    theaters: [
      { name: "Walter Kerr Theatre", date: "2025-07-06" }
    ]
  },
  { 
    name: "Hamilton", 
    rank: 2, 
    slug: "hamilton",
    theaters: [
      { name: "Keybank State Theatre", date: "2024-01-15" }
    ]
  },
  { 
    name: "Come From Away", 
    rank: 3, 
    slug: "come-from-away",
    theaters: [
      { name: "Connor Palace", date: "2024-08-13" }
    ]
  },
  { 
    name: "Come From Away (2)", 
    rank: 3, 
    slug: "come-from-away-2",
    theaters: [
      { name: "Detroit Fisher Theatre", date: "2025-02-15", location: "Detroit" }
    ]
  },
  { 
    name: "Gypsy", 
    rank: 4, 
    slug: "gypsy",
    theaters: [
      { name: "Majestic Theatre", date: "2025-06-28" }
    ]
  },
  { 
    name: "Water for Elephants", 
    rank: 5, 
    slug: "water-for-elephants",
    theaters: [
      { name: "Imperial Theatre", date: "2024-08-03" }
    ]
  },
  { 
    name: "Sunset Blvd.", 
    rank: 6, 
    slug: "sunset-blvd",
    theaters: [
      { name: "St. James Theatre", date: "2024-12-20" }
    ]
  },
  { 
    name: "The Outsiders", 
    rank: 7, 
    slug: "the-outsiders",
    theaters: [
      { name: "Bernard B. Jacobs Theatre", date: "2024-09-19" }
    ]
  },
  { 
    name: "Floyd Collins", 
    rank: 8, 
    slug: "floyd-collins",
    theaters: [
      { name: "Vivian Beaumont Theatre", date: "2025-06-20" }
    ]
  },
  { 
    name: "Moulin Rouge", 
    rank: 9, 
    slug: "moulin-rouge",
    theaters: [
      { name: "Al Hirschfeld Theatre", date: "2023-01-29" }
    ]
  },
  { 
    name: "Wicked", 
    rank: 10, 
    slug: "wicked",
    theaters: [
      { name: "Gershwin Theatre", date: "2023-01-28" }
    ]
  },
  { 
    name: "POTUS", 
    rank: 11, 
    slug: "potus",
    theaters: [
      { name: "Shubert Theatre", date: "2024-10-25" }
    ]
  },
  { 
    name: "Call Me Izzy", 
    rank: 12, 
    slug: "call-me-izzy",
    theaters: [
      { name: "Studio 54", date: "2025-06-22" }
    ]
  },
  { 
    name: "Les Misérables", 
    rank: 13, 
    slug: "les-miserables",
    theaters: [
      { name: "Connor Palace", date: "2024-09-19" }
    ]
  },
  { 
    name: "Job", 
    rank: 14, 
    slug: "job",
    theaters: [
      { name: "Hayes Theatre", date: "2024-08-02" }
    ]
  },
  { 
    name: "Some Like It Hot", 
    rank: 15, 
    slug: "some-like-it-hot",
    theaters: [
      { name: "Connor Palace", date: "2024-11-10" }
    ]
  },
  { 
    name: "Hell's Kitchen", 
    rank: 16, 
    slug: "hells-kitchen",
    theaters: [
      { name: "Shubert Theatre", date: "2024-12-05" }
    ]
  },
  { 
    name: "Parade", 
    rank: 17, 
    slug: "parade",
    theaters: [
      { name: "Connor Palace", date: "2024-11-20" }
    ]
  },
  { 
    name: "The Last 5 Years", 
    rank: 18, 
    slug: "the-last-5-years",
    theaters: [
      { name: "Hudson Theatre", date: "2025-06-01" }
    ]
  },
  { 
    name: "The Great Gatsby", 
    rank: 19, 
    slug: "the-great-gatsby",
    theaters: [
      { name: "Broadway Theatre", date: "2024-10-15" }
    ]
  },
  { 
    name: "Fiddler on the Roof", 
    rank: 20, 
    slug: "fiddler-on-the-roof",
    theaters: [
      { name: "Allen Theatre", date: "2025-05-13" }
    ]
  },
  { 
    name: "Shucked", 
    rank: 21, 
    slug: "shucked",
    theaters: [
      { name: "Connor Palace", date: "2025-05-06" }
    ]
  },
  { 
    name: "Life of Pi", 
    rank: 22, 
    slug: "life-of-pi",
    theaters: [
      { name: "Connor Palace", date: "2024-11-30" }
    ]
  },
  { 
    name: "In the Heights", 
    rank: 23, 
    slug: "in-the-heights",
    theaters: [
      { name: "Allen Theatre", date: "2024-05-15" }
    ]
  },
  { 
    name: "Pride & Prejudice", 
    rank: 24, 
    slug: "pride-prejudice",
    theaters: [
      { name: "Allen Theatre", date: "2024-09-17" }
    ]
  },
  { 
    name: "Dead Outlaw", 
    rank: 25, 
    slug: "dead-outlaw",
    theaters: [
      { name: "Longacre Theatre", date: "2025-06-15" }
    ]
  },
  { 
    name: "Dear Evan Hansen", 
    rank: 26, 
    slug: "dear-evan-hansen",
    theaters: [
      { name: "Connor Palace", date: "2024-10-10" }
    ]
  },
  { 
    name: "& Juliet", 
    rank: 27, 
    slug: "and-juliet",
    theaters: [
      { name: "Connor Palace", date: "2025-03-06" }
    ]
  },
  { 
    name: "Harry Potter and the Cursed Child", 
    rank: 28, 
    slug: "harry-potter-cursed-child",
    theaters: [
      { name: "Lyric Theatre", date: "2024-09-25" }
    ]
  },
  { 
    name: "A Strange Loop", 
    rank: 29, 
    slug: "a-strange-loop",
    theaters: [
      { name: "Lyceum Theatre", date: "2024-08-20" }
    ]
  },
  { 
    name: "Book of Mormon", 
    rank: 30, 
    slug: "book-of-mormon",
    theaters: [
      { name: "Eugene O'Neill Theatre", date: "2023-01-27" }
    ]
  },
  { 
    name: "Stranger Things: The First Shadow", 
    rank: 31, 
    slug: "stranger-things-first-shadow",
    theaters: [
      { name: "Marquis Theatre", date: "2025-07-18" }
    ]
  },
  { 
    name: "Company", 
    rank: 32, 
    slug: "company",
    theaters: [
      { name: "Bernard B. Jacobs Theatre", date: "2024-12-10" }
    ]
  },
  { 
    name: "Six", 
    rank: 33, 
    slug: "six",
    theaters: [
      { name: "Connor Palace", date: "2024-09-05" }
    ]
  }
];

// Helper functions
export const getBaseShowName = (showName: string): string => {
  // Remove viewing number from show name (e.g., "Hadestown (2)" -> "Hadestown")
  // But keep original names like "Hadestown" unchanged
  return showName.replace(/\s*\(\d+\)$/, '');
};

export const getShowRank = (showName: string): number => {
  const baseShowName = getBaseShowName(showName);
  const show = broadwayShowList.find(s => getBaseShowName(s.name) === baseShowName);
  return show ? show.rank : 0;
};

export const getShowBySlug = (slug: string): BroadwayShow | undefined => {
  return broadwayShowList.find(s => s.slug === slug);
};

export const getTotalShows = (): number => {
  // Count unique shows, not individual viewings
  const uniqueShows = new Set(broadwayShowList.map(s => getBaseShowName(s.name)));
  return uniqueShows.size;
};

export const getShowTheaters = (showName: string): TheaterInfo[] => {
  const baseShowName = getBaseShowName(showName);
  const shows = broadwayShowList.filter(s => getBaseShowName(s.name) === baseShowName);
  return shows.flatMap(s => s.theaters);
};

export const getShowDates = (showName: string): string[] => {
  const theaters = getShowTheaters(showName);
  return theaters.map(t => t.date).filter(Boolean) as string[];
};

export const formatShowings = (theaters: TheaterInfo[]): string => {
  if (theaters.length === 1) {
    const theater = theaters[0];
    const dateStr = theater.date ? ` - ${theater.date}` : '';
    return `${theater.name}${theater.location ? ` (${theater.location})` : ''}${dateStr}`;
  }
  
  return theaters.map(t => {
    const dateStr = t.date ? ` - ${t.date}` : '';
    return `${t.name}${t.location ? ` (${t.location})` : ''}${dateStr}`;
  }).join(', ');
};

export const getOrdinalSuffix = (num: number): string => {
  const j = num % 10;
  const k = num % 100;
  if (j === 1 && k !== 11) {
    return "st";
  }
  if (j === 2 && k !== 12) {
    return "nd";
  }
  if (j === 3 && k !== 13) {
    return "rd";
  }
  return "th";
};

export const formatRank = (rank: number, total: number): string => {
  return `${rank}${getOrdinalSuffix(rank)} of ${total}`;
}; 