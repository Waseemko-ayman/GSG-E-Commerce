import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/products";
import { cartSlice } from "./slices/cartItem";

export default configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice,
  },
});
