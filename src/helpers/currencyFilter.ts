import _ from "lodash";
import { currency } from "../constants/currency";

// Filter is needed so that the user cannot convert the currency to itself
export const filterSelectCurrency = (selectedCurrency: Object | undefined) =>
  _.filter(currency, (item) => !_.isEqual(selectedCurrency, item));
