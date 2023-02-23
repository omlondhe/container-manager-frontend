import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/components/Navbar.css";
import { Fragment, useEffect } from "react";
import { useContextValue } from "../context/StateProvider";
import jwtDecode from "jwt-decode";
import { actionTypes } from "../context/reducer";
import LogoutIcon from "@mui/icons-material/LogoutRounded";
import { IconButton } from "@mui/material";
import Space from "./Space";

const paths = {
  home: `/`,
  login: `/auth/login`,
  signup: `/auth/signup`,
  dashboard: `/dashboard`,
  history: `/history`,
};

function Navbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
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
    } else navigate(`/dashboard`, { replace: true });
  }, [user]);

  function logout() {
    localStorage.clear();
    window.location.reload();
    navigate(`/`, { replace: true });
  }

  return (
    <nav className="navbar">
      <div className="navbar__title__section">
        <span className="navbar__title">ConMan</span>
        <span className="navbar__subtitle">Manage all your containers!</span>
      </div>
      <div className="navbar__actions">
        {pathname === paths.login ||
        pathname === paths.signup ||
        (pathname === paths.home && !user) ? (
          pathname === paths.home ? (
            <Fragment>
              <Link to={`/auth/login`} className="navbar__link">
                Log in
              </Link>
              <Link to={`/auth/signup`} className="navbar__link">
                Sign up
              </Link>
            </Fragment>
          ) : (
            <Fragment>
              <Link to={`/`} className="navbar__link">
                Home
              </Link>
              {pathname === paths.login ? (
                <Link to={`/auth/signup`} className="navbar__link">
                  Sign up
                </Link>
              ) : (
                <Link to={`/auth/login`} className="navbar__link">
                  Log in
                </Link>
              )}
            </Fragment>
          )
        ) : (
          <Fragment>
            {pathname === paths.history ? (
              <Link to={`/dashboard`} className="navbar__link">
                Dashboard
              </Link>
            ) : (
              <Link to={`/history`} className="navbar__link">
                History
              </Link>
            )}
            <Space width={7} />
            <IconButton onClick={logout}>
              <LogoutIcon />
            </IconButton>
          </Fragment>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
