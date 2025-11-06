import { Outlet } from "react-router-dom";
import Header from "../component/Navbars/Navbar";
import Footer from "../component/Footer";

const AuthLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export default AuthLayout;
