import { API_LAYER_KEY } from "./constants/apilayer";
import axios from "axios";

const headers = {
  apikey: API_LAYER_KEY,
};

export const fetchCurrencyConvert = (
  from: string,
  to: string,
  amount: number
) =>
  axios.get(
    `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,
    {
      headers,
    }
  );
