import React, { FunctionComponent, useState, useContext } from "react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Menu, ShoppingCart, Person } from "@material-ui/icons";
import classNames from "classnames";
import { SideMenu } from "../side-menu";
import BasketContext from "../../context/basket";
import BasketDrawerContext from "../../context/basket-drawer";

const useStyles = makeStyles({
  black: {
    color: "black",
  },
  title: {
    fontFamily: '"Pacifico", cursive',
    fontSize: "25px",
    flexGrow: 1,
  },
});

const Header: FunctionComponent<Props> = ({ showAccountIcon = true }) => {
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
          <Link href="/">
            <Typography variant="h6" className={classes.title}>
              Köyden Evine
            </Typography>
          </Link>
          {showAccountIcon && (
            <Link href="/hesabim">
              <IconButton aria-label="account">
                <Person className={classes.black} />
              </IconButton>
            </Link>
          )}
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
                  className={classNames(classes.black)}
                />
              </Badge>
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export interface Props {
  showAccountIcon?: boolean;
}

export { Header };
