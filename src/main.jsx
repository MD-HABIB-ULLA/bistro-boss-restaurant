import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Layout/Root/Root";
import Home from "./Pages/Home/Home";
import Menu from "./Pages/Menu/Menu";
import OurMenu from "./Pages/OurMenu/OurMenu";
import Login from "./Pages/Login/Login";
import Ragister from "./Pages/Ragister/Ragister";
import AuthProvider from "./Provider/AuthProvider";
import PrivateRoute from "./Private/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "menu",
        element: (
          <PrivateRoute>
            <Menu />
          </PrivateRoute>
        ),
      },
      {
        path: "shop/:category",
        element: (
          <PrivateRoute>
            <OurMenu />
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Ragister />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
