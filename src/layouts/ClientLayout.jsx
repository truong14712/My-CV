import { Outlet } from "react-router";
import Header from "./components/Header";
const ClientLayout = () => {
  return (
    <div className="">
      <Header />
      <Outlet />
    </div>
  );
};

export default ClientLayout;
