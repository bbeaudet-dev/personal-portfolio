export interface GameData {
  slug: string
  title: string
  size: number
  periods: ('childhood' | 'teenager' | 'adult')[]
  images: string[]
  blogPosts?: Array<{
    title: string
    slug: string
  }>
  portfolioProjects?: Array<{
    title: string
    slug: string
  }>
  series?: Array<{
    title: string
  }>
  other?: Array<{
    title: string
    url: string
  }>
}

// Quick reference for all game sizes (1-20 scale, where 20 is largest)
export const gameSizes: Record<string, number> = {
  'outer-wilds': 10,
  'hollow-knight': 10,
  'celeste': 9,
  'undertale': 9,
  'subnautica': 8,
  'pokemon-colosseum': 8,
  'balatro': 8,
  'minecraft': 8,
  'horizon-zero-dawn': 8,
  'opus-magnum': 7,
  'faster-than-light': 7,
  'pokemon-emerald': 7,
  'firewatch': 7,
  'skyrim': 7,
  'smash-bros': 7,
  'zelda-series': 6,
  'pokemon-mystery-dungeon': 6,
  'a-way-out': 6,
  'factorio': 6,
  'plate-up': 6,
  'spyro-series': 6,
  'pokemon-rom-hacks': 5,
  'luigis-mansion': 5,
  'kingdom-hearts': 5,
  'mario-baseball': 5,
  'mario-luigi-series': 5,
  'menagerie': 5,
  'sitting-ducks': 5,
  'katamari': 5,
  'pokemon-platinum': 5,
  'keep-talking-and-nobody-explodes': 4,
  'animal-crossing': 4,
  'stanley-parable': 4,
  'pokemon-heartgold': 4,
  'kirby-air-ride': 4,
  'mario-strikers': 4,
  'state-of-decay': 3,
  'pokemon-firered': 3,
  'papers-please': 3,
  'inside': 3,
  'gta-v': 3,
  'anatomy': 3,
  'castle-crashers': 3,
  'uncharted-4': 3,
  'pokemon-black-white': 2,
  'iron-lung': 2,
  'stardew-valley': 2,
  'call-of-duty': 2,
  'mario-golf': 1
}

