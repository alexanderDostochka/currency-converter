import { memo } from "react";
import { ReactComponent as LogoSVG } from "../../logo.svg";

const Header = () => (
  <header>
    <div className="container">
      <LogoSVG />
      <nav>
        <div>erger</div>
        <div>gtrg</div>
      </nav>
    </div>
  </header>
);

export default memo(Header);
