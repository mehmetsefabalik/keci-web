import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import Router from "next/router";
import { WithNotification } from "../hocs/with-notification";
import { WithBasket } from "../hocs/with-basket";
import { WithAddress } from "../hocs/with-address";
import { AddressSelect } from "../components/address-select";

const Odeme = () => {
  const fetchMe = async () => {
    const response = await fetch("/api/me", { method: "GET" });
    if (response.ok) {
      const data = await response.json();
      if (
        data.user_type === "guest" &&
        !new URLSearchParams(window.location.search).has("allow-guest")
      ) {
        return Router.push("/giris?cb=/odeme");
      }
    } else {
      return Router.push("/giris?cb=/odeme");
    }
  };
  useEffect(() => {
    fetchMe();
  }, []);
  return (
    <WithNotification>
      <WithBasket>
        <WithAddress>
          <Grid container alignItems="center" justify="center">
            <AddressSelect />
          </Grid>
        </WithAddress>
      </WithBasket>
    </WithNotification>
  );
};

export default Odeme;
