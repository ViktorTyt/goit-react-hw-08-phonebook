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
import { rootReducer } from './contactsReducer';

const persistConfig = {
  key: 'items',
  storage,
  whitelist: ['items'],
};

const persistedMyContactsReducer = persistReducer(persistConfig, rootReducer);

const preloadedState = {
  contacts: {
    items: [],
    filter: '',
  },
};

const store = configureStore({
  reducer: {
    contacts: persistedMyContactsReducer,
  },
  preloadedState,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
