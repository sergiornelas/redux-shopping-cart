import classes from "./CartButton.module.css";
import { useSelector } from "react-redux";

const CartButton = () => {
  const itemsCount = useSelector((state) => state.cart);

  let count = 0;
  itemsCount.forEach((element) => {
    count += element.quantity;
  });

  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{count}</span>
    </button>
  );
};

export default CartButton;
