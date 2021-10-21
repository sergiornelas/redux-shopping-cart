import { useEffect } from "react";
import classes from "./CartItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-state";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, total, price } = props.item;

  const cartItems = useSelector((state) => state.cart);

  const increaseQuantity = (index) => {
    dispatch(cartActions.addQuantity(index));
  };

  const removeQuantity = (index) => {
    dispatch(cartActions.removeQuantity(index));
  };

  useEffect(() => {
    if (cartItems[props.id].quantity < 1) {
      return dispatch(cartActions.removeItem(props.id));
    }
  }, [cartItems, dispatch, props.id]);

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}
          <span className={classes.itemprice}>(${price}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={() => removeQuantity(props.id)}>-</button>
          <button onClick={() => increaseQuantity(props.id)}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
