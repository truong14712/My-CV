import getRandomColor from "../../utils/getRandomColor";
import { setCurrentColor } from "../features/colorSlice";

export const updateColorAsync = () => (dispatch) => {
  const intervalId = setInterval(() => {
    dispatch(setCurrentColor(getRandomColor()));
  }, 3000);

  return () => clearInterval(intervalId);
};
