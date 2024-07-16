import { getAllGames } from '@/lib/data'
import GameCard from '@/ui/game-card'

export const metadata = {
  title: {
    default: 'Library'
  },
  description: 'Collection of all games in the Nextjs Store developed by Franco Lloveras.'
}

export default async function Games() {
  const allGames = await getAllGames()

  return (
    <main className="mx-auto mt-12 w-11/12">
      <section className="grid place-items-center gap-x-4 gap-y-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {allGames.map((game) =>
          game ? (
            <GameCard
              key={game.steam_appid}
              id={game.steam_appid}
              name={game.name}
              image={game.header_image}
              price={{
                discount: game.price_overview?.discount_percent,
                initialFormatted: game.price_overview?.initial_formatted,
                finalFormatted: game.price_overview?.final_formatted,
                itsFree: game.is_free
              }}
            />
          ) : null
        )}
      </section>
    </main>
  )
}
