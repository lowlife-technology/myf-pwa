import { instance } from '../../../services';

// export interface Result {}

// export interface ApiResponse {
//   data: {
//     results: Result[];
//   };
// }

export const getAsset = (ticker: string) =>
  instance.get(`${ticker}?range=max&interval=1m&fundamental=true&dividends=true`);
