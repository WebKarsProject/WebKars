import { Link, useLocation } from "react-router-dom";
import motorsShop from "../../assets/Motors shop.png";

const Header = () => {
  let location = useLocation();
  return (
    <>
      <header>
        <img src={motorsShop} alt="logo" />
      </header>
    </>
  );
};
export default Header;
