import Image from 'next/image'

import { SteamAchievements } from '@/lib/type'

export default function AchievementsCard({ total, highlighted }: SteamAchievements) {
  const displayedAchievements = highlighted.slice(0, 9)

  return (
    <div className="flex flex-col gap-y-2 rounded-md bg-neutral-800 p-4 shadow-md">
      <p className="text-neutral-500">Has {total} achievements</p>
      <div className="grid grid-cols-5 gap-2">
        {displayedAchievements.map(({ name, path }) => (
          <Image
            key={name}
            src={path}
            alt={`Achievements ${name}`}
            width={64}
            height={64}
            title={name}
          />
        ))}
        {total > 9 && (
          <div className="grid size-16 place-items-center rounded-md bg-neutral-700 text-2xl font-semibold text-neutral-300">{`+${total - displayedAchievements.length}`}</div>
        )}
      </div>
    </div>
  )
}
