import { memo } from "react";
import ReactSelect from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Select = () => {
  const styles = {
    control: (base: any) => ({}),
  };

  return (
    <ReactSelect
      classNamePrefix="input"
    //   styles={styles}
      
      options={options}
    />
  );
};

export default memo(Select);
