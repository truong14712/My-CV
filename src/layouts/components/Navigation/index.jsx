import { Link } from "react-router-dom";
import TabNavigation from "../../../components/TabNavigation";
import { selectTheme } from "../../../providers/features/themeSlice";
import { useSelector } from "react-redux";

const Navigation = () => {
  const checked = useSelector(selectTheme);

  return (
    <div className="relative z-50">
      <div
        className={
          "fixed -translate-x-1/2 bottom-5 2xl:w-[240px] left-1/2 flex items-center bg-white bg-opacity-60 backdrop-blur-lg rounded-[16px] shadow-lg sm: w-full "
        }
      >
        <ul
          className={
            checked
              ? "flex items-center border rounded-[16px] px-4 justify-center py-2 w-full sm:w-full sm:justify-around md:justify-between"
              : "flex items-center border rounded-[16px] px-4 justify-center py-2 w-full sm:w-full sm:justify-around text-white md:justify-around"
          }
        >
          {TabNavigation.map((item, index) => {
            return (
              <Link
                key={index}
                className={`hover:from-sky-500 hover:to-indigo-500 hover:bg-gradient-to-r  hover:text-white`}
                title={item.title}
                style={{
                  padding: "6px 24px",
                  borderRadius: "16px",
                  margin: "0px 20px",
                }}
                to={item.path}
              >
                <span>{item.icon}</span>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
