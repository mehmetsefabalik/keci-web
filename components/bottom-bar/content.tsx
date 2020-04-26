import React, { FunctionComponent, useContext } from "react";
import { Badge, Typography, makeStyles, Theme } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import BasketDrawerContext from "../../context/basket-drawer";
import BasketContext from "../../context/basket";
import { Button } from "../button";

const useStyles = makeStyles((theme: Theme) => ({
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
}));

const Content: FunctionComponent<Props> = ({ onBuyClick }) => {
  const classes = useStyles();
  const basketDrawerContext = useContext(BasketDrawerContext);
  const { totalAmount, itemCount } = useContext(BasketContext);

  const onBasketIconClick = () => {
    basketDrawerContext.setOpen(!basketDrawerContext.open);
  };
  return (
    <>
      <Badge
        badgeContent={itemCount}
        color="primary"
        onClick={onBasketIconClick}
      >
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
    </>
  );
};

export interface Props {
  onBuyClick: () => void;
}

export { Content };
