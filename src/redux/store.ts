import { configureStore } from "@reduxjs/toolkit";
import currencySlice from "./features/currencySlice";
import exchangeRatesSlice from "./features/exchangeRatesSlice";

export const store = configureStore({
  reducer: {
    currency: currencySlice,
    exchangeRates: exchangeRatesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
