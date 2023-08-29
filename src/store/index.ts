import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import { AutoPaySlice } from '../pages/AutoPayCalc/slices/AutoPaySlices';
import { EntraceSlice } from '../pages/Entrance/slice/EntraceSlice';

export const store = configureStore({
  reducer: {
    AutoPayReducer: AutoPaySlice.reducer,
    EntraceReducer: EntraceSlice.reducer
  },
  middleware: [thunkMiddleware]
});
