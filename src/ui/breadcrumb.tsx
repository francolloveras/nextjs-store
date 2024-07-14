'use client'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { uppercaseFirstLetter } from '@/lib/util'
import Typography from '@/ui/typography'

interface BreadcrumbProps {
  gameName: string
}

export default function Breadcrumb({ gameName }: BreadcrumbProps) {
  const pathname = usePathname()
  const paths = pathname.split('/')

  return (
    <nav className="flex items-center text-xs md:text-sm" aria-label="breadcrumb">
      <ol className="flex flex-wrap items-center gap-1 text-neutral-400 md:gap-2">
        {paths.map((path) => {
          const isLast = paths.at(-1) === path

          return (
            <Typography
              key={path}
              as="li"
              className="text-nowrap"
              icon={!isLast ? { icon: 'arrowForward', position: 'right' } : undefined}
            >
              <Link
                href={`/${path}`}
                className={clsx('hover:text-red-300', {
                  'pointer-events-none text-red-300': isLast
                })}
              >
                {path.length === 0 ? 'Home' : isLast ? gameName : uppercaseFirstLetter(path)}
              </Link>
            </Typography>
          )
        })}
      </ol>
    </nav>
  )
}
