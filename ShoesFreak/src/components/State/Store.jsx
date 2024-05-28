import { configureStore } from "@reduxjs/toolkit";
import CheckOutReducer from "./Slice/CheckOutSlice";
import CartReducer from "./Slice/CartSlice";

export const store = configureStore({
  reducer: {
    checkout: CheckOutReducer,
    cart: CartReducer,
  },
});
