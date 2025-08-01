export const metadata = {
  title: "Games & Puzzles",
  description: 'My favorite games, achievements, and gaming experiences.',
}

export default function GamesPage() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Games & Puzzles</h1>
      
      <div className="mb-8">
        <p className="text-neutral-600 dark:text-neutral-400 mb-4">
          Welcome to my gaming corner! Here you'll find my favorite games, memorable achievements, 
          and stories from my gaming adventures. From roguelike deck builders to atmospheric indie games, 
          I love exploring different genres and sharing what makes each game special.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="font-semibold text-xl mb-4">Featured Games</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder for game cards */}
          <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
            <h3 className="font-medium mb-2">Balatro</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
              A roguelike deck builder that reimagines poker. My current obsession with incredible depth and replayability.
            </p>
            <div className="flex gap-2">
              <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                Roguelike
              </span>
              <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">
                Deck Builder
              </span>
            </div>
          </div>

          <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
            <h3 className="font-medium mb-2">Hollow Knight</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
              A beautiful metroidvania with challenging combat and an atmospheric world to explore.
            </p>
            <div className="flex gap-2">
              <span className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded">
                Metroidvania
              </span>
              <span className="text-xs bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded">
                Indie
              </span>
            </div>
          </div>

          <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
            <h3 className="font-medium mb-2">Outer Wilds</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
              A space exploration mystery that rewards curiosity and discovery. One of the most unique gaming experiences.
            </p>
            <div className="flex gap-2">
              <span className="text-xs bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded">
                Exploration
              </span>
              <span className="text-xs bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded">
                Mystery
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="font-semibold text-xl mb-4">Coming Soon</h2>
        <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
          <li>• Individual game pages with achievements and stories</li>
          <li>• Screenshots and media galleries</li>
          <li>• Achievement tracking and statistics</li>
          <li>• Gaming recommendations and reviews</li>
        </ul>
      </div>
    </section>
  )
} 