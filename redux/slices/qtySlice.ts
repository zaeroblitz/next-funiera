import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

interface qtyProps {
  value: number;
}

const initialState: qtyProps = {
  value: 1,
};

const qtySlice = createSlice({
  name: "qtySlice",
  initialState,
  reducers: {
    incQty: (state) => {
      state.value += 1;
    },
    decQty: (state) => {
      state.value -= 1;
    },
    resetQty: (state) => {
      state.value = 1;
    },
  },
});

export default qtySlice.reducer;
export const { incQty, decQty, resetQty } = qtySlice.actions;
export const selectQty = (state: RootState) => state.qty.value;
