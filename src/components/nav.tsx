'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import Typography from '@/ui/typography'

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav>
      <ul className="flex items-center gap-x-6 text-lg text-neutral-400">
        <li>
          <Typography
            as={Link}
            href="/"
            className={`transition-colors duration-300 hover:text-white ${pathname === '/' ? 'pointer-events-none text-white' : 'text-neutral-400'}`}
          >
            Discover
          </Typography>
        </li>
        <li>
          <Typography
            as={Link}
            href="/games"
            className={`transition-colors duration-300 hover:text-white ${pathname === '/games' ? 'pointer-events-none text-white' : 'text-neutral-400'}`}
          >
            Library
          </Typography>
        </li>
        <ul className="flex items-center gap-x-1">
          <li className="mt-0.5">
            <Typography
              as="button"
              icon="search"
              className="text-xl"
              variant="transparent-button"
            />
          </li>
          <li className="mt-0.5">
            <Typography as="button" icon="lang" className="text-xl" variant="transparent-button" />
          </li>
          <li className="mt-0.5">
            <Typography as="button" icon="cart" className="text-xl" variant="transparent-button" />
          </li>
        </ul>
      </ul>
    </nav>
  )
}
