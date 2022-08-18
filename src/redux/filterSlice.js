import { createSlice } from '@reduxjs/toolkit';

const initialState = { filter: '' };

const filterSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    filterItem(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { filterItem } = filterSlice.actions;
export default filterSlice.reducer;
