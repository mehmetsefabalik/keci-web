import React, { FunctionComponent } from "react";
import { Typography } from "@material-ui/core";
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { ShoppingCart } from '@material-ui/icons';
import { Button } from "../button";

export interface IProps {
  onClick: () => void;
  onBuyClick: (e?: any) => void;
  price: string;
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
    icon: {
      marginLeft: "10px"
    },
    price: {
      fontSize: "18px"
    }
  }),
);

const BottomBar: FunctionComponent<IProps> = ({onClick, onBuyClick, price}) => {
  const classes = useStyles();
  return <>
    <Paper className={classes.bottomBarWrapper} onClick={onClick}>
      <ShoppingCart color="primary" fontSize="large" className={classes.icon} />
      <Typography>Toplam:</Typography>&nbsp;<Typography className={classes.price} color="primary">{price}₺</Typography>
      <Button name="SATIN AL" className={classes.buyButton} onClick={onBuyClick} />
    </Paper>
  </>;
};
export { BottomBar };