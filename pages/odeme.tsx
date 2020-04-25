import React, { useEffect } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Router from "next/router";
import { WithNotification } from "../hocs/with-notification";
import { WithBasket } from "../hocs/with-basket";
import { WithAddress } from "../hocs/with-address";
import { AddressSelect } from "../components/address-select";
import { Header } from "../components/header";

const useStyle = makeStyles({
  address: {
    marginTop: "20px",
  },
});

const Odeme = () => {
  const classes = useStyle();
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
          <Header />
          <Grid container alignItems="center" justify="center">
            <Grid item xs={8} sm={6} md={4} className={classes.address}>
              <AddressSelect />
            </Grid>
          </Grid>
        </WithAddress>
      </WithBasket>
    </WithNotification>
  );
};

export default Odeme;
