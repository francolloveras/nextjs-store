import Image from 'next/image'

import { ESRB_RATINGS } from '@/lib/const'
import { SteamRaring } from '@/lib/type'

export default function RatingCard({ rating, descriptors, interactive_elements }: SteamRaring) {
  const parseRating = ESRB_RATINGS[rating] ?? ESRB_RATINGS.rp

  return (
    <div className="flex gap-x-4 rounded-md bg-neutral-800 p-4 shadow-md">
      <div className="mb-auto">
        <Image
          src={parseRating.image}
          alt={`ESRB ${parseRating.title} image`}
          width={60}
          height={90}
        />
      </div>
      <div className="flex flex-col">
        <h4 className="text-lg font-medium">{parseRating.title}</h4>
        <ul className="mb-2 text-sm text-neutral-400">
          {descriptors.split('\r\n').map((descriptor) => (
            <li key={descriptor}>{descriptor}</li>
          ))}
        </ul>
        {interactive_elements && (
          <ul className="text-sm text-neutral-400">
            {interactive_elements.split('\r\n').map((element) => (
              <li key={element}>{element}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
