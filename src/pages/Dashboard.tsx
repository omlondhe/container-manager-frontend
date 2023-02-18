import jwtDecode from "jwt-decode";
import { actionTypes } from "../context/reducer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContextValue } from "../context/StateProvider";

function Dashboard() {
  const navigate = useNavigate();
  const [{ user }, dispatch] = useContextValue();

  useEffect(() => {
    if (!user) {
      const localStorageUser = localStorage.getItem(`user`);
      if (localStorageUser) {
        dispatch({
          type: actionTypes.SET_USER,
          payload: jwtDecode(localStorageUser),
        });
      } else navigate(`/auth/login`, { replace: true });
    }
  }, [user]);

  return <div>Dashboard</div>;
}

export default Dashboard;
