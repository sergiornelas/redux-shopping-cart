import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-state";

const ProductItem = (props) => {
  const { title, price, description } = props;
  const itemsCart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addToCart = () => {
    let item;

    for (let elem of itemsCart) {
      if (elem.title === title) {
        return dispatch(cartActions.addQuantity(itemsCart.indexOf(elem)));
      }
    }
    item = {
      title: title,
      price: price,
      quantity: 1,
    };

    dispatch(cartActions.addItem(item));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
