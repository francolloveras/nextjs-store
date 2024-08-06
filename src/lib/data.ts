/* eslint-disable no-console */
import { STEAM_API_ENDPOINTS, STEAM_API_PARAMS, STEAM_API_URL } from '@/lib/const'
import mockFeatures from '@/lib/features-mock.json'
import mockGames from '@/lib/games-mock.json'
import { SteamFeaturesResponse, SteamGameDetailsResponse } from '@/lib/type'

export const steamGameIds = [
  730, 570, 578080, 440, 534380, 72850, 252490, 1091500, 851850, 292030, 1085660, 105600, 521890,
  219740, 1222670, 230410, 1065310, 1174180, 312530, 108600
  // 289070, 252330, 413150, 107410, 12210, 4000, 304930, 219640, 238960, 311210, 400, 381210, 105450
  // 552520, 292030, 570940, 601510, 550, 230410, 236850, 8870, 601510, 220, 346110, 239140, 582010
  // 500, 221100, 224260, 620, 1085660, 72850, 359550, 230270, 242760, 730, 10, 433850, 218620, 359550,
  // 219740, 8870, 242760, 218620, 255710, 264710, 220, 248820, 32470, 227300, 286160, 285900, 221380,
  // 252490, 200210, 236390, 219640, 107410, 252330, 570940, 431960, 377160, 49520, 242050, 346110,
]

export const getAllGames = async () => {
  if (process.env.NODE_ENV !== 'production') {
    return mockGames
  }

  return await Promise.all(steamGameIds.map((gameId) => getGameById(gameId.toString())))
}

export const getGameById = async (gameId: string) => {
  const queryParams = new URLSearchParams({
    [STEAM_API_PARAMS.GAME_ID]: gameId,
    [STEAM_API_PARAMS.LANGUAGE]: 'en' // TODO Change the language.
  })

  const response = await fetch(
    STEAM_API_URL + STEAM_API_ENDPOINTS.GAME_DETAILS + '?' + queryParams.toString(),
    {
      next: {
        revalidate: 3600
      }
    }
  )

  if (!response.ok) {
    console.log(`The response status ${response.status}. Game ID: ${gameId}`)
    return null
  }

  const result: SteamGameDetailsResponse = await response.json()

  if (!result[gameId].success) {
    console.log(`The response was not successful. Game ID: ${gameId}`)
    return null
  }

  return result[gameId].data
}

export const getFeatures = async () => {
  if (process.env.NODE_ENV !== 'production') {
    return mockFeatures
  }

  const queryParams = new URLSearchParams({
    [STEAM_API_PARAMS.LANGUAGE]: 'en' // TODO Change the language.
  })

  const response = await fetch(
    STEAM_API_URL + STEAM_API_ENDPOINTS.FEATURED + '?' + queryParams.toString(),
    {
      next: {
        revalidate: 3600
      }
    }
  )

  if (!response.ok) {
    console.log(`The response status ${response.status}.`)
    return null
  }

  const result: SteamFeaturesResponse = await response.json()

  return result
}
