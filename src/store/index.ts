import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import { AutoPaySlice } from '../pages/AutoPayCalc/slices/AutoPaySlices';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    AutoPayReducer: AutoPaySlice.reducer
  },
  middleware: [thunkMiddleware]
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused to resolve types
