import { Outlet, useLocation } from "react-router-dom";

import Footer from "../../Components/Footer/Footer";

import Navber from "../../Components/Navber/Navber";
import { Toaster } from "react-hot-toast";

const Root = () => {
  const location = useLocation().pathname.includes("login");
  const locationSign = useLocation().pathname.includes("register");

  return (
    <>
      <div className="w-full ">
        {locationSign || location || <Navber />}
        <div className="max-w-screen-xl m-auto">
          <Outlet />
          {locationSign || location ||  <Footer />}
          <Toaster />
        </div>
      </div>
    </>
  );
};

export default Root;
