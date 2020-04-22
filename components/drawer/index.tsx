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
  anchor: "bottom" | "left" | "right" | "top";
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sheet: {
      "& .MuiPaper-root": {
        borderRadius: "5px",
      },
    },
  })
);

const Drawer: FunctionComponent<Props> = ({
  open,
  setOpen,
  children,
  anchor,
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <>
      <SwipeableDrawer
        className={classes.sheet}
        id="bottom-drawer"
        anchor={anchor}
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
export { Drawer };
