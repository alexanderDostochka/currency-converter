import _ from "lodash";
import { useEffect } from "react";
import Box from "../../components/Box";
import translate from "../../constants/translate";
import PageLayout from "../../layouts/Page";
import { selectCurrency } from "../../redux/features/currencySlice";
import {
  changeSearch,
  fetchExchangeRatesAsync,
  selectExchangeRates,
} from "../../redux/features/exchangeRatesSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import ExchangeRatesList from "./List";

const ExchangeRates = () => {
  const dispatch = useAppDispatch();
  const exchangeRates = useAppSelector(selectExchangeRates);
  const currentCurrency = useAppSelector(selectCurrency);

  useEffect(() => {
    dispatch(fetchExchangeRatesAsync());
  }, []);

  const onChangeSearch = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch(changeSearch(e.currentTarget.value));
  };

  return (
    <PageLayout isUpdateRates={true} name="exchange-rates-page">
      <div className="container">
        <div className="application-name">
          <h1>
            {translate.exchangeRates.title}{" "}
            {`1 ${_.get(currentCurrency.from, "value")}`}
          </h1>
          <p>{translate.exchangeRates.description}</p>
        </div>
        <div className="rates-box">
          <Box className={["rates-search"]}>
            <input
              value={exchangeRates.search}
              onChange={onChangeSearch}
              disabled={exchangeRates.loader}
              className="input"
              placeholder={translate.exchangeRates.inputs.search}
            />
          </Box>
          <Box className={["rates-container"]}>
            {exchangeRates.loader ? (
              <div className="mini-loader" />
            ) : (
              ExchangeRatesList(
                _.get(exchangeRates, "result.rates"),
                exchangeRates.search
              )
            )}
          </Box>
        </div>
      </div>
    </PageLayout>
  );
};

export default ExchangeRates;
