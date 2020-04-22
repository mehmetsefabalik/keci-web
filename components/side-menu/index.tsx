import React, { FunctionComponent } from "react";
import { Drawer } from "../drawer";

interface Props {
  open: boolean;
  setOpen: (e: boolean) => void;
}

const SideMenu: FunctionComponent<Props> = ({ open, setOpen }) => {
  return <Drawer open={open} setOpen={setOpen} anchor="left"></Drawer>;
};
export { SideMenu };
