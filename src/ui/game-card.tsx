import Image from 'next/image'
import Link from 'next/link'

import { PATHS } from '@/lib/const'
import Price, { GamePriceProps } from '@/ui/game-price'

interface GameCardProps {
  id: number
  name: string
  image: string
  price: GamePriceProps
}

export default function GameCard({ id, name, image, price }: GameCardProps) {
  return (
    <Link
      href={`${PATHS.GAMES}/${id}`}
      className="group transition-transform duration-300 ease-in-out hover:-translate-y-2"
    >
      <Image
        src={image}
        alt={`Picture for ${name}`}
        width={460}
        height={215}
        className="rounded-xl opacity-80 transition-opacity group-hover:opacity-100"
        aria-disabled
      />
      <div className="mt-2 flex flex-col gap-y-1">
        <h3 className="text-pretty text-lg leading-snug text-neutral-300 group-hover:text-white">
          {name}
        </h3>
        <Price {...price} />
      </div>
    </Link>
  )
}
