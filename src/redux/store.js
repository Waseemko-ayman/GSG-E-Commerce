import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/products";
import { cartSlice } from "./slices/cartItem";
import currencysSlice from "./slices/currencys";

export default configureStore({
  reducer: {
    products: productsSlice,
    currencys: currencysSlice,
    cart: cartSlice,
  },
});
