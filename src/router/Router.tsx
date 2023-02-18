import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import NotFound from "../pages/NotFound";
import AuthLayout from "../layouts/AuthLayout";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
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
]);

function Router() {
  return <RouterProvider router={router} fallbackElement={<NotFound />} />;
}

export default Router;
