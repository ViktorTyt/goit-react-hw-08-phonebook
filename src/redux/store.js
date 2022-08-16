import { configureStore } from '@reduxjs/toolkit';

import counterSlice from './contactsReducer';
import { contactsApi } from './contactsSlice';

// const persistConfig = {
//   key: 'items',
//   storage,
//   whitelist: ['items'],
// };

// const persistedMyContactsReducer = persistReducer(persistConfig, counterSlice);

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    contacts: counterSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});
