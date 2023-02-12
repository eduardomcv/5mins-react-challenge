/**
 * Using this util with a hardcoded locale.
 * For a more robust solution to support multiple languages/locales, should use a library like react-intl.
 * But I think this is good enough for the exercice.
 */
export function formatCurrency (number) {
  const formatter = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'USD' })
  return formatter.format(number)
}
