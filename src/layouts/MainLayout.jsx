import { Outlet } from "react-router-dom";
import DashboardHeader from "../component/Navbars/dahsboardNavbar";
import Footer from "../component/Footer";
import DashboardSidebar from "../component/DashboardSidebar";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <DashboardSidebar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
