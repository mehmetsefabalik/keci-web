import React, { FunctionComponent } from "react";
import { Drawer } from "../drawer";
import { MenuList } from "./menu-list";

interface Props {
  open: boolean;
  setOpen: (e: boolean) => void;
}

const SideMenu: FunctionComponent<Props> = ({ open, setOpen }) => {
  return (
    <Drawer open={open} setOpen={setOpen} anchor="left">
      <MenuList />
    </Drawer>
  );
};

export { SideMenu };
