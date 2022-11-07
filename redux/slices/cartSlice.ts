import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

const initialState: CartProps = {
  items: [],
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItemProps>) => {
      const exist = state.items.find(
        (item) => item.product._id === action.payload.product._id
      );

      if (exist) {
        exist.qty += action.payload.qty;
      } else {
        const newItem = {
          product: action.payload.product,
          qty: action.payload.qty,
        };

        state.items.push(newItem);
      }
    },
    removeFromCart: (state, action: PayloadAction<Product>) => {
      state.items = state.items.filter(
        (item) => item.product._id !== action.payload._id
      );
    },
    incCartItemQty: (state, action: PayloadAction<Product>) => {
      const exist = state.items.find(
        (item) => item.product._id === action.payload._id
      );

      if (exist) {
        exist.qty += 1;
      }
    },
    decCartItemQty: (state, action: PayloadAction<Product>) => {
      const exist = state.items.find(
        (item) => item.product._id === action.payload._id
      );

      if (exist && exist.qty > 1) {
        exist.qty -= 1;
      }
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, incCartItemQty, decCartItemQty } =
  cartSlice.actions;
export const selectCartItems = (state: RootState) => state.cart;
