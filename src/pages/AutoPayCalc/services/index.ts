import { instance } from '../../../services';

export const getAsset = (ticker: string) => instance.get(`${ticker}?&dividends=true`);
