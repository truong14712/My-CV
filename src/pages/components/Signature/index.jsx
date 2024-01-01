import { selectCurrentColor } from "../../../providers/features/colorSlice";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../providers/features/themeSlice";

const Signature = () => {
  const currentColor = useSelector(selectCurrentColor);
  const checked = useSelector(selectTheme);

  return (
    <footer>
      <div
        className="flex items-center justify-between text-[5.5rem] uppercase font-mono space-y-2 sm:p-2 leading-10 mt-[3rem] sm:text-[2.5rem] md:p-2"
        style={{
          color: currentColor,
          transition: "color 2s ease",
        }}
      >
        <span>m</span>
        <span>i</span>
        <span>n</span>
        <span>t</span>
        <span>r</span>
        <span>u</span>
        <span>d</span>
        <span>e</span>
        <span>v</span>
      </div>
      <div
        className={
          checked
            ? "flex items-center justify-between text-sm py-[4rem] sm:justify-center"
            : "flex items-center justify-between text-sm py-[4rem] sm:justify-center text-white font-medium"
        }
      >
        <div>Copyright © 2021 - Present, Minh Truong</div>
        <div className="sm:hidden md:hidden">#WEB</div>
        <div className="sm:hidden">#FRONTEND</div>
        <div className="sm:hidden">#BACKEND</div>
        <div className="sm:hidden md:hidden">#DEVELOPER</div>
      </div>
    </footer>
  );
};

export default Signature;
