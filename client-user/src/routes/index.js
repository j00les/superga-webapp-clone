import { createBrowserRouter, Route } from "react-router-dom";
import { DetailPage } from "../pages/DetailPage";
import { InvoicePage } from "../pages/InvoicePage";
import LandingPage from "../pages/LandingPage";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "detail/:id", element: <DetailPage /> },
    ],
  },
  {
    path: "/invoice",
    element: <InvoicePage />,
  },
]);

export default router;
