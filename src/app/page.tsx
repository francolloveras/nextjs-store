import { getFeatures } from '@/lib/data'
import { SteamFeatureBasicItem } from '@/lib/type'
import GameCard from '@/ui/game-card'

export default async function Home() {
  const features = await getFeatures()

  if (!features) {
    throw new Error('Features was null in the home page')
  }

  const allFeatures = [
    {
      title: 'Top sellers',
      data: features.top_sellers.items
    },
    {
      title: 'Special offers',
      data: features.specials.items
    },
    {
      title: 'New releases',
      data: features.new_releases.items
    },
    {
      title: 'Coming soon',
      data: features.coming_soon.items
    }
  ]

  return (
    <main className="mx-auto mt-12 flex w-11/12 grow flex-col flex-wrap gap-y-16">
      {allFeatures.map(({ title, data }, index) => (
        <section key={index}>
          <header className="mb-4">
            <h1 className="text-2xl font-semibold text-neutral-300">{title}</h1>
          </header>
          <article className="grid grid-cols-2 gap-x-4 gap-y-12 lg:grid-cols-3 xl:grid-cols-4">
            {data.map((game) => (
              <GameCard
                key={game.id}
                id={game.id}
                type={game.type}
                name={game.name}
                image={game.large_capsule_image}
                price={{
                  discount: game.discount_percent,
                  discountExpiration: (game as SteamFeatureBasicItem).discount_expiration ?? 0,
                  originalPrice: game.original_price ?? 0,
                  finalPrice: game.final_price,
                  itsFree: game.final_price === 0
                }}
              />
            ))}
          </article>
        </section>
      ))}
    </main>
  )
}
