import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAsset } from '../services';

export interface CashDividend {
  paymentDate: Date;
  rate: number;
}

interface initialStateProps {
  data: {
    symbol: string;
    shortName: string;
    longName: string;
    currency: string;
    regularMarketPrice: number;
    regularMarketDayHigh: number;
    regularMarketDayLow: number;
    regularMarketDayRange: string;
    regularMarketChange: number;
    regularMarketChangePercent: number;
    regularMarketTime: string;
    marketCap: number;
    logourl: string;
    regularMarketVolume: number;
    regularMarketPreviousClose: number;
    regularMarketOpen: number;
    averageDailyVolume10Day: number;
    averageDailyVolume3Month: number;
    fiftyTwoWeekLowChange: number;
    fiftyTwoWeekLowChangePercent: number;
    fiftyTwoWeekRange: string;
    fiftyTwoWeekHigh: number;
    fiftyTwoWeekHighChange: number;
    fiftyTwoWeekHighChangePercent: number;
    fiftyTwoWeekLow: number;
    twoHundredDayAverage: number;
    twoHundredDayAverageChange: number;
    twoHundredDayAverageChangePercent: number;
    dividendsData: {
      cashDividend: CashDividend[];
      stockDividends: object[];
      subscriptions: object[];
    };
  };
  controls: {
    loading: string;
    message: string | undefined;
  };
}

const initialState: initialStateProps = {
  data: {
    symbol: '',
    shortName: '',
    longName: '',
    currency: '',
    regularMarketPrice: 0,
    regularMarketDayHigh: 0,
    regularMarketDayLow: 0,
    regularMarketDayRange: '',
    regularMarketChange: 0,
    regularMarketChangePercent: 0,
    regularMarketTime: '',
    marketCap: 0,
    logourl: '',
    regularMarketVolume: 0,
    regularMarketPreviousClose: 0,
    regularMarketOpen: 0,
    averageDailyVolume10Day: 0,
    averageDailyVolume3Month: 0,
    fiftyTwoWeekLowChange: 0,
    fiftyTwoWeekLowChangePercent: 0,
    fiftyTwoWeekRange: '',
    fiftyTwoWeekHighChange: 0,
    fiftyTwoWeekHighChangePercent: 0,
    fiftyTwoWeekLow: 0,
    fiftyTwoWeekHigh: 0,
    twoHundredDayAverage: 0,
    twoHundredDayAverageChange: 0,
    twoHundredDayAverageChangePercent: 0,
    dividendsData: {
      cashDividend: [],
      stockDividends: [],
      subscriptions: []
    }
  },
  controls: {
    loading: '',
    message: ''
  }
};

export const getAssetsThunk = createAsyncThunk(
  'AutoPay-Slice/get-assets',
  async (ticker: string) => {
    try {
      const { data } = await getAsset(ticker);
      const results = data.results[0];
      return results;
    } catch (error) {
      return error;
    }
  }
);

export const AutoPaySlice = createSlice({
  initialState,
  name: 'autopay-slice',
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAssetsThunk.fulfilled, (state, action) => {
      state.data.shortName = action.payload.shortName;
      state.data.regularMarketPrice = action.payload.regularMarketPrice;
      state.data.logourl = action.payload.logourl;
      state.data.dividendsData = action.payload.dividendsData;
    });
    builder.addCase(getAssetsThunk.pending, (state) => {
      state.controls.loading = 'PENDING';
    });
    builder.addCase(getAssetsThunk.rejected, (state, action) => {
      state.controls.message = action.error.message;
    });
  }
});
