export function formatCurrency (number) {
  const formatter = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'USD' })
  return formatter.format(number)
}
