import {
  AppBar,
  Slide,
  Dialog as MuiDialog,
  Toolbar,
  IconButton,
  DialogContent,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { Fragment, ReactElement, Ref, forwardRef } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { CalculationTypes } from "../utils/types";
import axios from "axios";
import { User } from "../context/types";
import CalculationDataContainer from "./CalculationDataContainer";

interface DialogProps {
  open: boolean;
  setOpen: Function;
  responseData: CalculationTypes | undefined;
  user: User | null;
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement;
  },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Dialog({ open, setOpen, responseData, user }: DialogProps) {
  async function save() {
    try {
      await axios.post("http://127.0.0.1:3000/api/save-calculation", {
        responseData,
        token: user?.token,
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
        <CalculationDataContainer responseData={responseData} />
      </DialogContent>
    </MuiDialog>
  ) : (
    <Fragment />
  );
}

export default Dialog;
