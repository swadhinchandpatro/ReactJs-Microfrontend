import { configureStore, } from '@reduxjs/toolkit';
import postsApi from '../../services/apis/Posts';
import { configStore } from '../../utility/reduxStatePersist/configStore';
import { rootReducer } from "./rootReducer";
import { loadState } from 'marketing/loadState';
import { federatedMiddleware, federatedReducers } from "marketing/federatedMiddlewareReducers";

const persistedState = loadState(configStore.key, configStore.encryption);

const mergedRootReducer = { ...rootReducer, ...federatedReducers};

export const store = configureStore({
  reducer: mergedRootReducer,
  preloadedState: persistedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware).concat(federatedMiddleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

