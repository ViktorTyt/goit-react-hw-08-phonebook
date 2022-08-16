import { createSlice } from '@reduxjs/toolkit';

const initialState = { filter: '' };

const filterSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    // addItem({ items }, action) {
    //   items.push(action.payload);
    // },
    // deleteItem(state, action) {
    //   state.items = state.items.filter(item => item.id !== action.payload);
    // },
    filterItem(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { filterItem } = filterSlice.actions;
export default filterSlice.reducer;
