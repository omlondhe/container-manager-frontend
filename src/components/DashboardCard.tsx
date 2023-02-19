import { IconButton } from "@mui/material";
import "../styles/components/DashboardCard.css";
import { DataType } from "../utils/types";
import Space from "./Space";
import RemoveIcon from "@mui/icons-material/RemoveCircleOutlineRounded";

interface DashboardCardProps {
  data: DataType;
  index: number;
  setName: Function;
  setCost: Function;
  setWeight: Function;
}

function DashboardCard({
  data,
  index,
  setName,
  setCost,
  setWeight,
}: DashboardCardProps) {
  return (
    <div className="dashboardCard">
      <input
        id={`${index}1`}
        name={`${index}1`}
        placeholder={`Name`}
        type="text"
        value={data.name}
        onChange={(e) => setName(e.target.value, index)}
        required={true}
        className="dashboardCard__input"
      />
      <Space height={11} />
      <div className="dashboardCard__subSection">
        <input
          id={`${index}2`}
          name={`${index}2`}
          placeholder={`Cost`}
          type="number"
          value={data.cost}
          onChange={(e) => setCost(e.target.value, index)}
          required={true}
          className="dashboardCard__input"
        />
        <Space width={11} />
        <input
          id={`${index}3`}
          name={`${index}3`}
          placeholder={`Weight`}
          type="number"
          value={data.weight}
          onChange={(e) => setWeight(e.target.value, index)}
          required={true}
          className="dashboardCard__input"
        />
      </div>
      <Space height={21} />
      <div className="dashboardCard__top">
        <p className="dashboardCard__title">Item {index + 1}</p>
        <IconButton>
          <RemoveIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default DashboardCard;
