import CartButton from "../Cart/CartButton";
import classes from "./MainHeader.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-state";

const MainHeader = () => {
  const dispatch = useDispatch();

  const cartHandler = () => {
    dispatch(cartActions.toggleCart());
  };

  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li onClick={cartHandler}>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
