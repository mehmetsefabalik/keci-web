import React, { FunctionComponent, useState } from "react";
import { BasketDrawerProvider } from "../../context/basket-drawer";
import { makeStyles } from "@material-ui/core";
import { Drawer } from "../../components/drawer";
import { Basket } from "../../components/basket";

const useStyle = makeStyles({
  basket: { maxHeight: "50vh", marginBottom: "70px" },
});

const WithBasketDrawer: FunctionComponent = ({ children }) => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  return (
    <BasketDrawerProvider value={{ open, setOpen }}>
      {children}
      <Drawer open={open} setOpen={setOpen} anchor="bottom">
        <div className={classes.basket}>
          <Basket />
        </div>
      </Drawer>
    </BasketDrawerProvider>
  );
};
export { WithBasketDrawer };
