import { NavLink } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";

const Navber = () => {
  const list = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-base font-bold    uppercase ${
            isActive ? "  text-yellow-400 inter" : "md:text-white"
          } `
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/contactinfo"
        className={({ isActive }) =>
          `text-base font-bold    uppercase ${
            isActive ? "  text-yellow-400 inter" : "md:text-white"
          } `
        }
      >
        CONTACT us
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          `text-base font-bold    uppercase ${
            isActive ? "  text-yellow-400 inter" : "md:text-white"
          } `
        }
      >
        DASHBOARD
      </NavLink>
      <NavLink
        to="/menu"
        className={({ isActive }) =>
          `text-base font-bold   uppercase ${
            isActive ? "  text-yellow-400 inter" : "md:text-white"
          } `
        }
      >
        Our Menu
      </NavLink>
    </>
  );
  return (
    <div className="bg-black bg-opacity-40  text-white w-full fixed z-10">
      <div className="drawer max-w-screen-xl m-auto">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar ">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2  ">
              <div className="flex flex-col">
                <p className="cinzel md:text-2xl text-xl">BISTRO BOSS</p>
                <p className="cinzel md:text-xl text-base w-full wide-text">
                  Restaurant
                </p>
              </div>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal space-x-3">
                {/* Navbar menu content here */}
                {list}
              </ul>
            </div>
            <ul className="menu menu-horizontal space-x-3">
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  `text-base font-bold flex items-center     uppercase ${
                    isActive ? "  text-yellow-400 inter" : "md:text-white"
                  } `
                }
              >
                Our Shop
                <img
                  src="https://i.ibb.co/cwMDtrm/151-1511569-cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png"
                  className="h-10 end-10"
                  alt=""
                />
              </NavLink>
              <NavLink className="md:text-white text-base font-bold flex items-center gap-1    uppercase">
                SIGN OUT <RxAvatar className="text-3xl  text-black  bg-white rounded-full"/>
              </NavLink>
            </ul>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200">
            {/* Sidebar content here */}
            <div className="flex flex-col text-center border-b-4 p-2">
              <p className="cinzel md:text-2xl text-xl">BISTRO BOSS</p>
              <p className="cinzel md:text-xl text-base w-full wide-text">
                Restaurant
              </p>
            </div>
            <div className="menu space-y-3 mt-3">{list}</div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navber;
