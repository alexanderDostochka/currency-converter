import classNames from "classnames";
import { memo } from "react";

interface BoxInterface {
  children: React.ReactNode;
  className?: Array<string>;
}

const Box = ({ children, className = [] }: BoxInterface) => (
  <div className={classNames(["box", ...className])}>{children}</div>
);

export default memo(Box);
