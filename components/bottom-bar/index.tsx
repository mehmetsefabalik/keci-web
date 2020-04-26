import React, { FunctionComponent, useContext } from "react";
import { Typography, Badge } from "@material-ui/core";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { ShoppingCart } from "@material-ui/icons";
import classNames from "classnames";
import { Button } from "../button";
import BasketContext from "../../context/basket";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    z1500: {
      zIndex: 1500,
    },
    z1000: {
      zIndex: 1000,
    },
    bottomBarWrapper: {
      position: "fixed",
      height: "60px",
      bottom: "0px",
      width: "100vw",
      boxShadow:
        "0px -3px 10px 1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
      display: "flex",
      alignItems: "center",
    },
    buyButton: {
      position: "absolute",
      right: "10px",
      top: "5px",
      width: "180px",
      height: "45px",
      boxShadow:
        "0px -3px 10px 1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
    },
    icon: {
      marginLeft: "20px",
    },
    price: {
      fontSize: "18px",
      marginLeft: "5px",
    },
  })
);

const BottomBar: FunctionComponent<Props> = ({
  onClick = () => {},
  onBuyClick,
  aboveAll = false,
}) => {
  const classes = useStyles();
  const { totalAmount, itemCount } = useContext(BasketContext);
  return (
    <>
      <Paper
        className={classNames(classes.bottomBarWrapper, {
          [classes.z1500]: aboveAll,
          [classes.z1000]: !aboveAll,
        })}
        onClick={onClick}
      >
        <Badge badgeContent={itemCount} color="primary">
          <ShoppingCart
            color="primary"
            fontSize="large"
            className={classes.icon}
          />
        </Badge>
        {totalAmount > 0 && (
          <Typography className={classes.price} color="primary">
            {totalAmount}₺
          </Typography>
        )}
        <Button
          name="SATIN AL"
          className={classes.buyButton}
          onClick={onBuyClick}
        />
      </Paper>
    </>
  );
};

export interface Props {
  onClick?: () => void;
  onBuyClick: (e?: any) => void;
  aboveAll?: boolean;
}

export { BottomBar };
