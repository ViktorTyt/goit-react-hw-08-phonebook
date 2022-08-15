import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [], filter: '' };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addItem({ items }, action) {
      items.push(action.payload);
    },
    deleteItem(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    filterItem(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addItem, deleteItem, filterItem } = contactsSlice.actions;
export default contactsSlice.reducer;
