import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import DynamicTextToHtml from '@/components/dynamic-text-to-html'
import { getGameById } from '@/lib/data'
import Breadcrumb from '@/ui/breadcrumb'
import Gallery from '@/ui/gallery'

export default async function GameDetails({ params }: { params: { gameId: string } }) {
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
    <main className="mx-auto mt-12 flex w-2/3 flex-col gap-y-4">
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
        <section className="w-2/3">
          <Gallery media={[...screenshots, ...movies]} />
          <article id="description">
            {/* TODO Change how the description is parse to HTML */}
            <DynamicTextToHtml text={game.detailed_description} />
          </article>
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
            <p className="text-pretty text-neutral-300">
              {game.short_description}{' '}
              <Link href="#description" className="underline hover:text-red-300">
                Read more
              </Link>
            </p>
          </header>
        </section>
      </div>
    </main>
  )
}
