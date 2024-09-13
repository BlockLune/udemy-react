import logoImg from "../assets/logo.jpg";
import Button from "./ui/Button";
import { useContext } from "react";
import CartContext from "../store/CartContext";

export default function Header() {
  const cartCtx = useContext(CartContext);
  const totalCartItems = cartCtx.items.reduce(
    (totalNumberOfItems, item) => totalNumberOfItems + item.quantity,
    0
  );
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} />
        <h1>React Food</h1>
      </div>
      <nav>
        <Button textOnly> Cart ({totalCartItems})</Button>
      </nav>
    </header>
  );
}
