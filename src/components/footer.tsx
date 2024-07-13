import Link from 'next/link'

import Typography from '@/ui/typography'

export default function footer() {
  return (
    <footer className="mb-4 flex h-40 flex-col items-center justify-end">
      <h3 className="mb-1">
        Created by Franco Lloveras
        <span className="mx-2">&bull;</span>
        <Typography
          as="a"
          href="https://github.com/francolloveras/nextjs-store"
          target="_blank"
          className="hover:text-red-400"
          icon={{
            icon: 'github',
            className: 'text-sm'
          }}
        >
          View code source
        </Typography>
      </h3>
      <div className="text-pretty text-center text-sm text-neutral-300">
        <p>Disclaimer: This page is demonstrative and for educational purposes only.</p>
        <p>
          All game information shown comes from{' '}
          <Link
            href="https://store.steampowered.com/"
            className="underline underline-offset-2"
            referrerPolicy="no-referrer"
            target="_blank"
          >
            Steam
          </Link>{' '}
          servers, credits to them.
        </p>
      </div>
    </footer>
  )
}
