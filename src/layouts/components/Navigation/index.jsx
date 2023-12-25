import { Link, useLocation } from "react-router-dom";
import TabNavigation from "../../../components/TabNavigation";

const Navigation = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="relative">
      <div className="fixed -translate-x-1/2 bottom-5 2xl:w-[280px] left-1/2 flex items-center bg-white bg-opacity-50 backdrop-blur-lg rounded-[16px] shadow-lg sm: w-full">
        <ul className="flex items-center border rounded-[16px] px-4 justify-center py-2 w-full sm:w-full sm:justify-around ">
          {TabNavigation.map((item, index) => {
            return (
              <Link
                key={index}
                className={
                  currentPath == item.path &&
                  `bg-gradient-to-r from-sky-500 to-indigo-500 text-white rounded-[16px] ease-linear duration-300 sm:py-3 sm:px-5`
                }
                title={item.title}
                style={{
                  padding: "4px 20px",
                  borderRadius: "16px",
                  color: currentPath == item.path ? "#fff" : "#000",
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
