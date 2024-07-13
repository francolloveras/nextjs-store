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
    <div className="flex gap-x-2">
      {hasDiscount && (
        <div className="flex gap-x-2">
          <span className="text-red-400 line-through">{initialFormatted}</span>
          <span className="rounded-md bg-red-500 px-2 py-1 text-xs text-white">-{discount}%</span>
        </div>
      )}
      <p className="text-green-300">{itsFree ? 'Free game!' : finalFormatted}</p>
    </div>
  )
}
