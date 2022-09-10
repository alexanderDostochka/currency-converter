import { currency } from "../../constants/currency";
import { changeFrom, selectCurrency } from "../../redux/features/currencySlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { ReactComponent as LogoSVG } from "../../svg/logo.svg";
import Select from "../Select";
import Navigation from "./Navigation";

const Header = () => {
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
          onChange={(valueObject) => dispatch(changeFrom(valueObject))}
          value={currentCurrency.from}
          defaultValue={currentCurrency.from}
          options={currency}
        />
      </div>
    </header>
  );
};

export default Header;
