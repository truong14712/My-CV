import { selectCurrentColor } from "../../../providers/features/colorSlice";
import { useSelector } from "react-redux";

const Signature = () => {
  const currentColor = useSelector(selectCurrentColor);

  return (
    <div>
      <div
        className="pb-[3rem] flex items-center justify-between text-[5.5rem] uppercase font-mono space-y-2"
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
    </div>
  );
};

export default Signature;
