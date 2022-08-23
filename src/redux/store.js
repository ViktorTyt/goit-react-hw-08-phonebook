import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './filterSlice';
import { contactsApi } from './contactsApi';
import userSlice from './userSlice';
import { userApi } from './userAPI';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    contacts: counterSlice,
    [userApi.reducerPath]: userApi.reducer,
    users: userSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(contactsApi.middleware)
      .concat(userApi.middleware),
});
