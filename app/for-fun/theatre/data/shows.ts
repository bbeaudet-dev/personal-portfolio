export interface TheatreShow {
  id: number; // Chronological order (0 = first show seen)
  name: string;
  rank: number;
  slug: string;
  theaters: TheaterInfo[];
  district?: 'Broadway' | 'Playhouse Square' | 'West End' | 'Broadway (Touring)' | 'Other';
}

export interface TheaterInfo {
  name: string;
  date: string; 
}

export const theatreShowList: TheatreShow[] = [
  { 
    id: 23,
    name: "Hadestown", 
    rank: 1, 
    slug: "hadestown",
    district: "Playhouse Square",
    theaters: [
      { name: "Connor Palace", date: "2024-12-15" }
    ]
  },
  { 
    id: 25,
    name: "Hadestown (2)", 
    rank: 1, 
    slug: "hadestown-2",
    district: "Broadway",
    theaters: [
      { name: "Walter Kerr Theatre", date: "2025-01-20" }
    ]
  },
  { 
    id: 34,
    name: "Hadestown (3)", 
    rank: 1, 
    slug: "hadestown-3",
    district: "Broadway",
    theaters: [
      { name: "Walter Kerr Theatre", date: "2025-07-06" }
    ]
  },
  { 
    id: 7,
    name: "Hamilton", 
    rank: 2, 
    slug: "hamilton",
    district: "Playhouse Square",
    theaters: [
      { name: "Keybank State Theatre", date: "2024-01-15" }
    ]
  },
  { 
    id: 10,
    name: "Come From Away", 
    rank: 3, 
    slug: "come-from-away",
    district: "Playhouse Square",
    theaters: [
      { name: "Connor Palace", date: "2024-08-13" }
    ]
  },
  { 
    id: 26,
    name: "Come From Away (2)", 
    rank: 3, 
    slug: "come-from-away-2",
    district: "Broadway (Touring)",
    theaters: [
      { name: "Detroit Fisher Theatre", date: "2025-02-15" }
    ]
  },
  { 
    id: 37,
    name: "John Proctor is the Villain", 
    rank: 4, 
    slug: "john-proctor-is-the-villain",
    district: "Broadway",
    theaters: [
      { name: "Booth Theatre", date: "2025-08-02" }
    ]
  },
  { 
    id: 33,
    name: "Gypsy", 
    rank: 5, 
    slug: "gypsy",
    district: "Broadway",
    theaters: [
      { name: "Majestic Theatre", date: "2025-06-28" }
    ]
  },
  { 
    id: 9,
    name: "Water for Elephants", 
    rank: 6, 
    slug: "water-for-elephants",
    district: "Broadway",
    theaters: [
      { name: "Imperial Theatre", date: "2024-08-03" }
    ]
  },
  { 
    id: 38,
    name: "Death Becomes Her", 
    rank: 7, 
    slug: "death-becomes-her",
    district: "Broadway",
    theaters: [
      { name: "Lunt-Fontanne Theatre", date: "2025-08-03" }
    ]
  },
  { 
    id: 24,
    name: "Sunset Blvd.", 
    rank: 8, 
    slug: "sunset-blvd",
    district: "Broadway",
    theaters: [
      { name: "St. James Theatre", date: "2024-12-20" }
    ]
  },
  { 
    id: 12,
    name: "The Outsiders", 
    rank: 9, 
    slug: "the-outsiders",
    district: "Broadway",
    theaters: [
      { name: "Bernard B. Jacobs Theatre", date: "2024-09-19" }
    ]
  },
  { 
    id: 31,
    name: "Floyd Collins", 
    rank: 10, 
    slug: "floyd-collins",
    district: "Broadway",
    theaters: [
      { name: "Vivian Beaumont Theatre", date: "2025-06-20" }
    ]
  },
  { 
    id: 4,
    name: "Moulin Rouge", 
    rank: 11, 
    slug: "moulin-rouge",
    district: "Broadway",
    theaters: [
      { name: "Al Hirschfeld Theatre", date: "2023-01-29" }
    ]
  },
  { 
    id: 3,
    name: "Wicked", 
    rank: 12, 
    slug: "wicked",
    district: "Broadway",
    theaters: [
      { name: "Gershwin Theatre", date: "2023-01-28" }
    ]
  },
  { 
    id: 1,
    name: "POTUS", 
    rank: 13, 
    slug: "potus",
    district: "Broadway",
    theaters: [
      { name: "Shubert Theatre", date: "2022-05-01" }
    ]
  },
  { 
    id: 8,
    name: "Job", 
    rank: 14, 
    slug: "job",
    district: "Broadway",
    theaters: [
      { name: "Hayes Theatre", date: "2024-08-02" }
    ]
  },
  { 
    id: 13,
    name: "Les Misérables", 
    rank: 15, 
    slug: "les-miserables",
    district: "Playhouse Square",
    theaters: [
      { name: "Connor Palace", date: "2024-09-19" }
    ]
  },
  { 
    id: 32,
    name: "Call Me Izzy", 
    rank: 16, 
    slug: "call-me-izzy",
    district: "Broadway",
    theaters: [
      { name: "Studio 54", date: "2025-06-22" }
    ]
  },
  { 
    id: 18,
    name: "Some Like It Hot", 
    rank: 17, 
    slug: "some-like-it-hot",
    district: "Playhouse Square",
    theaters: [
      { name: "Connor Palace", date: "2024-11-10" }
    ]
  },
  { 
    id: 21,
    name: "Hell's Kitchen", 
    rank: 18, 
    slug: "hells-kitchen",
    district: "Broadway",
    theaters: [
      { name: "Shubert Theatre", date: "2024-12-05" }
    ]
  },
  { 
    id: 20,
    name: "Parade", 
    rank: 19, 
    slug: "parade",
    district: "Playhouse Square",
    theaters: [
      { name: "Connor Palace", date: "2024-11-20" }
    ]
  },
  { 
    id: 29,
    name: "The Last 5 Years", 
    rank: 20, 
    slug: "the-last-5-years",
    district: "Broadway",
    theaters: [
      { name: "Hudson Theatre", date: "2025-06-01" }
    ]
  },
  { 
    id: 16,
    name: "The Great Gatsby", 
    rank: 21, 
    slug: "the-great-gatsby",
    district: "Broadway",
    theaters: [
      { name: "Broadway Theatre", date: "2024-10-15" }
    ]
  },
  { 
    id: 28,
    name: "Fiddler on the Roof", 
    rank: 22, 
    slug: "fiddler-on-the-roof",
    district: "Playhouse Square",
    theaters: [
      { name: "Allen Theatre", date: "2025-05-13" }
    ]
  },
  { 
    id: 19,
    name: "Shucked", 
    rank: 23, 
    slug: "shucked",
    district: "Playhouse Square",
    theaters: [
      { name: "Connor Palace", date: "2024-11-15" }
    ]
  },
  { 
    id: 22,
    name: "Life of Pi", 
    rank: 24, 
    slug: "life-of-pi",
    district: "Playhouse Square",
    theaters: [
      { name: "Connor Palace", date: "2024-12-10" }
    ]
  },
  { 
    id: 17,
    name: "In the Heights", 
    rank: 25, 
    slug: "in-the-heights",
    district: "Playhouse Square",
    theaters: [
      { name: "Connor Palace", date: "2024-10-20" }
    ]
  },
  { 
    id: 14,
    name: "Pride & Prejudice", 
    rank: 26, 
    slug: "pride-prejudice",
    district: "Playhouse Square",
    theaters: [
      { name: "Connor Palace", date: "2024-09-25" }
    ]
  },
  { 
    id: 30,
    name: "Dead Outlaw", 
    rank: 27, 
    slug: "dead-outlaw",
    district: "Broadway",
    theaters: [
      { name: "Audible Theatre", date: "2025-06-15" }
    ]
  },
  { 
    id: 5,
    name: "Dear Evan Hansen", 
    rank: 28, 
    slug: "dear-evan-hansen",
    district: "Playhouse Square",
    theaters: [
      { name: "Connor Palace", date: "2023-05-17" }
    ]
  },
  { 
    id: 27,
    name: "& Juliet", 
    rank: 29, 
    slug: "and-juliet",
    district: "Playhouse Square",
    theaters: [
      { name: "Connor Palace", date: "2025-03-06" }
    ]
  },
  { 
    id: 15,
    name: "Harry Potter and the Cursed Child", 
    rank: 30, 
    slug: "harry-potter-cursed-child",
    district: "Broadway",
    theaters: [
      { name: "Lyric Theatre", date: "2024-09-25" }
    ]
  },
  { 
    id: 6,
    name: "A Strange Loop", 
    rank: 31, 
    slug: "a-strange-loop",
    district: "Broadway",
    theaters: [
      { name: "Lyceum Theatre", date: "2023-08-20" } // FIXME: Check this date
    ]
  },
  { 
    id: 2,
    name: "Book of Mormon", 
    rank: 32, 
    slug: "book-of-mormon",
    district: "Broadway",
    theaters: [
      { name: "Eugene O'Neill Theatre", date: "2023-01-27" }
    ]
  },
  { 
    id: 36,
    name: "Lord Nil: Seven Deadly Sins", 
    rank: 33, 
    slug: "lord-nil-seven-deadly-sins",
    district: "Broadway",
    theaters: [
      { name: "Stage 42", date: "2025-08-01" }
    ]
  },
  { 
    id: 35,
    name: "Stranger Things: The First Shadow", 
    rank: 34, 
    slug: "stranger-things-first-shadow",
    district: "Broadway",
    theaters: [
      { name: "Marquis Theatre", date: "2025-07-18" }
    ]
  },
  { 
    id: 0,
    name: "Company", 
    rank: 35, 
    slug: "company",
    district: "Broadway",
    theaters: [
      { name: "Bernard B. Jacobs Theatre", date: "2022-04-30" }
    ]
  },
  { 
    id: 11,
    name: "Six", 
    rank: 36, 
    slug: "six",
    district: "Playhouse Square",
    theaters: [
      { name: "Connor Palace", date: "2024-09-05" }
    ]
  }
]; 