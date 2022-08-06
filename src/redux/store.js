import { configureStore } from '@reduxjs/toolkit';
import { myContactsReducer, myFilterReducer } from './contactsReducer';

const store = configureStore({
  reducer: {
    items: myContactsReducer,
    filter: myFilterReducer,
  },
});

export default store;
