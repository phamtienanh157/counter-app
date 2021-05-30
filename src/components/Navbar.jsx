import cart from "../assets/images/cart.svg";
import "./Navbar.scss";
export default function Navbar() {
  return (
    <nav>
      <img src={cart} alt="cart" />
      <span class="badge rounded-pill bg-info text-dark">0</span>
    </nav>
  );
}
