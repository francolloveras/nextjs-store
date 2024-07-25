import Link from 'next/link'

import Typography from '@/ui/typography'

export default function GameNotFound() {
  return (
    <main className="mt-12 flex grow flex-col items-center gap-y-4">
      <header className="text-center">
        <h1 className="text-9xl font-bold tracking-wider md:text-[148px] xl:text-[188px]">404</h1>
        <h4 className="text-4xl font-medium text-neutral-300">We&apos;re sorry...</h4>
      </header>
      <article className="max-w-lg text-pretty text-center text-lg text-neutral-400">
        <p>The game you are looking for was not found.</p>
        <p>
          Maybe there is an error in the URL or the game has been temporarily or permanently
          removed.
        </p>
      </article>
      <footer className="mt-8">
        <Typography
          as={Link}
          href="/"
          icon="home"
          className="rounded-md bg-red-300 px-8 py-2 text-neutral-950 hover:brightness-110"
        >
          Go to homepage
        </Typography>
      </footer>
    </main>
  )
}
