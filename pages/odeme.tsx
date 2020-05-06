import React, { useEffect } from "react";
import Router from "next/router";
import { WithNotification } from "../client/hocs/with-notification";
import { WithBasket } from "../client/hocs/with-basket";
import { WithAddress } from "../client/hocs/with-address";
import { Header } from "../client/components/header";
import { WithBasketDrawer } from "../client/hocs/with-basket-drawer";
import { Checkout } from "../client/containers/checkout";

const Odeme = () => {
  const fetchMe = async () => {
    const response = await fetch("/api/me", { method: "GET" });
    if (response.ok) {
      const data = await response.json();
      if (
        data.user_type === "guest" &&
        !new URLSearchParams(window.location.search).has("allow-guest")
      ) {
        return Router.replace("/giris?cb=/odeme");
      }
    } else {
      return Router.replace("/giris?cb=/odeme");
    }
  };
  useEffect(() => {
    fetchMe();
  }, []);

  return (
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
  );
};

export default Odeme;
