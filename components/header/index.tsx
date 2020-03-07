import React, { FunctionComponent } from "react";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import { Menu } from "@material-ui/icons";

interface IProps {

}

const Header: FunctionComponent<IProps> = () => {
  return <>
    <AppBar position="static" color="transparent">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <Menu />
        </IconButton>
      </Toolbar>
    </AppBar>
  </>;
};
export { Header };