import "../searche/searche.css";
import { BsSearch } from "react-icons/bs";
const Seache = () => {
  return (
    <form className="search">
      <input type="text" className="search__input" placeholder="Tovarlarni izlang" />
      <button className="search__button">
      <BsSearch  className="btsear"/>
      </button>
    </form>
  );
};
export default Seache;
