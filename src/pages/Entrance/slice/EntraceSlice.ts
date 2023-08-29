import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  isAuth: false
};

export const EntraceSlice = createSlice({
  initialState,
  name: 'entrace-slice',
  reducers: {
    setAuth: function (state, action) {
      state.isAuth = action.payload;
    }
  }
});
