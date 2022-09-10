import _ from "lodash";
import { memo } from "react";
import ReactSelect, { SingleValue } from "react-select";

interface SelectInterface {
  options: Array<object>;
  defaultValue?: Object;
  value?: Object;
  onChange?: (e: SingleValue<any>) => void;
}

const Select = ({
  options = [],
  defaultValue = {},
  value = {},
  onChange = _.noop,
}: SelectInterface) => {
  return (
    <ReactSelect
      value={value}
      onChange={onChange}
      classNamePrefix="input"
      defaultValue={defaultValue}
      options={options}
    />
  );
};

export default memo(Select);
