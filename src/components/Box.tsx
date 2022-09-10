import { memo } from "react";

interface BoxInterface {
  children: React.ReactNode;
}

const Box = ({ children }: BoxInterface) => (
  <div className="box">{children}</div>
);

export default memo(Box);
