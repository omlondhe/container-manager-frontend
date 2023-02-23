import { Fragment } from "react";
import { CalculationTypes } from "../utils/types";
import { Chip, Typography } from "@mui/material";
import CalculationTable from "./CalculationTable";
import Space from "./Space";

interface CalculationDataContainerProps {
  responseData: CalculationTypes | undefined;
}

function CalculationDataContainer({
  responseData,
}: CalculationDataContainerProps) {
  return (
    <Fragment>
      {responseData?.requestedData.length ? (
        <Fragment>
          <Typography
            sx={{
              flex: 1,
              fontWeight: "bold",
              borderBottom: "1px solid gray",
            }}
            variant="h6"
            component="div"
          >
            Requested items:
          </Typography>
          <CalculationTable rows={responseData?.requestedData} />
          <Space height={11} />
        </Fragment>
      ) : (
        <Fragment />
      )}
      {responseData?.dataToTake.length ? (
        <Fragment>
          <Typography
            sx={{
              flex: 1,
              fontWeight: "bold",
              borderBottom: "1px solid gray",
            }}
            variant="h6"
            component="div"
          >
            Items to take:
          </Typography>
          <Space height={4} />
          <CalculationTable rows={responseData?.dataToTake} />
          <Space height={11} />
        </Fragment>
      ) : (
        <Fragment />
      )}
      {responseData?.dataNotToTake.length ? (
        <Fragment>
          <Typography
            sx={{
              flex: 1,
              fontWeight: "bold",
              borderBottom: "1px solid gray",
            }}
            variant="h6"
            component="div"
          >
            Items not to take:
          </Typography>
          <Space height={4} />
          <CalculationTable rows={responseData?.dataNotToTake} />
          <Space height={11} />
        </Fragment>
      ) : (
        <Fragment />
      )}
      <Typography
        sx={{
          flex: 1,
          fontWeight: "bold",
          borderBottom: "1px solid gray",
        }}
        variant="h6"
        component="div"
      >
        Item usage statistics:
      </Typography>
      <Space height={4} />
      <Chip
        label={`Total items : ${responseData?.totalItems}`}
        variant="outlined"
        style={{ marginRight: 4 }}
      />
      <Chip
        label={`Items utilized: ${responseData?.itemsUtilized}`}
        variant="outlined"
        style={{ marginRight: 4 }}
      />
      <Chip
        label={`Items excluded: ${responseData?.itemsRemaining}`}
        variant="outlined"
        style={{ marginRight: 4 }}
      />
      <Space height={11} />

      <Typography
        sx={{
          flex: 1,
          fontWeight: "bold",
          borderBottom: "1px solid gray",
        }}
        variant="h6"
        component="div"
      >
        Weights usage statistics:
      </Typography>
      <Space height={4} />
      <Chip
        label={`Total weights : ${responseData?.totalWeights}`}
        variant="outlined"
        style={{ marginRight: 4 }}
      />
      <Chip
        label={`Weights utilized: ${responseData?.weightsUtilized}`}
        variant="outlined"
        style={{ marginRight: 4 }}
      />
      <Chip
        label={`Weights excluded: ${responseData?.weightsRemaining}`}
        variant="outlined"
        style={{ marginRight: 4 }}
      />
      <Space height={11} />

      <Typography
        sx={{
          flex: 1,
          fontWeight: "bold",
          borderBottom: "1px solid gray",
        }}
        variant="h6"
        component="div"
      >
        Costs usage statistics:
      </Typography>
      <Space height={4} />
      <Chip
        label={`Total costs : ${responseData?.totalCost}`}
        variant="outlined"
        style={{ marginRight: 4 }}
      />
      <Chip
        label={`Costs utilized: ${responseData?.costUtilized}`}
        variant="outlined"
        style={{ marginRight: 4 }}
      />
      <Chip
        label={`Costs excluded: ${responseData?.costRemaining}`}
        variant="outlined"
        style={{ marginRight: 4 }}
      />
      <Space height={11} />
    </Fragment>
  );
}

export default CalculationDataContainer;
