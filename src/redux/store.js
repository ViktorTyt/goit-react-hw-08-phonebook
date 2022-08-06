import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  contacts: {
    items: [],
    filter: '',
  },
});

export default store;
