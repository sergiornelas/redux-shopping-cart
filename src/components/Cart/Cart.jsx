import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItemValues = useSelector((state) => state.cart);

  const cartItems = cartItemValues.map((item) => {
    return (
      <CartItem
        key={cartItemValues.indexOf(item)}
        item={{
          title: item.title,
          quantity: item.quantity,
          total: item.quantity * item.price,
          price: item.price,
        }}
        id={cartItemValues.indexOf(item)}
      />
    );
  });

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{cartItems}</ul>
    </Card>
  );
};

export default Cart;
