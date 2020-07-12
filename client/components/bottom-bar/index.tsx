import React, { FunctionComponent } from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Content } from "./content";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bottomBarWrapper: {
      position: "fixed",
      height: "60px",
      bottom: "0px",
      width: "100vw",
      boxShadow:
        "0px -3px 10px 1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
      display: "flex",
      alignItems: "center",
      zIndex: 1301,
    },
  })
);

const BottomBar: FunctionComponent<Props> = ({ onBuyClick }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.bottomBarWrapper}>
      <Content onBuyClick={onBuyClick} />
    </Paper>
  );
};

export interface Props {
  onBuyClick: (e?: any) => void;
}

export { BottomBar };
