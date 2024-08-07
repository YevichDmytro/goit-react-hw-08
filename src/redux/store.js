import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contacts/slice';
import { filtersReducer } from './filters/slice';
import { authReducer } from './auth/slice';

const persistedAuthReducer = persistReducer(
  {
    key: 'auth-token',
    storage,
    whitelist: ['token'],
  },
  authReducer
);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});

export const persistor = persistStore(store);
