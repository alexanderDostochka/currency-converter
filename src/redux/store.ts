import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import currencySlice from "./features/currencySlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    currency: currencySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
