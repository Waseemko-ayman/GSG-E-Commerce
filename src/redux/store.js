import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/products";

export default configureStore({
  reducer: {
    products: productsSlice,
  },
});