export const gamesData: GameData[] = [
  { slug: 'balatro', title: 'Balatro', images: ['/images-games/balatro.avif'], size: gameSizes['balatro'], periods: ['adult'], blogPosts: [{ title: 'The Completionist', slug: 'completionist' }], portfolioProjects: [{ title: 'Balatro Sticker Tracker', slug: 'balatro-sticker-tracker' }] },
  { slug: 'outer-wilds', title: 'Outer Wilds', images: ['/images-games/outer-wilds2.webp'], size: gameSizes['outer-wilds'], periods: ['adult'] },
  { slug: 'undertale', title: 'Undertale', images: ['/images-games/undertale3.jpg'], size: gameSizes['undertale'], periods: ['adult'] },
  { slug: 'hollow-knight', title: 'Hollow Knight', images: ['/images-games/hollow-knight.jpg'], size: gameSizes['hollow-knight'], periods: ['adult'] },
  { slug: 'inside', title: 'Inside', images: ['/images-games/inside.avif'], size: gameSizes['inside'], periods: ['adult'] },
  { slug: 'papers-please', title: 'Papers, Please', images: ['/images-games/papers-please.jpg'], size: gameSizes['papers-please'], periods: ['adult'] },
  { slug: 'iron-lung', title: 'Iron Lung', images: ['/images-games/iron-lung.avif'], size: gameSizes['iron-lung'], periods: ['adult'] },
  { slug: 'menagerie', title: 'Menagerie', images: ['/images-games/presentable-liberty.jpg', '/images-games/menagerie-archive.jpg', '/images-games/exoptable-money.webp'], size: gameSizes['menagerie'], periods: ['adult'], series: [{ title: 'Presentable Liberty' }, { title: 'Exoptable Money' }, { title: 'Archive' }], other: [{ title: 'This Game Will CHANGE YOUR LIFE - Markiplier', url: 'https://www.youtube.com/watch?v=jZTQPTQovZA' }] },
  { slug: 'state-of-decay', title: 'State of Decay', images: ['/images-games/state-of-decay.jpg'], size: gameSizes['state-of-decay'], periods: ['teenager'] },
  { slug: 'castle-crashers', title: 'Castle Crashers', images: ['/images-games/castle-crashers.avif'], size: gameSizes['castle-crashers'], periods: ['teenager'] },
  { slug: 'minecraft', title: 'Minecraft', images: ['/images-games/minecraft.webp'], size: gameSizes['minecraft'], periods: ['teenager', 'childhood'] },
  { slug: 'skyrim', title: 'The Elder Scrolls V: Skyrim', images: ['/images-games/skyrim.jpg'], size: gameSizes['skyrim'], periods: ['teenager'], blogPosts: [{ title: 'The Completionist', slug: 'completionist' }] },
  { slug: 'pokemon-rom-hacks', title: 'Pokemon ROM Hacks', images: ['/images-games/unbound.webp', '/images-games/uranium.webp', '/images-games/radical-red.jpg'], size: gameSizes['pokemon-rom-hacks'], periods: ['teenager', 'adult'], other: [{ title: 'Pokemon Unbound', url: 'https://www.pokecommunity.com/showthread.php?t=425151' }, { title: 'Pokemon Uranium', url: 'https://pokemonuranium.co/' }, { title: 'Pokemon Light Platinum', url: 'https://www.pokecommunity.com/showthread.php?t=250570' }, { title: 'Pokemon Radical Red', url: 'https://www.pokecommunity.com/showthread.php?t=425151' }, { title: 'Pokemon Blaze Black 2 Redux', url: 'https://www.pokecommunity.com/showthread.php?t=425151' }] },
  { slug: 'pokemon-emerald', title: 'Pokemon Emerald/Ruby/Sapphire', images: ['/images-games/emerald.jpg', '/images-games/pokemon-ruby.jpg', '/images-games/pokemon-sapphire.jpg'], size: gameSizes['pokemon-emerald'], periods: ['childhood'], series: [{ title: 'Pokemon Emerald' }, { title: 'Pokemon Ruby' }, { title: 'Pokemon Sapphire' }] },
  { slug: 'pokemon-platinum', title: 'Pokemon Platinum/Diamond/Pearl', images: ['/images-games/pokemon-platinum.png', '/images-games/pokemon-diamond.jpg', '/images-games/pokemon-pearl.jpg'], size: gameSizes['pokemon-platinum'], periods: ['childhood'] },
  { slug: 'pokemon-colosseum', title: 'Pokemon Colosseum/XD Gale of Darkness', images: ['/images-games/colosseum.jpeg', '/images-games/gale-of-darkness.jpg'], size: gameSizes['pokemon-colosseum'], periods: ['childhood'] },
  { slug: 'pokemon-firered', title: 'Pokemon FireRed/LeafGreen', images: ['/images-games/pokemon-firered.jpg', '/images-games/pokemon-leafgreen.jpg'], size: gameSizes['pokemon-firered'], periods: ['childhood'] },
  { slug: 'pokemon-heartgold', title: 'Pokemon HeartGold/SoulSilver', images: ['/images-games/pokemon-soulsilver.jpg', '/images-games/pokemon-heartgold.jpg'], size: gameSizes['pokemon-heartgold'], periods: ['childhood'] },
  { slug: 'pokemon-mystery-dungeon', title: 'Pokemon Mystery Dungeon', images: ['/images-games/pokemon-mystery-dungeon-blue.avif', '/images-games/pokemon-mystery-dungeon-sky.jpg'], size: gameSizes['pokemon-mystery-dungeon'], periods: ['childhood'] },
  { slug: 'pokemon-black-white', title: 'Pokemon Black/White', images: ['/images-games/pokemon-black.avif', '/images-games/pokemon-white.avif'], size: gameSizes['pokemon-black-white'], periods: ['childhood'] },
  { slug: 'spyro-series', title: 'Spyro the Dragon Series', images: ['/images-games/spyro-reignited-trilogy.jpeg'], size: gameSizes['spyro-trilogy'], periods: ['childhood'], blogPosts: [{ title: 'The Completionist', slug: 'completionist' }] },
  { slug: 'smash-bros', title: 'Super Smash Bros Series', images: ['/images-games/smash-melee.jpg', '/images-games/smash-brawl.jpg', '/images-games/smash-wiiu.jpeg', '/images-games/smash-bros-ultimate.avif'], size: gameSizes['smash-bros'], periods: ['childhood'] },
  { slug: 'luigis-mansion', title: 'Luigi\'s Mansion', images: ['/images-games/luigis-mansion.jpg'], size: gameSizes['luigis-mansion'], periods: ['childhood'] },
  { slug: 'anatomy', title: 'Anatomy', images: ['/images-games/anatomy.jpg'], size: gameSizes['anatomy'], periods: ['adult'] },
  { slug: 'stardew-valley', title: 'Stardew Valley', images: ['/images-games/stardew-valley.jpeg'], size: gameSizes['stardew-valley'], periods: ['adult'] },
  { slug: 'animal-crossing', title: 'Animal Crossing Series', images: ['/images-games/animal-crossing-wild-world.png', '/images-games/animal-crossing-new-horizons.jpg'], size: gameSizes['animal-crossing'], periods: ['childhood'] },
  { slug: 'kingdom-hearts', title: 'Kingdom Hearts Series', images: ['/images-games/kingdom-hearts.jpeg'], size: gameSizes['kingdom-hearts'], periods: ['childhood'] },
  { slug: 'katamari', title: 'Katamari Damacy', images: ['/images-games/we-love-katamari.jpg'], size: gameSizes['katamari'], periods: ['childhood'] },
  { slug: 'sitting-ducks', title: 'Sitting Ducks', images: ['/images-games/sitting-ducks.jpg'], size: gameSizes['sitting-ducks'], periods: ['childhood'] },
  { slug: 'firewatch', title: 'Firewatch', images: ['/images-games/firewatch3.jpg'], size: gameSizes['firewatch'], periods: ['adult'] },
  { slug: 'factorio', title: 'Factorio', images: ['/images-games/factorio.png'], size: gameSizes['factorio'], periods: ['adult'] },
  { slug: 'faster-than-light', title: 'Faster Than Light', images: ['/images-games/ftl2.jpeg'], size: gameSizes['faster-than-light'], periods: ['adult'] },
  { slug: 'opus-magnum', title: 'Opus Magnum', images: ['/images-games/opus-magnum3.jpg'], size: gameSizes['opus-magnum'], periods: ['adult'] },
  { slug: 'subnautica', title: 'Subnautica', images: ['/images-games/subnautica.jpg', '/images-games/subnautica-below-zero.avif'], size: gameSizes['subnautica'], periods: ['adult'], series: [{ title: 'Subnautica' }, { title: 'Subnautica: Below Zero' }] },
  { slug: 'celeste', title: 'Celeste', images: ['/images-games/celeste.avif'], size: gameSizes['celeste'], periods: ['adult'] },
  { slug: 'keep-talking-and-nobody-explodes', title: 'Keep Talking and Nobody Explodes', images: ['/images-games/keep-talking2.jpg'], size: gameSizes['keep-talking-and-nobody-explodes'], periods: ['adult'] },
  { slug: 'horizon-zero-dawn', title: 'Horizon Zero Dawn', images: ['/images-games/horizon-zero-dawn.jpg'], size: gameSizes['horizon-zero-dawn'], periods: ['adult'] },
  { slug: 'plate-up', title: 'Plate Up!', images: ['/images-games/plate-up.png'], size: gameSizes['plate-up'], periods: ['adult'] },
  { slug: 'a-way-out', title: 'A Way Out', images: ['/images-games/a-way-out.jpg'], size: gameSizes['a-way-out'], periods: ['adult'] },
  { slug: 'uncharted-4', title: 'Uncharted 4: A Thief\'s End', images: ['/images-games/uncharted-4.webp'], size: gameSizes['uncharted-4'], periods: ['teenager'] },
  { slug: 'call-of-duty', title: 'Call of Duty Series', images: ['/images-games/cod-mw3.webp', '/images-games/cod-black-ops.png', '/images-games/cod-ww2.jpg'], size: gameSizes['call-of-duty'], periods: ['teenager'], series: [{ title: 'Call of Duty: Modern Warfare 3' }, { title: 'Call of Duty: Black Ops' }, { title: 'Call of Duty: Black Ops 2' }, { title: 'Call of Duty: WWII' }] },
  { slug: 'gta-v', title: 'Grand Theft Auto V', images: ['/images-games/gta-v.png'], size: gameSizes['gta-v'], periods: ['teenager'] },
  { slug: 'zelda-series', title: 'The Legend of Zelda Series', images: ['/images-games/zelda-twilight-princess.jpg', '/images-games/zelda-phantom-hourglass.jpg', '/images-games/zelda-spirit-tracks.jpg'], size: gameSizes['zelda-series'], periods: ['childhood', 'teenager'], series: [{ title: 'The Legend of Zelda: Twilight Princess' }, { title: 'The Legend of Zelda: Phantom Hourglass' }, { title: 'The Legend of Zelda: Spirit Tracks' }] },
  { slug: 'crash-bandicoot', title: 'Crash Bandicoot Series', images: ['/images-games/crash-team-racing.png', '/images-games/crash-tag-team-racing.jpg', '/images-games/crash-bash.jpg'], size: gameSizes['crash-bandicoot'], periods: ['childhood'], series: [{ title: 'Crash Team Racing' }, { title: 'Crash Tag Team Racing' }, { title: 'Crash Bash' }] },
  { slug: 'mario-baseball', title: 'Mario Baseball Series', images: ['/images-games/super-sluggers.jpg', '/images-games/mario-superstar-baseball.jpg'], size: gameSizes['mario-baseball'], periods: ['childhood'], series: [{ title: 'Super Mario Sluggers' }, { title: 'Super Mario Baseball' }] },
  { slug: 'mario-strikers', title: 'Mario Strikers Series', images: ['/images-games/super-mario-strikers.jpg', '/images-games/mario-strikers-charged.jpg'], size: gameSizes['mario-strikers'], periods: ['childhood'], series: [{ title: 'Super Mario Strikers' }, { title: 'Super Mario Strikers Charged' }] },
  { slug: 'mario-golf', title: 'Mario Golf Series', images: ['/images-games/mario-golf-toadstool-tour.webp'], size: gameSizes['mario-golf'], periods: ['childhood'], series: [{ title: 'Mario Golf: Toadstool Tour' }] },
  { slug: 'mario-luigi-series', title: 'Mario & Luigi Series', images: ['/images-games/superstar-saga.jpg', '/images-games/partners-in-time.jpg', '/images-games/bowsers-inside-story.png'], size: gameSizes['mario-luigi-series'], periods: ['childhood'], series: [{ title: 'Mario & Luigi: Superstar Saga' }, { title: 'Mario & Luigi: Partners in Time' }, { title: 'Mario & Luigi: Bowser\'s Inside Story' }] },
  { slug: 'kirby-air-ride', title: 'Kirby Air Ride', images: ['/images-games/kirby-air-ride.jpg'], size: gameSizes['kirby-air-ride'], periods: ['childhood'] },
  { slug: 'stanley-parable', title: 'The Stanley Parable', images: ['/images-games/stanley-parable.jpg'], size: gameSizes['stanley-parable'], periods: ['adult'] }
] 