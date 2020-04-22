import React, { FunctionComponent, useState } from "react";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { SideMenu } from "../side-menu";

const Header: FunctionComponent = () => {
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
        </Toolbar>
      </AppBar>
    </>
  );
};
export { Header };
