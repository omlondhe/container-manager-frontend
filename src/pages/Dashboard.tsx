import jwtDecode from "jwt-decode";
import { actionTypes } from "../context/reducer";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContextValue } from "../context/StateProvider";
import DashboardCard from "../components/DashboardCard";
import { DataType } from "../utils/types";
import "../styles/pages/Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();
  const [{ user }, dispatch] = useContextValue();
  const [weight, setWeight] = useState<number>();
  const [data, setData] = useState<DataType[]>([new DataType()]);

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

  function setItemName(name: string, index: number) {
    data[index].name = name;
    setData([...data]);
  }
  function setItemCost(cost: string, index: number) {
    data[index].cost = cost;
    setData([...data]);
  }
  function setItemWeight(weight: string, index: number) {
    data[index].weight = weight;
    setData([...data]);
  }

  function addItem() {
    data.push(new DataType());
    setData([...data]);
  }

  return (
    <div className="dashboard">
      <div className="dashboard__cards">
        {data?.map((d, index) => (
          <DashboardCard
            key={index}
            index={index}
            data={d}
            setName={setItemName}
            setCost={setItemCost}
            setWeight={setItemWeight}
          />
        ))}
      </div>
      <button onClick={addItem} className="dashboard__button">
        Add an item
      </button>
    </div>
  );
}

export default Dashboard;
