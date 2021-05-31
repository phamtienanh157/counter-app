import PropsType from "prop-types";
import cart from "../assets/images/cart.svg";
import "./Navbar.scss";
Navbar.prototype = {
  number: PropsType.number,
};
export default function Navbar(props) {
  return (
    <nav>
      <img src={cart} alt="cart" />
      <span class="badge rounded-pill bg-info text-dark">{props.number}</span>
    </nav>
  );
}
