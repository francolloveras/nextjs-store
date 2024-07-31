import { formatPrice } from '@/lib/util'

export interface GamePriceProps {
  itsFree: boolean
  discount?: number
  originalPrice?: number
  finalPrice?: number
}

export default function GamePrice({
  itsFree,
  discount,
  originalPrice,
  finalPrice
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
            {originalPrice && formatPrice(originalPrice)}
          </span>
        )}
        <p className="text-green-300">
          {itsFree ? 'Free game!' : finalPrice && formatPrice(finalPrice)}
        </p>
      </div>
    </div>
  )
}
