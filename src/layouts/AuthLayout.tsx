import { Outlet } from "react-router-dom";

import "../styles/layouts/AuthLayout.css";
import Navbar from "../components/Navbar";
import { Fragment } from "react";

function AuthLayout() {
  return (
    <Fragment>
      <video
        src="/media/videos/auth-background.mp4"
        autoPlay
        muted
        loop
        className="authLayout__background"
      ></video>
      <div className="authLayout">
        <Navbar />
        <section className="authLayout__section">
          <Outlet />
        </section>
      </div>
    </Fragment>
  );
}

export default AuthLayout;
