import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./cart-state";

const store = configureStore({
  reducer: cartSliceReducer,
});

export default store;
