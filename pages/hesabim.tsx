import React, { FunctionComponent } from "react";
import { Header } from "../client/components/header";
import { WithBasketDrawer } from "../client/hocs/with-basket-drawer";
import { WithBasket } from "../client/hocs/with-basket";
import { Account as AccountContainer } from "../client/containers/account";

const Account: FunctionComponent = () => {
  return (
    <>
      <WithBasket>
        <WithBasketDrawer>
          <Header />
          <AccountContainer />
        </WithBasketDrawer>
      </WithBasket>
    </>
  );
};
export default Account;
