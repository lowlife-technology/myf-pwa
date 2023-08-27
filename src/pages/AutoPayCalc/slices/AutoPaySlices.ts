import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAsset } from '../services';

export interface CashDividends {
  paymentDate: Date;
  lastDatePrior: Date;
  rate: number;
}

export interface receivedValuesPerDatesProps {
  data: Date;
  valorRecebido: number;
}

export interface BoughtPerMonthProps {
  startDate: Date;
  quantity: number;
  regularMarketPrice: number;
  purchaseVolume: number;
  receivedAmount: number;
  valoresRecebidos: receivedValuesPerDatesProps[];
}
export interface StaticReducerProps {
  boughtPerMonth: BoughtPerMonthProps[];
}

export interface AutoPayInitialStateProps {
  data: {
    symbol: string;
    shortName: string;
    regularMarketPrice: number;
    logourl: string;
    dividendsData: {
      cashDividends: CashDividends[];
      stockDividends: object[];
      subscriptions: object[];
    };
  };
  controls: {
    loading: string;
    message: string | undefined;
  };
  staticReducer: StaticReducerProps;
}

const initialState: AutoPayInitialStateProps = {
  data: {
    symbol: '',
    shortName: '',
    regularMarketPrice: 0,
    logourl: '',
    dividendsData: {
      cashDividends: [],
      stockDividends: [],
      subscriptions: []
    }
  },
  controls: {
    loading: '',
    message: ''
  },
  staticReducer: {
    boughtPerMonth: []
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
  reducers: {
    addOwnerPurchase: (state, action) => {
      state.staticReducer.boughtPerMonth.push(action.payload);
    }
  },
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
