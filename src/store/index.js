import { configureStore } from "@reduxjs/toolkit";
// import cartSliceReducer from "./cart-state";
import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
