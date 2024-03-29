import jwtDecode from "jwt-decode";
import { actionTypes } from "../context/reducer";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContextValue } from "../context/StateProvider";
import DashboardCard from "../components/DashboardCard";
import { CalculationTypes, DataType } from "../utils/types";
import "../styles/pages/Dashboard.css";
import Navbar from "../components/Navbar";
import Space from "../components/Space";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import InputField from "../components/InputField";
import { ContextType, User } from "../context/types";
import Dialog from "../components/Dialog";

function Dashboard() {
  const itemRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const [dataLength, setDataLength] = useState<number>(0);
  const [{ user }, dispatch] = useContextValue();
  const [weight, setWeight] = useState<string>("");
  const [data, setData] = useState<DataType[]>([]);
  const [responseData, setResponseData] = useState<CalculationTypes>();
  const [openCalculationDialog, setOpenCalculationDialog] =
    useState<boolean>(false);

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
      } else navigate(`/auth/login`, { replace: true });
    }
  }, [user]);

  useEffect(() => {
    if (dataLength < data.length) {
      (itemRef as MutableRefObject<HTMLDivElement>).current.scrollTo({
        behavior: "smooth",
        left: 0,
        top: itemRef.current?.scrollHeight,
      });
    }
    setDataLength(data.length);
  }, [data]);

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

  function removeCard(index: number) {
    data.splice(index, 1);
    setData([...data]);
  }

  async function calculate() {
    try {
      const names: string[] = [];
      const costs: string[] = [];
      const weights: string[] = [];
      data.forEach((d) => {
        names.push(d.name);
        costs.push(d.cost);
        weights.push(d.weight);
      });
      const response = await axios.post("http://127.0.0.1:3000/api/calculate", {
        weight,
        names,
        costs,
        weights,
        token: user?.token,
      });
      setResponseData(response.data);
      setOpenCalculationDialog(true);
    } catch (error) {
      toast("Internal server error.", { type: "error" });
      console.log(error);
    }
  }

  return (
    <div className="dashboard">
      <Space height={100} />
      <Dialog
        open={openCalculationDialog}
        setOpen={setOpenCalculationDialog}
        responseData={responseData}
        user={user}
      />
      <input
        id={`weight`}
        name={`weight`}
        placeholder={`Weight capacity`}
        type="number"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        required={true}
        className="dashboard__input"
      />
      <div className="dashboard__cards" ref={itemRef}>
        {data?.map((d, index) => (
          <DashboardCard
            key={index}
            index={index}
            data={d}
            setName={setItemName}
            setCost={setItemCost}
            setWeight={setItemWeight}
            removeCard={removeCard}
          />
        ))}
      </div>
      <button onClick={addItem} className="dashboard__button">
        Add an item
      </button>
      <Space height={7} />
      <button
        onClick={calculate}
        className="dashboard__button dashboard__button__submit"
      >
        Calculate
      </button>
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
    </div>
  );
}

export default Dashboard;
