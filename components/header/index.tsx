import React, { FunctionComponent } from "react";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import { Menu } from "@material-ui/icons";

const Header: FunctionComponent = () => {
  return (
    <>
      <AppBar position="static" color="default">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};
export { Header };
