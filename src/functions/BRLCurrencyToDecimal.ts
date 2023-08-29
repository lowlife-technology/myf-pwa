export const BRLCurrencyToDecimal = (BRLCurrency: string) => {
  if (BRLCurrency.length === 1) {
    return '0.0' + BRLCurrency;
  }
  if (BRLCurrency.length === 2) {
    return '0.' + BRLCurrency;
  }
  if (BRLCurrency.length >= 3) {
    return BRLCurrency.replace(/\d{2}$/gm, '.$&');
  }
};
