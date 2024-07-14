export interface GamePriceProps {
  itsFree: boolean
  discount?: number
  finalFormatted?: string
  initialFormatted?: string
}

export default function GamePrice({
  itsFree,
  discount,
  initialFormatted,
  finalFormatted
}: GamePriceProps) {
  const hasDiscount = typeof discount !== 'undefined' && discount > 0

  return (
    <div className="flex gap-x-2 text-nowrap">
      {hasDiscount && (
        <span className="my-auto rounded-md bg-red-500 px-2 py-1 text-sm text-white">
          -{discount}%
        </span>
      )}
      <div className="flex flex-col gap-x-2 leading-none">
        {hasDiscount && (
          <span className="text-right text-xs text-neutral-500 line-through">
            {initialFormatted}
          </span>
        )}
        <p className="text-green-300">{itsFree ? 'Free game!' : finalFormatted}</p>
      </div>
    </div>
  )
}
