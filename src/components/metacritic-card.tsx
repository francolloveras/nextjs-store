import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import { SteamMetacritic } from '@/lib/type'
import Typography from '@/ui/typography'

export default function MetacriticCard({ score, url }: SteamMetacritic) {
  return (
    <div className="flex items-center rounded-md bg-neutral-800 p-4 shadow-md">
      <span
        className={clsx('mr-6 rounded-md px-3.5 py-2 text-3xl font-semibold', {
          'bg-red-400 text-red-900': score < 50,
          'bg-yellow-400 text-yellow-900': score > 50 && score < 80,
          'bg-green-400 text-green-900': score > 80
        })}
      >
        {score}
      </span>
      <Image src="/metacritic-logo.svg" alt="Metacritic Logo" width={40} height={40} />
      <div className="ml-2 leading-none">
        <h4 className="text-2xl font-medium leading-none tracking-wide">Metacritic</h4>
        <Typography
          as={Link}
          href={url}
          icon={{ icon: 'externalLink', position: 'right', className: 'text-xs' }}
          target="_blank"
          referrerPolicy="no-referrer"
          className="text-sm underline"
        >
          Read review
        </Typography>
      </div>
    </div>
  )
}
