import Image from 'next/image'
import Link from 'next/link'

import { PATHS } from '@/lib/const'
import Price, { GamePriceProps } from '@/ui/game-price'

interface GameCardProps {
  id: number
  name: string
  image: string
  price: GamePriceProps
  type?: number
}

export default function GameCard({ id, name, image, price, type }: GameCardProps) {
  return (
    <Link href={`${PATHS.GAMES}/${id}`} className="group">
      <Image
        src={image}
        alt={`${name} game picture`}
        width={460}
        height={215}
        className="aspect-video rounded-md opacity-80 transition-opacity group-hover:opacity-100"
        aria-disabled
      />
      <div className="ml-0.5 mt-2">
        {type !== undefined && (
          <p className="text-sm text-neutral-600">
            {type === 0 ? 'Base game' : type === 1 ? 'Extension package' : 'Unknown'}
          </p>
        )}
        <h3 className="text-pretty text-lg text-neutral-300 group-hover:text-white">{name}</h3>
        <Price {...price} />
      </div>
    </Link>
  )
}
