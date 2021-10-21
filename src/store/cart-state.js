import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showCart: false,
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    removeItem(state, action) {
      state.cart.splice(action.payload, 1);
    },
    addQuantity(state, action) {
      //expects element ID
      state.cart[action.payload].quantity++;
    },
    removeQuantity(state, action) {
      //expects element ID
      state.cart[action.payload].quantity--;
    },
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
