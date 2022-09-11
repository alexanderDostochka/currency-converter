import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import _ from "lodash";
import { fetchExchangeRates } from "../../apilayer";

export interface ExchangeRatesState {
  loader: boolean;
  result: Array<object>;
  search: string;
}

const initialState: ExchangeRatesState = {
  loader: true,
  result: [],
  search: "",
};

export const fetchExchangeRatesAsync = createAsyncThunk(
  "currency/fetchExchangeRates",
  async (_, { getState }) => {
    const state: any = getState();

    const response = await fetchExchangeRates(state.currency.from.value);

    return response.data;
  }
);

export const exchangeRatesSlice = createSlice({
  name: "exchangeRates",
  initialState,
  reducers: {
    changeSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchExchangeRatesAsync.pending, (state) => {
        state.loader = true;
        state.result = [];
      })
      .addCase(fetchExchangeRatesAsync.fulfilled, (state, action) => {
        state.result = action.payload;
        state.loader = false;
      })
      .addCase(fetchExchangeRatesAsync.rejected, (state) => {
        state.loader = false;
      });
  },
});

export const { changeSearch } = exchangeRatesSlice.actions;

export const selectExchangeRates = (state: RootState) => ({
  loader: state.exchangeRates.loader,
  result: state.exchangeRates.result,
  search: state.exchangeRates.search,
});

export default exchangeRatesSlice.reducer;
