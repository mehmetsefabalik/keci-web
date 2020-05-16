import React from "react";
import { WithNotification } from "../client/hocs/with-notification";
import { Header } from "../client/components/header";
import { AllowRegisteredUser } from "../client/hocs/allow-registered-user";
import { WithLoader } from "../client/hocs/with-loader";

const Odeme = () => (
  <WithLoader>
    <AllowRegisteredUser cb="/odeme">
      <WithNotification>
        <Header />
      </WithNotification>
    </AllowRegisteredUser>
  </WithLoader>
);

export default Odeme;
