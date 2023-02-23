import { Outlet, useNavigate } from "react-router-dom";

import "../styles/layouts/AuthLayout.css";
import Navbar from "../components/Navbar";
import { Fragment, useEffect } from "react";
import { TypeOptions } from "react-toastify/dist/types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContextValue } from "../context/StateProvider";
import { actionTypes } from "../context/reducer";
import jwtDecode from "jwt-decode";
import { ContextType, User } from "../context/types";

function AuthLayout() {
  const navigate = useNavigate();
  const [{ user }, dispatch] = useContextValue();

  useEffect(() => {
    if (!user) {
      const localStorageUser = localStorage.getItem(`user`);
      if (localStorageUser) {
        dispatch({
          type: actionTypes.SET_USER,
          payload: {
            ...jwtDecode(localStorageUser),
            token: localStorageUser,
          },
        });
        navigate(`/dashboard`, { replace: true });
      }
    }
  }, [user]);

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
