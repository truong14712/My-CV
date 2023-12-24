// src/features/colorSlice.js
import { createSlice } from "@reduxjs/toolkit";
import getRandomColor from "../../utils/getRandomColor";

const colorSlice = createSlice({
  name: "color",
  initialState: {
    currentColor: getRandomColor(),
  },
  reducers: {
    setCurrentColor: (state, action) => {
      state.currentColor = action.payload;
    },
  },
});

export const { setCurrentColor } = colorSlice.actions;
export const selectCurrentColor = (state) => state.color.currentColor;
export default colorSlice.reducer;
