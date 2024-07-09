import { Link } from "react-router-dom";
import { MAIN_ROUTE, CARD_ROUTE, CARD_DETAILED_ROUTE } from "./MainRouter";

const Navbar: React.FC = () => {
  return (
    <div className="Navbar">
      <Link to={MAIN_ROUTE}>Card List</Link>
      <Link to={CARD_ROUTE}>Card</Link>
      <Link to={CARD_DETAILED_ROUTE}>Card detailed</Link>
    </div>
  );
};

export default Navbar;
