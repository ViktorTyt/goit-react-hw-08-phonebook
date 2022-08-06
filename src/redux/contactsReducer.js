import { createReducer } from '@reduxjs/toolkit';
import { addItem, deleteItem, filterItem } from './contactsActions';

const initialState = {
  contacts: {
    items: [],
    filter: '',
  },
};

const contacts = createReducer(initialState, {
  [addItem]: (state, action) => state.contacts.items.push(action.payload),
  [deleteItem]: (state, action) =>
    state.contacts.items.filter(item => item.id !== action.payload.id),
  [filterItem]: (state, action) =>
    state.contacts.items.filter(({ name }) =>
      name.toLowerCase().includes(state.contacts.filter.toLowerCase())
    ),
});

export default contacts;
