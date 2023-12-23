import { combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice";

const rootReducer = combineReducers({
  [counterSlice.name]: counterSlice.reducer,
});

export default rootReducer;
