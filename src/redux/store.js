import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './filterSlice';
import { contactsApi } from './contactsApi';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    contacts: counterSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});
