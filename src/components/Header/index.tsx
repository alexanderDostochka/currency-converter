import { filterSelectCurrency } from "../../helpers/currencyFilter";
import {
  changeFrom,
  convertAsync,
  selectCurrency,
} from "../../redux/features/currencySlice";
import { fetchExchangeRatesAsync } from "../../redux/features/exchangeRatesSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { ReactComponent as LogoSVG } from "../../svg/logo.svg";
import Select from "../Select";
import Navigation from "./Navigation";

interface HeaderInterface {
  isUpdateRates?: boolean;
}

const Header = ({ isUpdateRates = false }: HeaderInterface) => {
  const currentCurrency = useAppSelector(selectCurrency);
  const dispatch = useAppDispatch();

  return (
    <header>
      <div className="container">
        <div className="left">
          <div className="logo">
            <LogoSVG />
          </div>
          <Navigation />
        </div>
        <Select
          onChange={(valueObject) => {
            dispatch(changeFrom(valueObject));
            dispatch(convertAsync());
            if (isUpdateRates) dispatch(fetchExchangeRatesAsync());
          }}
          value={currentCurrency.from}
          defaultValue={currentCurrency.from}
          options={filterSelectCurrency(currentCurrency.to)}
        />
      </div>
    </header>
  );
};

export default Header;
