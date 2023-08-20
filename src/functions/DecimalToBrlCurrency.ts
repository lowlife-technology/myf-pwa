export const decimalToBRLCurrency = (decimal: number) =>
  decimal
    .toFixed(2)
    .replace('.', ',')
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
