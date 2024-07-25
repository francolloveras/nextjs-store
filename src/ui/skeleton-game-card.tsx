export default function SkeletonGameCard() {
  return (
    <div className="animate-pulse">
      <span className="block aspect-video w-full rounded-xl bg-neutral-800" />
      <div className="mt-2 flex flex-col gap-y-1">
        <span className="block h-4 w-3/4 rounded-md bg-neutral-800" />
        <span className="block h-4 w-1/4 rounded-md bg-neutral-800" />
      </div>
    </div>
  )
}
