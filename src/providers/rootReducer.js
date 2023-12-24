import { combineReducers } from "@reduxjs/toolkit";
import colorReducer from "./features/colorSlice";

const rootReducer = combineReducers({
  color: colorReducer,
});

export default rootReducer;
