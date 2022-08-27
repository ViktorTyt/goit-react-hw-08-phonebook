import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import counterSlice from './filterSlice';
import { contactsApi } from './contactsSwaggerApi';
import userSlice from './userSlice';
import { userApi } from './userAPI';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const persistedMyContactsReducer = persistReducer(persistConfig, userSlice);

const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    contacts: counterSlice,
    [userApi.reducerPath]: userApi.reducer,
    users: persistedMyContactsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(contactsApi.middleware)
      .concat(userApi.middleware),
});

export const persistor = persistStore(store);
export default store;
