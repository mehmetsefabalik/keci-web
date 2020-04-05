import React, { FunctionComponent, useContext, useEffect, useState } from "react";
import { Typography, Badge } from "@material-ui/core";
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { ShoppingCart } from '@material-ui/icons';
import { Button } from "../button";
import BasketContext from "../../context/basket";

export interface IProps {
  onClick: () => void;
  onBuyClick: (e?: any) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bottomBarWrapper: {
      position: "fixed",
      height: "60px",
      bottom: "0px",
      width: "100vw",
      boxShadow: "0px -3px 10px 1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
      display: "flex",
      alignItems: "center",
      zIndex: 1500,
    },
    buyButton: {
      position: "absolute",
      right: "10px",
      top: "5px",
      width: "180px",
      height: "45px",
      boxShadow: "0px -3px 10px 1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)"
    },
    icon: {
      marginLeft: "20px"
    },
    price: {
      fontSize: "18px",
      marginLeft: "5px",
    }
  }),
);

const BottomBar: FunctionComponent<IProps> = ({ onClick, onBuyClick }) => {
  const classes = useStyles();
  const { totalAmount, itemCount } = useContext(BasketContext);
  return <>
    <Paper className={classes.bottomBarWrapper} onClick={onClick}>
      <Badge badgeContent={itemCount} color="primary">
        <ShoppingCart color="primary" fontSize="large" className={classes.icon} />
      </Badge>
      {totalAmount > 0 && <Typography className={classes.price} color="primary">{totalAmount}₺</Typography>}
      <Button name="SATIN AL" className={classes.buyButton} onClick={onBuyClick} />
    </Paper>
  </>;
};
export { BottomBar };