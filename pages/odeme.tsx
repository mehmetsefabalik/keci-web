import React, { useEffect, useState } from "react";
import { Grid, makeStyles, Paper } from "@material-ui/core";
import Router from "next/router";
import { WithNotification } from "../hocs/with-notification";
import { WithBasket } from "../hocs/with-basket";
import { WithAddress } from "../hocs/with-address";
import { AddressSelect } from "../components/address-select";
import { Header } from "../components/header";
import { BasketItemList } from "../components/basket-item-list";
import { BottomBar } from "../components/bottom-bar";
import { AddAddress } from "../components/add-address";
import { WithBasketDrawer } from "../hocs/with-basket-drawer";

const useStyle = makeStyles({
  mt20: {
    marginTop: "20px",
  },
  basket: { maxHeight: "50vh", marginBottom: "70px" },
});

const Odeme = () => {
  const classes = useStyle();
  const [addAddressOpen, setAddAddressOpen] = useState(false);
  const [selectedAddressId, setSelectedAddressId] = useState("");

  const onBuyClick = () => {};

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
            <Grid container alignItems="center" justify="center">
              <Grid
                item
                container
                alignItems="center"
                justify="center"
                spacing={2}
                sm={10}
                md={8}
              >
                <Grid item xs={10} sm={8} md={8} className={classes.mt20}>
                  <Paper elevation={2}>
                    <BasketItemList />
                  </Paper>
                </Grid>
                <Grid item xs={10} sm={8} md={8} className={classes.mt20}>
                  <Paper elevation={2}>
                    <AddressSelect
                      selectedAddressId={selectedAddressId}
                      setSelectedAddressId={setSelectedAddressId}
                    />
                  </Paper>
                </Grid>
                <BottomBar onBuyClick={onBuyClick} />
              </Grid>
            </Grid>
            <AddAddress open={addAddressOpen} setOpen={setAddAddressOpen} />
          </WithBasketDrawer>
        </WithAddress>
      </WithBasket>
    </WithNotification>
  );
};

export default Odeme;
