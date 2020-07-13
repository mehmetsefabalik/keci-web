import React, { FunctionComponent, useState, useContext } from "react";
import Router from "next/router";
import { Grid, makeStyles, Paper } from "@material-ui/core";
import { AddressSelect } from "../../components/address-select";
import { BasketItemList } from "../../components/basket-item-list";
import { BottomBar } from "../../components/bottom-bar";
import { AddAddress } from "../../components/add-address";
import NotificationContext from "../../context/notification";
import AddressContext from "../../context/address";

const useStyle = makeStyles({
  mt20: {
    marginTop: "20px",
  },
  basket: { maxHeight: "50vh", marginBottom: "70px" },
});

const Checkout: FunctionComponent = () => {
  const classes = useStyle();
  const notif = useContext(NotificationContext);
  const { addresses } = useContext(AddressContext);
  const [addAddressOpen, setAddAddressOpen] = useState(false);
  const [selectedAddressId, setSelectedAddressId] = useState("");

  const onBuyClick = async () => {
    const response = await fetch("/api/orders", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ addressId: selectedAddressId }),
    });

    if (response.ok) {
      notif.setSeverity("success");
      notif.setMessage("Siparişiniz Oluşturuldu");
      notif.setOpen(true);
      const json = await response.json();
      setTimeout(
        () => Router.replace(`/siparis/${json.$oid}?as-success=true`),
        500
      );
    }
  };
  return (
    <>
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
            <Paper
              elevation={2}
              onClick={() => {
                if (!addresses.length) setAddAddressOpen(true);
              }}
            >
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
    </>
  );
};
export { Checkout };
