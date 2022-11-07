import { configureStore } from "@reduxjs/toolkit";
import qtyReducer from "../slices/qtySlice";
import cartReducer from "../slices/cartSlice";
import cartDisplayReducer from "../slices/cartDisplaySlice";

const store = configureStore({
  reducer: {
    qty: qtyReducer,
    cart: cartReducer,
    cartDisplay: cartDisplayReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
