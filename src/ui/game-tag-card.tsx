import Link from 'next/link'

import { PATHS } from '@/lib/const'

interface GameTagCardProps {
  id: string
  name: string
}

export default function GameTagCard({ id, name }: GameTagCardProps) {
  return (
    <Link
      href={`${PATHS.GAMES}?tag=${id}`}
      className="rounded-md bg-neutral-800 px-3 py-0.5 text-xs text-neutral-300 transition-colors hover:bg-neutral-700 hover:text-white"
    >
      {name}
    </Link>
  )
}
