import { steamGameIds } from '@/lib/data'
import SkeletonGameCard from '@/ui/skeleton-game-card'

export default function Loading() {
  return (
    <main className="mx-auto mt-12 flex w-11/12 grow">
      <section className="grid gap-x-4 gap-y-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {steamGameIds.map((id) => (
          <SkeletonGameCard key={id} />
        ))}
      </section>
    </main>
  )
}
