// Show data utility functions
import { theatreShowList, TheatreShow } from './data/shows'

export const getBaseShowName = (showName: string): string => {
  // Remove viewing number from show name (e.g., "Hadestown (2)" -> "Hadestown")
  // But keep original names like "Hadestown" unchanged
  return showName.replace(/\s*\(\d+\)$/, '');
};

export const getShowRank = (showName: string): number => {
  const baseShowName = getBaseShowName(showName);
  const show = theatreShowList.find(s => getBaseShowName(s.name) === baseShowName);
  return show ? show.rank : 0;
};

export const getShowBySlug = (slug: string): TheatreShow | undefined => {
  return theatreShowList.find(s => s.slug === slug);
};

export const getTotalShows = (): number => {
  // Count unique shows, not individual viewings
  const uniqueShows = new Set(theatreShowList.map(s => getBaseShowName(s.name)));
  return uniqueShows.size;
};

export const getShowTheaters = (showName: string) => {
  const baseShowName = getBaseShowName(showName);
  const shows = theatreShowList.filter(s => getBaseShowName(s.name) === baseShowName);
  return shows.flatMap(s => s.theaters);
};

export const getShowDates = (showName: string): string[] => {
  const theaters = getShowTheaters(showName);
  return theaters.map(t => t.date).filter(Boolean) as string[];
};

export const formatShowings = (theaters: any[]): string => {
  if (theaters.length === 1) {
    const theater = theaters[0];
    const dateStr = theater.date ? ` - ${theater.date}` : '';
    return `${theater.name}${theater.location ? ` (${theater.location})` : ''}${dateStr}`;
  }
  return theaters.map(theater => {
    const dateStr = theater.date ? ` - ${theater.date}` : '';
    return `${theater.name}${theater.location ? ` (${theater.location})` : ''}${dateStr}`;
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

export const getShowDistrict = (showName: string): string => {
  const show = theatreShowList.find(s => s.name === showName);
  return show?.district || 'Broadway';
}; 