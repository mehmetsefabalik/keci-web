import React, { FunctionComponent } from "react";
import { Snackbar } from "@material-ui/core";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { NotificationSeverity } from "../../common/interface";

interface Props {
  open: boolean;
  message: string;
  setOpen: (e: boolean) => void;
  severity?: NotificationSeverity;
}

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Notification: FunctionComponent<Props> = ({
  open,
  message,
  setOpen,
  severity = "info",
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={() => setOpen(false)}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert onClose={() => setOpen(false)} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
};
export { Notification };
