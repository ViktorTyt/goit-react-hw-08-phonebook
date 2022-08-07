import { createReducer } from '@reduxjs/toolkit';
import { addItem, deleteItem, filterItem } from './contactsActions';

const getLocalStorage = JSON.parse(localStorage.getItem('contacts')) ?? [];
const initialState = {
  contacts: {
    items: getLocalStorage,
    filter: '',
  },
};

console.log(initialState.contacts.items);

const myContactsReducer = createReducer(initialState.contacts.items, {
  [addItem]: (state, action) => {
    state.push(action.payload);
  },
  [deleteItem]: (state, action) => {
    return state.filter(item => item.id !== action.payload);
  },
});

const myFilterReducer = createReducer(initialState.contacts.filter, {
  [filterItem]: (state, action) => {
    return (state = action.payload);
  },
});

export { myContactsReducer, myFilterReducer };
