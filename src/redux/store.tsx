import { configureStore } from "@reduxjs/toolkit";
import { authPersistReducer } from "./api/features/authSlice";
import { baseApi } from "./api/baseApi";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { orderPersistSlice } from "./api/features/orderSlice";

export const store = configureStore({
  reducer: {
    auth: authPersistReducer,
    order: orderPersistSlice,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

export const persistStores = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
