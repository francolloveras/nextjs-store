import { formatDate, formatPrice } from '@/lib/util'

export interface GamePriceProps {
  itsFree: boolean
  discount?: number
  discountExpiration?: number
  originalPrice?: number
  finalPrice?: number
}

export default function GamePrice({
  itsFree,
  discount,
  discountExpiration,
  originalPrice,
  finalPrice
}: GamePriceProps) {
  const hasDiscount = typeof discount !== 'undefined' && discount > 0
  const discountTimeOptions: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  }

  return (
    <div className="text-nowrap">
      {discountExpiration && (
        <p className="mb-2 text-neutral-400">
          {`Offer ends ${formatDate({ seconds: discountExpiration, options: discountTimeOptions })}!`}
        </p>
      )}
      <div className="flex items-center gap-x-2">
        {hasDiscount && (
          <span className="mb-2 mr-2 inline-block rounded-md bg-red-500 px-2 py-1 text-sm text-white">
            -{discount}%
          </span>
        )}
        <div className="flex flex-col gap-x-2 leading-none">
          {hasDiscount && (
            <span className="text-right text-xs text-neutral-500 line-through">
              {originalPrice && formatPrice({ amount: originalPrice })}
            </span>
          )}
          <p className="text-green-300">
            {itsFree ? 'Free game!' : finalPrice && formatPrice({ amount: finalPrice })}
          </p>
        </div>
      </div>
    </div>
  )
}
