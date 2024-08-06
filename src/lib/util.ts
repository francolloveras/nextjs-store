export const uppercaseFirstLetter = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

export const formatPrice = ({
  amount,
  locale = 'en-US',
  currency = 'USD'
}: {
  amount: number
  locale?: string
  currency?: string
}) => {
  const adjustedAmount = amount / 100

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(adjustedAmount)
}

export const formatDate = ({
  seconds,
  locale = 'en-US',
  options
}: {
  seconds: number
  locale?: string
  options?: Intl.DateTimeFormatOptions
}) => {
  const date = new Date(seconds * 1000)

  return new Intl.DateTimeFormat(locale, options).format(date)
}
