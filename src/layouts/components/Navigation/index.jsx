import { Link, useLocation } from "react-router-dom";
import TabNavigation from "../../../components/TabNavigation";

const Navigation = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="relative ">
      <div className="fixed transform -translate-x-1/2 bottom-5 2xl:w-1/6 left-1/2 flex items-center">
        <ul className="flex items-center bg-white border drop-shadow-lg rounded-[16px] px-4 cursor-pointer opacity-95 z-10 justify-center py-2">
          {TabNavigation.map((item, index) => {
            return (
              <Link
                key={index}
                className={
                  currentPath == item.path &&
                  `bg-gradient-to-r from-sky-500 to-indigo-500  text-white rounded-[16px] ease-linear duration-300`
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
