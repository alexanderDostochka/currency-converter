import CurrencyInput from "react-currency-input-field";
import Button from "../../components/Button";
import Select from "../../components/Select";
import translation from "../../constants/translate";
import { ReactComponent as InverseSVG } from "../../svg/inverse.svg";
import {
  selectCurrency,
  inverse,
  changeAmount,
  changeFrom,
  changeTo,
  convertAsync,
} from "../../redux/features/currencySlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import _ from "lodash";
import { filterSelectCurrency } from "../../helpers/currencyFilter";
import { useEffect } from "react";

const FormConverter = () => {
  const currentCurrency = useAppSelector(selectCurrency);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(convertAsync(currentCurrency.amount));
  }, []);

  const convertDebounced = _.debounce(
    () => dispatch(convertAsync(currentCurrency.amount)),
    300
  );

  const onValueChange = (value: string | undefined) => {
    dispatch(changeAmount(Number(value)));
    return convertDebounced();
  };

  return (
    <div className="form">
      <div className="form-group">
        <label>{translation.home.inputs.lables.amount}</label>
        <CurrencyInput
          value={currentCurrency.amount}
          onValueChange={onValueChange}
          allowNegativeValue={false}
          groupSeparator="."
          className="input"
          prefix={_.get(currentCurrency.from, "symbol")}
        />
        {currentCurrency.loader && <div className="mini-loader" />}
      </div>
      <div className="form-group">
        <label>{translation.home.inputs.lables.from}</label>
        <Select
          onChange={(valueObject) => {
            dispatch(changeFrom(valueObject));
          }}
          value={currentCurrency.from}
          defaultValue={currentCurrency.from}
          options={filterSelectCurrency(currentCurrency.to)}
        />
      </div>
      <div className="inverse-button">
        <Button
          onClick={() => {
            dispatch(inverse());
            dispatch(convertAsync(currentCurrency.amount));
          }}
        >
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
