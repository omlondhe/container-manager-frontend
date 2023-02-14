import { Outlet } from "react-router-dom";

import "../styles/layouts/AuthLayout.css";
import Navbar from "../components/Navbar";

function AuthLayout() {
  return (
    <div className="authLayout">
      <Navbar />
      <section className="authLayout__section">
        <Outlet />
      </section>
    </div>
  );
}

export default AuthLayout;
