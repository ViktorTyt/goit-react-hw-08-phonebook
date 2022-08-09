import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { addItem, deleteItem, filterItem } from './contactsActions';

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

const rootReducer = combineReducers({
  items: myContactsReducer,
  filter: myFilterReducer,
});

export { rootReducer };
