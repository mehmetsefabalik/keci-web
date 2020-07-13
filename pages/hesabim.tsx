import React, { FunctionComponent } from "react";
import { Header } from "../client/components/header";
import { WithBasketDrawer } from "../client/hocs/with-basket-drawer";
import { WithBasket } from "../client/hocs/with-basket";
import { Account as AccountContainer } from "../client/containers/account";
import { AllowRegisteredUser } from "../client/hocs/allow-registered-user";
import { WithLoader } from "../client/hocs/with-loader";

const Account: FunctionComponent = () => (
  <WithLoader>
    <AllowRegisteredUser cb="/hesabim" allowGuest>
      <WithBasket>
        <WithBasketDrawer>
          <Header />
          <AccountContainer />
        </WithBasketDrawer>
      </WithBasket>
    </AllowRegisteredUser>
  </WithLoader>
);
export default Account;
