import React, { FunctionComponent } from "react";
import { useTheme } from "@material-ui/core";
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { ArrowRight } from '@material-ui/icons';
import { Button } from "../button";

export interface IProps {
  onClick: () => void;
  onBuyClick: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bottomBarWrapper: {
      position: "fixed",
      height: "50px",
      bottom: "0px",
      width: "100vw",
      boxShadow: "0px -3px 10px 1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
      display: "flex",
      alignItems: "center",
    },
    buyButton: {
      position: "absolute",
      right: "1rem",
      top: "0.4rem",
      width: "10rem",
      boxShadow: "0px -3px 10px 1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)"
    },
    arrowRight: {
      marginLeft: "10px"
    }
  }),
);

const BottomBar: FunctionComponent<IProps> = ({onClick, onBuyClick}) => {
  const theme = useTheme();
  const classes = useStyles();
  return <>
    <Paper className={classes.bottomBarWrapper} onClick={onClick}>
      <ArrowRight color="primary" fontSize="large" className={classes.arrowRight} />
      <Button name="SATIN AL" className={classes.buyButton} onClick={onBuyClick} />
    </Paper>
  </>;
};
export { BottomBar };