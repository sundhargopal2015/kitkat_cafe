import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = {
  cartValues: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    addProduct: (state, action) => {
      const productIndex = state.cartValues.findIndex(
        (cartItems) => cartItems.productId === action.payload
      );
      if (productIndex !== -1) {
        state.cartValues[productIndex].count =
          state.cartValues[productIndex].count + 1;
      } else {
        state.cartValues.push({
          productId: action.payload,
          count: 1,
        });
      }
    },

    removeProduct: (state, action) => {
      //
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
