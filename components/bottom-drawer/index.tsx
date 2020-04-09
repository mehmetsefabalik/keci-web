import React, { FunctionComponent, useContext, useEffect } from "react";
import {
  SwipeableDrawer,
  Typography,
  Divider,
  createStyles,
  makeStyles,
  Theme,
  useTheme,
} from "@material-ui/core";
import { Basket } from "../basket";

export interface Props {
  open: boolean;
  setOpen: (e: boolean) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sheet: {
      "& .MuiPaper-root": {
        borderRadius: "5px",
      },
    },
    title: {
      margin: "5px 10px",
    },
  })
);

const BottomDrawer: FunctionComponent<Props> = ({ open, setOpen }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <>
      <SwipeableDrawer
        className={classes.sheet}
        id="bottom-drawer"
        anchor="bottom"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        disableBackdropTransition={true}
        disableDiscovery={true}
        disableSwipeToOpen={true}
      >
        <div style={{ maxHeight: "50vh", marginBottom: "70px" }}>
          <Basket />
        </div>
      </SwipeableDrawer>
    </>
  );
};
export { BottomDrawer };
