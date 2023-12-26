import { combineReducers } from "@reduxjs/toolkit";
import colorReducer from "./features/colorSlice";
import themeReducer from "./features/themeSlice";

const rootReducer = combineReducers({
  color: colorReducer,
  theme: themeReducer,
});

export default rootReducer;
