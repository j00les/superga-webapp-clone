import { createBrowserRouter, redirect } from "react-router-dom";
import CategoryPage from "../pages/CategoryPage";
import { DetailPage } from "../pages/DetailPage";
import { InvoicePage } from "../pages/InvoicePage";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "detail/:id", element: <DetailPage /> },

      {
        path: "/category/:category",
        element: <CategoryPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
        //navguard
        // loader: () => {
        //   if (localStorage.getItem("access_token")) {
        //     throw redirect("/");
        //   }
        // },
      },

      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "/invoice",
    element: <InvoicePage />,
  },
]);

export default router;
