import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import _ from "lodash";
import { currency } from "../../constants/currency";

export interface CurrencyState {
  from: Object | undefined;
  to: Object | undefined;
  amount: number;
}

const initialState: CurrencyState = {
  from: _.first(currency),
  to: _.last(currency),
  amount: 1,
};

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

      if (_.isEqual(action.payload, state.to)) {
        state.to = _.first(_.filter(currency, (item) => !_.isEqual(action.payload, item)));
      }
    },
    changeTo: (state, action: PayloadAction<object>) => {
      state.to = action.payload;
    },
    changeAmount: (state, action: PayloadAction<number>) => {
      state.amount = action.payload;
    },
  },
});

export const { inverse, changeFrom, changeAmount, changeTo } =
  currencySlice.actions;

export const selectCurrency = (state: RootState) => ({
  from: state.currency.from,
  to: state.currency.to,
  amount: state.currency.amount,
});

export default currencySlice.reducer;
