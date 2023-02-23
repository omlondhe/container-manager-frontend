import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import NotFound from "../pages/NotFound";
import AuthLayout from "../layouts/AuthLayout";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import History from "../pages/History";
import AppLayout from "../layouts/AppLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <NotFound />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        errorElement: <NotFound />,
      },
      {
        path: "history",
        element: <History />,
        errorElement: <NotFound />,
      },
      {
        element: <AuthLayout />,
        errorElement: <NotFound />,
        children: [
          {
            path: "auth/login",
            element: <Login />,
          },
          {
            path: "auth/signup",
            element: <Signup />,
          },
        ],
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} fallbackElement={<NotFound />} />;
}

export default Router;
