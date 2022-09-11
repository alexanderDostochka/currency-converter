import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import _ from "lodash";
import { currency } from "../../constants/currency";
import { fetchCurrencyConvert } from "../../apilayer";

export interface CurrencyState {
  from: Object | undefined;
  to: Object | undefined;
  amount: number;
  loader: boolean;
  result: any;
}

const initialState: CurrencyState = {
  from: _.first(currency),
  to: _.last(currency),
  amount: 1,
  loader: true,
  result: {},
};

export const convertAsync = createAsyncThunk(
  "currency/fetchCurrencyConvert",
  async (_, { getState }) => {
    const state: any = getState();

    const response = await fetchCurrencyConvert(
      state.currency.from.value,
      state.currency.to.value,
      state.currency.amount
    );

    return response.data;
  }
);

export const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    inverse: (state) => {
      const from = state.from;
      const to = state.to;

      state.from = to;
      state.to = from;
    },
    changeFrom: (state, action: PayloadAction<object>) => {
      state.from = action.payload;
    },
    changeTo: (state, action: PayloadAction<object>) => {
      state.to = action.payload;
    },
    changeAmount: (state, action: PayloadAction<number>) => {
      state.amount = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(convertAsync.pending, (state) => {
        state.loader = true;
        state.result = {};
      })
      .addCase(convertAsync.fulfilled, (state, action) => {
        state.result = action.payload;
        state.loader = false;
      })
      .addCase(convertAsync.rejected, (state) => {
        state.loader = false;
      });
  },
});

export const { inverse, changeFrom, changeAmount, changeTo } =
  currencySlice.actions;

export const selectCurrency = (state: RootState) => ({
  from: state.currency.from,
  to: state.currency.to,
  amount: state.currency.amount,
  loader: state.currency.loader,
  result: state.currency.result,
});

export default currencySlice.reducer;
