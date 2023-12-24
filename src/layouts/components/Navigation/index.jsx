import { Link, useLocation } from "react-router-dom";
import TabNavigation from "../../../components/TabNavigation";
const Navigation = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div className="relative ">
      <div className="fixed transform -translate-x-1/2 bottom-5 2xl:w-1/6 left-1/2 flex items-center">
        <ul className="flex items-center bg-white border drop-shadow-lg rounded-[20px] px-4 cursor-pointer opacity-95 z-10 justify-center py-2">
          {TabNavigation.map((item, index) => {
            return (
              <li
                key={index}
                className={currentPath == item.path && "text-blue-500"}
                title={item.title}
                style={{
                  padding: "0 20px",
                }}
              >
                <Link to={item.path}>{item.icon}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
