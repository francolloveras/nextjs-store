import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import AboutGame from '@/components/about-game'
import AchievementsCard from '@/components/achievements-card'
import MetacriticCard from '@/components/metacritic-card'
import RatingCard from '@/components/rating-card'
import TextToHtml from '@/components/text-to-html'
import { getGameById } from '@/lib/data'
import Breadcrumb from '@/ui/breadcrumb'
import Gallery from '@/ui/gallery'
import GamePrice from '@/ui/game-price'
import GameTagCard from '@/ui/game-tag-card'
import Typography from '@/ui/typography'

interface ParamsProps {
  params: { gameId: string }
}

export async function generateMetadata({ params }: ParamsProps) {
  const game = await getGameById(params.gameId)

  if (!game) {
    return notFound()
  }

  return {
    title: game.name
  }
}

export default async function GameDetails({ params }: ParamsProps) {
  const game = await getGameById(params.gameId)

  if (!game) {
    return notFound()
  }

  const movies = game.movies.map(({ id, webm, thumbnail }) => ({
    id,
    type: 'video' as 'image' | 'video',
    src: webm.max,
    thumbnail
  }))
  const screenshots = game.screenshots.map(({ id, path_full, path_thumbnail }) => ({
    id,
    type: 'image' as 'image' | 'video',
    src: path_full,
    thumbnail: path_thumbnail
  }))

  return (
    <main className="mx-auto mt-12 flex w-2/3 grow flex-col gap-y-4">
      <div className="absolute -top-52 left-0 -z-10 w-screen" aria-disabled>
        <Image
          src={game.background_raw}
          alt={`background for the game ${game.name}`}
          width={1438}
          height={820}
          className="mx-auto opacity-30"
          style={{
            filter: 'drop-shadow(0 0 5px rgba(0, 0, 0, .5))',
            maskImage: 'radial-gradient(ellipse 100% 100% at 50% 40%, black 10%, transparent 50%)'
          }}
          priority
        />
      </div>
      <Breadcrumb gameName={game.name} />
      <div className="flex gap-x-12">
        <section className="flex w-2/3 flex-col gap-y-6">
          <Gallery media={[...screenshots, ...movies]} />
          <article id="description">
            <TextToHtml text={game.detailed_description} />
          </article>
          {game.legal_notice && (
            <div className="mt-6 text-pretty text-xs text-neutral-500">
              <TextToHtml text={game.legal_notice} />
            </div>
          )}
        </section>
        <section className="w-1/3">
          <header className="flex flex-col gap-y-6">
            <h1 className="text-pretty text-4xl font-semibold">{game.name}</h1>
            <Image
              src={game.header_image}
              alt={`Header for the game ${game.name}`}
              width={460}
              height={215}
              className="rounded-md"
              priority
            />
            <div className="flex flex-wrap gap-1">
              {[...game.genres, ...game.categories].map(({ id, description }) => (
                <GameTagCard key={id} id={id.toString()} name={description} />
              ))}
            </div>
            <p className="text-pretty text-neutral-300">
              {game.short_description}{' '}
              <Link href="#description" className="underline hover:text-red-300">
                Read more
              </Link>
            </p>
            <div className="mx-auto flex w-fit items-center gap-x-6 rounded-md bg-black px-4 py-2.5">
              <GamePrice
                discount={game.price_overview?.discount_percent}
                initialFormatted={game.price_overview?.initial_formatted}
                finalFormatted={game.price_overview?.final_formatted}
                itsFree={game.is_free}
              />
              <Typography
                as="button"
                icon="add"
                className="text-nowrap rounded-md bg-green-400 px-6 py-1 text-neutral-950 transition-colors hover:bg-green-300"
              >
                Add to cart
              </Typography>
            </div>
            <div className="text-center">
              <Typography as="p" icon="like" className="text-neutral-500">
                {`${game.recommendations.total.toLocaleString()} users recommends this game!`}
              </Typography>
            </div>
            {game.achievements && <AchievementsCard {...game.achievements} />}
            <AboutGame
              developers={game.developers}
              publishers={game.publishers}
              releaseDate={game.release_date.date}
              languages={game.supported_languages}
              website={game.website}
            />
            {game.metacritic && <MetacriticCard {...game.metacritic} />}
            {game.ratings?.esrb && <RatingCard {...game.ratings.esrb} />}
          </header>
        </section>
      </div>
    </main>
  )
}
