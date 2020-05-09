import React, { FunctionComponent } from "react";
import { Header } from "../client/components/header";
import { WithBasketDrawer } from "../client/hocs/with-basket-drawer";
import { WithBasket } from "../client/hocs/with-basket";

const Account: FunctionComponent = () => {
  return (
    <>
      <WithBasket>
        <WithBasketDrawer>
          <Header />
          Hesabim
        </WithBasketDrawer>
      </WithBasket>
    </>
  );
};
export default Account;
