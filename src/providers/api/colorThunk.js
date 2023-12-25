import getRandomColor from "../../utils/getRandomColor";
import { setCurrentColor } from "../features/colorSlice";

export const updateColorAsync = () => (dispatch) => {
  const intervalId = setInterval(() => {
    dispatch(setCurrentColor(getRandomColor()));
  }, 4000);

  return () => clearInterval(intervalId);
};
