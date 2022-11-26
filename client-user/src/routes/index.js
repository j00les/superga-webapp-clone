import { createBrowserRouter } from "react-router-dom";
import CategoryPage from "../pages/CategoryPage";
import { DetailPage } from "../pages/DetailPage";
import { InvoicePage } from "../pages/InvoicePage";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
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
    ],
  },
  {
    path: "/invoice",
    element: <InvoicePage />,
  },

  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default router;
