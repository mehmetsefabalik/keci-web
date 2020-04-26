import React, { FunctionComponent, useState, useContext } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Menu, ShoppingCart } from "@material-ui/icons";
import classNames from "classnames";
import { SideMenu } from "../side-menu";
import BasketContext from "../../context/basket";
import BasketDrawerContext from "../../context/basket-drawer";

const useStyles = makeStyles({
  black: {
    color: "black",
  },
  ml20: {
    marginLeft: "20px",
  },
  title: {
    fontFamily: '"Comic Sans MS", cursive, sans-serif',
    flexGrow: 1,
  },
});

const Header: FunctionComponent = () => {
  const classes = useStyles();
  const { itemCount } = useContext(BasketContext);
  const basketDrawerContext = useContext(BasketDrawerContext);
  const [open, setOpen] = useState(false);
  return (
    <>
      <AppBar position="static" color="default">
        <SideMenu open={open} setOpen={setOpen} />
        <Toolbar>
          <IconButton
            onClick={() => setOpen(!open)}
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Köyden Evine
          </Typography>
          {typeof basketDrawerContext.setOpen === "function" && (
            <IconButton
              onClick={() =>
                basketDrawerContext.setOpen(!basketDrawerContext.open)
              }
              aria-label="basket"
            >
              <Badge badgeContent={itemCount} color="primary" variant="dot">
                <ShoppingCart
                  fontSize="default"
                  className={classNames(classes.ml20, classes.black)}
                />
              </Badge>
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export { Header };
