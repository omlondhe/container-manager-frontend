import { Link, useLocation } from "react-router-dom";
import "../styles/components/Navbar.css";
import { Fragment } from "react";

const paths = {
  login: "/auth/login",
  signup: "/auth/signup",
};

function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar__title__section">
        <span className="navbar__title">ConMan</span>
        <span className="navbar__subtitle">Manage all your containers!</span>
      </div>
      <div className="navbar__actions">
        {pathname === paths.login || pathname === paths.signup ? (
          <Fragment>
            <Link to={`/auth/login`} className="navbar__link">
              Log in
            </Link>
            <Link to={`/auth/signup`} className="navbar__link">
              Sign up
            </Link>
          </Fragment>
        ) : null}
        {pathname !== paths.login && pathname !== paths.signup ? (
          <p className="navbar__link">Log out</p>
        ) : null}
      </div>
    </nav>
  );
}

export default Navbar;
