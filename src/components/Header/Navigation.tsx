import { NavLink } from "react-router-dom";
import { routes } from "../../constants/routes";
import translation from "../../constants/translate";

interface activeClassInterface {
  isActive: boolean;
}

const Navigation = () => {
  const activeClassName = ({ isActive }: activeClassInterface) =>
    isActive ? "active" : undefined;

  return (
    <nav>
      <NavLink to={routes.home} className={activeClassName}>
        {translation.routes.home}
      </NavLink>
      <NavLink to={routes.exchangeRates} className={activeClassName}>
        {translation.routes.exchangeRates}
      </NavLink>
    </nav>
  );
};

export default Navigation;
