import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import ProductSlice from "./ProductSlice";
import CheckoutSlice from "./CheckoutSlice";

const store = configureStore({
  reducer: {
    cart: CartSlice,
    products: ProductSlice,
    checkout: CheckoutSlice
  },
});
export default store;
