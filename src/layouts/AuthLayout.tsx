import { Outlet } from "react-router-dom";

import "../styles/layouts/AuthLayout.css";
import Navbar from "../components/Navbar";
import { Fragment, useState } from "react";
import { TypeOptions } from "react-toastify/dist/types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AuthLayout() {
  function showToast(toastMessage: string, toastType: TypeOptions) {
    toast(toastMessage, {
      type: toastType,
    });
  }

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
          <Outlet context={{ showToast }} />
        </section>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Fragment>
  );
}

export default AuthLayout;
