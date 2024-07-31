export const uppercaseFirstLetter = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

export const formatPrice = (amount: number, locale: string = 'en-US', currency: string = 'USD') => {
  const adjustedAmount = amount / 100

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(adjustedAmount)
}
