import App from "../pages/App";
import { StateProvider } from "../context/StateProvider";
import Navbar from "../components/Navbar";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <Fragment>
      <Navbar />
      <Outlet />
    </Fragment>
  );
}

export default AppLayout;
