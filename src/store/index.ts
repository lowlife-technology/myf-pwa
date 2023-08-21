import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import { AutoPaySlice } from '../pages/AutoPayCalc/slices/AutoPaySlices';

export const store = configureStore({
  reducer: {
    AutoPayReducer: AutoPaySlice.reducer
  },
  middleware: [thunkMiddleware]
});
