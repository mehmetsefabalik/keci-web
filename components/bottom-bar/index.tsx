import React, { FunctionComponent } from "react";
import { useTheme } from "@material-ui/core";
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Button } from "../button";

interface IProps {

}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bottomBarWrapper: {
      position: "fixed",
      height: "50px",
      bottom: "0px",
      width: "100vw",
      boxShadow: "0px -3px 10px 1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)"
    },
    buyButton: {
      position: "absolute",
      right: "1rem",
      top: "0.4rem",
      width: "10rem",
      boxShadow: "0px -3px 10px 1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)"
    }
  }),
);

const BottomBar: FunctionComponent<IProps> = () => {
  const theme = useTheme();
  const classes = useStyles();
  return <>
    <Paper className={classes.bottomBarWrapper}>
      <Button name="SATIN AL" className={classes.buyButton} onClick={() => console.log('clicked buy')} />
    </Paper>
  </>;
};
export { BottomBar };