import {
  AppBar,
  Slide,
  Dialog as MuiDialog,
  Toolbar,
  IconButton,
  DialogContent,
  Chip,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { Fragment, ReactElement, Ref, forwardRef } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { CalculationTypes } from "../utils/types";
import axios from "axios";
import CalculationTable from "./CalculationTable";
import Space from "./Space";

interface DialogProps {
  open: boolean;
  setOpen: Function;
  responseData: CalculationTypes | undefined;
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement;
  },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Dialog({ open, setOpen, responseData }: DialogProps) {
  async function save() {
    try {
      await axios.post("http://127.0.0.1:3000/api/save-calculation", {
        responseData,
      });
    } catch (error) {
      console.log(error);
    }
    setOpen(false);
  }

  return responseData ? (
    <MuiDialog
      fullScreen
      open={open}
      onClose={() => setOpen(false)}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: "relative", background: "#242424" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => setOpen(false)}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            Calculation information
          </Typography>
          <Button autoFocus color="inherit" onClick={save}>
            Save
          </Button>
        </Toolbar>
      </AppBar>
      <DialogContent>
        {responseData.requestedData.length ? (
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
            <CalculationTable rows={responseData.requestedData} />
            <Space height={11} />
          </Fragment>
        ) : (
          <Fragment />
        )}
        {responseData.dataToTake.length ? (
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
            <CalculationTable rows={responseData.dataToTake} />
            <Space height={11} />
          </Fragment>
        ) : (
          <Fragment />
        )}
        {responseData.dataNotToTake.length ? (
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
            <CalculationTable rows={responseData.dataNotToTake} />
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
          label={`Total items : ${responseData.totalItems}`}
          variant="outlined"
          style={{ marginRight: 4 }}
        />
        <Chip
          label={`Items utilized: ${responseData.itemsUtilized}`}
          variant="outlined"
          style={{ marginRight: 4 }}
        />
        <Chip
          label={`Items excluded: ${responseData.itemsRemaining}`}
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
          label={`Total weights : ${responseData.totalWeights}`}
          variant="outlined"
          style={{ marginRight: 4 }}
        />
        <Chip
          label={`Weights utilized: ${responseData.weightsUtilized}`}
          variant="outlined"
          style={{ marginRight: 4 }}
        />
        <Chip
          label={`Weights excluded: ${responseData.weightsRemaining}`}
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
          label={`Total costs : ${responseData.totalCost}`}
          variant="outlined"
          style={{ marginRight: 4 }}
        />
        <Chip
          label={`Costs utilized: ${responseData.costUtilized}`}
          variant="outlined"
          style={{ marginRight: 4 }}
        />
        <Chip
          label={`Costs excluded: ${responseData.costRemaining}`}
          variant="outlined"
          style={{ marginRight: 4 }}
        />
        <Space height={11} />
      </DialogContent>
    </MuiDialog>
  ) : (
    <Fragment />
  );
}

export default Dialog;
