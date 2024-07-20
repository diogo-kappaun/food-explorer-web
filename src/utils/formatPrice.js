export function formatPrice(priceInCents) {
  const pricePerHundred = priceInCents / 100

  const decimalPrice = pricePerHundred.toFixed(2).toString().replace('.', ',')

  const thousandPrice = decimalPrice.replace(/\B(?=(\d{3})+(?!\d))/g, '.')

  const formattedPrice = `R$ ${thousandPrice}`

  return formattedPrice
}
