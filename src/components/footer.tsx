import Link from 'next/link'

import Typography from '@/ui/typography'

export default function footer() {
  return (
    <footer className="mb-4 flex h-40 flex-col items-center justify-end">
      <h3 className="mb-1 text-sm  text-neutral-300 md:text-base">
        Created by Franco Lloveras
        <span className="mx-2">&bull;</span>
        <Typography
          as="a"
          href="https://github.com/francolloveras/nextjs-store"
          target="_blank"
          className="hover:text-white hover:underline"
          icon={{
            icon: 'github',
            className: 'text-sm'
          }}
        >
          GitHub
        </Typography>
      </h3>
      <div className="text-pretty text-center text-xs text-neutral-500 md:text-sm">
        <p>Disclaimer: This page is demonstrative and for educational purposes only.</p>
        <p>
          All game information shown comes from{' '}
          <Link
            href="https://store.steampowered.com/"
            className="underline underline-offset-2"
            referrerPolicy="no-referrer"
            target="_blank"
          >
            Steam servers
          </Link>
          , credits to them.
        </p>
      </div>
    </footer>
  )
}
