import { selectCurrentColor } from "../../../providers/features/colorSlice";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../providers/features/themeSlice";

const Education = () => {
  const currentColor = useSelector(selectCurrentColor);
  const checked = useSelector(selectTheme);

  return (
    <div className="my-[25px] py-[25px] sm:p-3 md:p-3">
      <div
        className="text-3xl font-semibold text-center"
        style={{
          color: currentColor,
          transition: "color 2s ease",
        }}
      >
        Education
      </div>
      <div className="flex items-center justify-between sm:flex-col">
        <div
          className="text-2xl px-1"
          style={{
            transition: "color 2s ease",
            color: currentColor,
          }}
        >
          FPT Polytechnic College in Hanoi
        </div>
        <div
          style={{
            transition: "color 2s ease",
            color: currentColor,
          }}
          className="sm:my-1"
        >
          2021-2023
        </div>
      </div>
      <div
        className={
          checked ? "my-3 text-lg w-[90%]" : "my-3 text-lg w-[90%] text-white"
        }
      >
        Because I like interfaces and functional programming, I majored in
        front-end
      </div>
      <div
        className={
          checked ? "my-3 text-lg w-[90%]" : "my-3 text-lg w-[90%] text-white"
        }
      >
        I really enjoy my school, where I make new friends and we study
        together. I also had moments standing on lectern to teach my classmates
        about programming.
      </div>

      <div
        className={
          checked ? "my-3 text-lg w-[90%]" : "my-3 text-lg w-[90%] text-white"
        }
      >
        After 2 years and 4 months of college, I succeeded with my graduation
        thesis on programming:{" "}
        <span
          style={{
            background: currentColor,
            transition: "background 2s ease",
            color: "#fff",
          }}
          className="px-1 text-xl font-medium"
        >
          ReactJS and NodeJS
        </span>
        , building job searches and applying for jobs.
      </div>
      <div
        className={
          checked ? "my-3 text-lg w-[90%]" : "my-3 text-lg w-[90%] text-white"
        }
      >
        I received an excellent degree with an average score of 8.5.
      </div>
    </div>
  );
};

export default Education;
