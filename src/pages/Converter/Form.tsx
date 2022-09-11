import CurrencyInput from "react-currency-input-field";
import Button from "../../components/Button";
import Select from "../../components/Select";
import translation from "../../constants/translate";
import { ReactComponent as InverseSVG } from "../../svg/inverse.svg";
import {
  inverse,
  changeAmount,
  changeFrom,
  changeTo,
  convertAsync,
  CurrencyState,
} from "../../redux/features/currencySlice";
import { useAppDispatch } from "../../redux/hooks";
import _ from "lodash";
import { filterSelectCurrency } from "../../helpers/currencyFilter";
import { useEffect } from "react";

interface FormConverterInterface {
  currentCurrency: CurrencyState;
}

const FormConverter = ({ currentCurrency }: FormConverterInterface) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(convertAsync());
  }, []);

  const convertDebounced = _.debounce(() => dispatch(convertAsync()), 1000, {
    trailing: true,
    leading: false,
  });

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
            dispatch(convertAsync());
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
            dispatch(convertAsync());
          }}
        >
          <InverseSVG />
        </Button>
      </div>
      <div className="form-group">
        <label>{translation.home.inputs.lables.to}</label>
        <Select
          onChange={(valueObject) => {
            dispatch(changeTo(valueObject));
            dispatch(convertAsync());
          }}
          value={currentCurrency.to}
          defaultValue={currentCurrency.to}
          options={filterSelectCurrency(currentCurrency.from)}
        />
      </div>
    </div>
  );
};

export default FormConverter;
