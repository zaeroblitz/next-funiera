import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

const initialState = {
  isCartActive: false,
};

const cartDisplaySlice = createSlice({
  name: "cartDisplaySlice",
  initialState,
  reducers: {
    turnOnCartDisplay: (state) => {
      state.isCartActive = true;
    },
    turnOffCartDisplay: (state) => {
      state.isCartActive = false;
    },
  },
});

export default cartDisplaySlice.reducer;
export const { turnOnCartDisplay, turnOffCartDisplay } =
  cartDisplaySlice.actions;
export const cartDisplayStatus = (state: RootState) => state.cartDisplay;
