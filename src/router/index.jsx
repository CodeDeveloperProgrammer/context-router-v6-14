import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import LayoutRoot from "../layout/LayoutRoot";
import LayoutPrivate from "../layout/LayoutPrivate";
import Dashboard from "../pages/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutRoot />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <LayoutPrivate />,
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
        ],
      },
    ],
  },
]);
