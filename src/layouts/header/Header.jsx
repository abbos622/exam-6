import { Link } from "react-router-dom";
import { Container } from "../../utils";
import { FcLike } from "react-icons/fc";
import { FaShoppingCart } from "react-icons/fa";
import "./Header.scss";
import Img from "../../assets/images/website_logo.webp";
import Nav from "../nav/Nav";

const Header = () => {
  return (
    <header>
      <div className="header">
        <Container>
          <div className="header">
            <Link to={"/"} className="header-call">CALL US TODAY 1800 10 10 52</Link>
            <ul className="header-menu">
              <li>
                <Link to={"/"}>About Us</Link>
              </li>

              <li>
                <Link to={"/"}> Buying Guides</Link>
              </li>
              <li>
                <Link to={"/"}>Delivery</Link>
              </li>
              <li>
                <Link to={"/"}>Contact Us</Link>
              </li>
              <li>
                <Link>Wholesale Registration</Link>
              </li>
            </ul>
          </div>
        </Container>
      </div>

      <Container>
        <div className="header-nav">
          <div className="header__min-wrapper">
            <Link to={"/"} className="header-logo">
              <img width={253} src={Img} alt="" />
            </Link>

            <input type="text" placeholder="Search..." />
          </div>

          <div className="add-to">
            <Link to="liked">{<FcLike />}</Link>
            <div className="header-cart">
              <Link to="cart">{<FaShoppingCart />}</Link>
              <span>10</span>
            </div>
          </div>
        </div>
      </Container>

        <Nav/>
    </header>
  );
};

export default Header;
