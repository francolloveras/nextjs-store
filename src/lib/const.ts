export const STEAM_API_URL = 'https://store.steampowered.com/api' as const

export const STEAM_API_ENDPOINTS = {
  GAME_DETAILS: '/appdetails',
  FEATURED: '/featuredcategories'
} as const

export const STEAM_API_PARAMS = {
  GAME_ID: 'appids',
  LANGUAGE: 'l'
} as const

export const PATHS = {
  GAMES: '/games'
} as const

export const ESRB_RATINGS: Record<string, { image: string; title: string }> = {
  m: {
    image: '/esrb-ratings/m.svg',
    title: 'Mature 17+'
  },
  ao: {
    image: '/esrb-ratings/ao.svg',
    title: 'Adults Only 18+'
  },
  e: {
    image: '/esrb-ratings/e.svg',
    title: 'Everyone'
  },
  e10: {
    image: '/esrb-ratings/e10.svg',
    title: 'Everyone 10+'
  },
  rp: {
    image: '/esrb-ratings/rp.svg',
    title: 'Rating Pending'
  },
  t: {
    image: '/esrb-ratings/t.svg',
    title: 'Teen'
  }
} as const
