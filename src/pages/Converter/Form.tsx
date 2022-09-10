import CurrencyInput from "react-currency-input-field";
import Select from "../../components/Select";
import translation from "../../constants/translate";

const FormConverter = () => {
  return (
    <form>
      <div className="form-group">
        <label>{translation.home.inputs.lables.amount}</label>
        <CurrencyInput
          allowNegativeValue={false}
          groupSeparator="."
          className="input"
          prefix="$"
        />
      </div>
      <div className="form-group">
        <label>{translation.home.inputs.lables.from}</label>
        <Select />
      </div>
      <div className="form-group">
        <label>{translation.home.inputs.lables.to}</label>
        <Select />
      </div>
    </form>
  );
};

export default FormConverter;
