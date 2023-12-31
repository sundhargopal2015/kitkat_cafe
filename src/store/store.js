import { configureStore } from "@reduxjs/toolkit";
import cartReducers from "./cartReducers";

export const store = configureStore({
  reducer: { cart: cartReducers },
});
