import React, { FunctionComponent, useContext, useEffect } from "react";
import { SwipeableDrawer } from "@material-ui/core";

export interface IProps {
  open: boolean;
  setOpen: (e: boolean) => void;
}

const BottomDrawer: FunctionComponent<IProps> = ({ open, setOpen }) => {
  return <>
    <SwipeableDrawer
      id="bottom-drawer"
      anchor="bottom"
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      disableBackdropTransition={true}
      disableDiscovery={true}
      disableSwipeToOpen={true}
    >
      <div style={{ height: "50vh" }}>
        Hello
      </div>
    </SwipeableDrawer>
  </>;
};
export { BottomDrawer };