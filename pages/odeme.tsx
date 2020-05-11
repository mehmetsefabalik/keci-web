import React from "react";
import { WithNotification } from "../client/hocs/with-notification";
import { WithBasket } from "../client/hocs/with-basket";
import { WithAddress } from "../client/hocs/with-address";
import { Header } from "../client/components/header";
import { WithBasketDrawer } from "../client/hocs/with-basket-drawer";
import { Checkout } from "../client/containers/checkout";
import { AllowRegisteredUser } from "../client/hocs/allow-registered-user";
import { WithLoader } from "../client/hocs/with-loader";

const Odeme = () => (
  <WithLoader>
    <AllowRegisteredUser cb="/odeme">
      <WithNotification>
        <WithBasket>
          <WithAddress>
            <WithBasketDrawer>
              <Header />
              <Checkout />
            </WithBasketDrawer>
          </WithAddress>
        </WithBasket>
      </WithNotification>
    </AllowRegisteredUser>
  </WithLoader>
);

export default Odeme;
