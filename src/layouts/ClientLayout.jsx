import { Outlet } from "react-router";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import TopScroll from "./components/TopScroll";

const ClientLayout = () => {
  return (
    <div className="">
      <Header />
      <Navigation />
      <TopScroll />
      <Outlet />
    </div>
  );
};

export default ClientLayout;
