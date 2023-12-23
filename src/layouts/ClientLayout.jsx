import { Outlet } from "react-router";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

const ClientLayout = () => {
  return (
    <div className="">
      <Header />
      <Navigation />
      <Outlet />
    </div>
  );
};

export default ClientLayout;
