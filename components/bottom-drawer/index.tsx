import React, { FunctionComponent } from "react";
import {
  SwipeableDrawer,
  createStyles,
  makeStyles,
  Theme,
  useTheme,
} from "@material-ui/core";

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

const BottomDrawer: FunctionComponent<Props> = ({
  open,
  setOpen,
  children,
}) => {
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
        {children}
      </SwipeableDrawer>
    </>
  );
};
export { BottomDrawer };
