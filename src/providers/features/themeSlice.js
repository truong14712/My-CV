// themeSlice.js
import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    checked: true,
  },
  reducers: {
    toggleTheme: (state) => {
      state.checked = !state.checked;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export const selectTheme = (state) => state.theme.checked;
export default themeSlice.reducer;
