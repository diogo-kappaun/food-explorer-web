export function formatPrice(priceInCents) {
  const pricePerHundred = priceInCents / 100

  const decimalPrice = pricePerHundred.toFixed(2).toString().replace('.', ',')

  const formattedPrice = decimalPrice.replace(/\B(?=(\d{3})+(?!\d))/g, '.')

  return formattedPrice
}
