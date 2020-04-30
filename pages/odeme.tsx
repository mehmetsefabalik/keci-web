import React, { useEffect } from "react";
import Router from "next/router";
import { WithNotification } from "../hocs/with-notification";
import { WithBasket } from "../hocs/with-basket";
import { WithAddress } from "../hocs/with-address";
import { Header } from "../components/header";
import { WithBasketDrawer } from "../hocs/with-basket-drawer";
import { Checkout } from "../containers/checkout";

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
