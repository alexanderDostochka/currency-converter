import CurrencyInput from "react-currency-input-field";
import Button from "../../components/Button";
import Select from "../../components/Select";
import { currency } from "../../constants/currency";
import translation from "../../constants/translate";
import { ReactComponent as InverseSVG } from "../../svg/inverse.svg";
import {
  selectCurrency,
  inverse,
  changeAmount,
  changeFrom,
  changeTo,
} from "../../redux/features/currencySlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import _ from "lodash";

const FormConverter = () => {
  const currentCurrency = useAppSelector(selectCurrency);
  const dispatch = useAppDispatch();

  const filterSelectCurrency = (selectedCurrency: Object | undefined) =>
    _.filter(currency, (item) => !_.isEqual(selectedCurrency, item));

  return (
    <div className="form">
      <div className="form-group">
        <label>{translation.home.inputs.lables.amount}</label>
        <CurrencyInput
          value={currentCurrency.amount}
          onValueChange={(value) => dispatch(changeAmount(Number(value)))}
          allowNegativeValue={false}
          groupSeparator="."
          className="input"
          prefix={_.get(currentCurrency.from, "symbol")}
        />
      </div>
      <div className="form-group">
        <label>{translation.home.inputs.lables.from}</label>
        <Select
          onChange={(valueObject) => dispatch(changeFrom(valueObject))}
          value={currentCurrency.from}
          defaultValue={currentCurrency.from}
          options={filterSelectCurrency(currentCurrency.to)}
        />
      </div>
      <div className="inverse-button">
        <Button onClick={() => dispatch(inverse())}>
          <InverseSVG />
        </Button>
      </div>
      <div className="form-group">
        <label>{translation.home.inputs.lables.to}</label>
        <Select
          onChange={(valueObject) => dispatch(changeTo(valueObject))}
          value={currentCurrency.to}
          defaultValue={currentCurrency.to}
          options={filterSelectCurrency(currentCurrency.from)}
        />
      </div>
    </div>
  );
};

export default FormConverter;
