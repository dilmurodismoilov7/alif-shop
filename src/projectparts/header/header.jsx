import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import './header.css'
import Swiper from "../../components/swiper/swiper";
const Header = () => {
    return (
        <div className="header">
            <div className="header__top__nav">
                <Link to={"/smartfon"} className="htnl">Smartfon va gadjetlar</Link>
                <Link to={"/noutbuk"} className="htnl">Noutbuklar,komyterlar</Link>
                <Link to={"/televizor"} className="htnl">TV va proektorlar</Link>
                <Link to={"/audio"} className="htnl">Audiotexnikalar</Link>
                <Link to={"/transport"} className="htnl">Transport</Link>
                <Link to={"/texnika"} className="htnl">Uy uchun texnika</Link>
                <Link to={"/oshxona"} className="htnl">Oshxona uchun texnika</Link>
                <Link to={"/gozallik"} className="htnl">Go'zallik va sog'</Link>
                <Link to={"/yana"} className="htnl1">Yana <FaAngleDown /></Link>
            </div>
            <div className="swiper">
                <Swiper />
            </div>
        </div>
    )
}    
export default Header