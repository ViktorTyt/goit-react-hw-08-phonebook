import { createReducer } from '@reduxjs/toolkit';
import { addItem, deleteItem, filterItem } from './contactsActions';

// const initialState = {
//   contacts: {
//     items: [],
//     filter: '',
//   },
// };

const myContactsReducer = createReducer([], {
  [addItem]: (state, action) => {
    state.push(action.payload);
  },
  [deleteItem]: (state, action) => {
    return state.filter(item => item.id !== action.payload);
  },
});

const myFilterReducer = createReducer('', {
  [filterItem]: (state, action) => {
    return (state = action.payload);
  },
});

export { myContactsReducer, myFilterReducer };
