import "../navbar/navbar.css";
import { FiAlignJustify } from "react-icons/fi";
import Searche from "../../components/searche/searche";
import { SlBasket } from "react-icons/sl";
import { Link } from "react-router-dom";
import { MdOutlineFavoriteBorder } from "react-icons/md";
const Navbar = () => {
  return (
    <div className="navbar">
      <Link to={"/"} className="navbar__logo"  >
        <img
          src="https://alifshop.uz/_ipx/s_113x32/images/alifshop-logo.svg"
          alt=""
        />
      </Link>
      <div className="cataog">
        <div className="iconcatalog">
          <FiAlignJustify />
        </div>
        <h1 className="cataog__text">Tovarlar katalogi</h1>
      </div>
      <div className="searche">
        <Searche />
      </div>
      <Link to={"/basket"} className="basket">
        <SlBasket className="icbasket" />
        <p>Savat</p>
      </Link>
      <Link to={"/like"} className="favorite">
      <MdOutlineFavoriteBorder className="icfavorite" />
      <p>Sevimlilar</p>
      </Link>
      <Link to={'/avtr'} className="avtorizatsiya">
        <button className="button-avtor">
            Kirish
        </button>
      </Link>
      <div className="uzb__rus">
        <Link className="uzbrlink">Rus</Link>
        <h1>/</h1>
        <Link className="uzbrlink">Uzb</Link>
      </div>
    </div>
  );
};

export default Navbar;
