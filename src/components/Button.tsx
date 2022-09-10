import classNames from "classnames";
import _ from "lodash";

interface ButtonInterface {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler;
}

const Button = ({
  children,
  className = "default",
  onClick = _.noop,
}: ButtonInterface) => (
  <button className={classNames(className)} {...{ onClick }}>
    {children}
  </button>
);

export default Button;
