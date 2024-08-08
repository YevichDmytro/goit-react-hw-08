import { createSlice } from '@reduxjs/toolkit';
import { logOut } from '../auth/operations';

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
  },
  reducers: {
    changeFilter: {
      reducer(state, action) {
        console.log(action.payload);
        state.name = action.payload;
      },
    },
  },
  extraReducers: builder =>
    builder
      .addCase(logOut.fulfilled, state => {
        state.name = '';
      })
      .addCase(logOut.rejected, state => {
        state.name = '';
      }),
});

export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
