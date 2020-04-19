import React, { useState, useEffect } from "react";
import { makeStyles, Grid, Fab } from "@material-ui/core";
import { AddressList } from "../components/address-list";
import { Add } from "@material-ui/icons";
import { AddAddress } from "../components/add-address";
import { AddressProvider } from "../context/address";
import { Address } from "../common/interface";
import Router from "next/router";
import { WithNotification } from "../hocs/with-notification";
import { Header } from "../components/header";

const useStyles = makeStyles({
  fab: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
  },
});

const Adres = () => {
  const classes = useStyles();
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [addAddressFormOpen, setAddAddressFormOpen] = useState(false);
  const fetchAddresses = async () => {
    const response = await fetch("/api/addresses", { method: "GET" });
    if (response.ok) {
      setAddresses(await response.json());
    } else if (response.status === 401) {
      return Router.push("/giris?cb=/adres");
    }
  };
  const update = async () => {
    fetchAddresses();
  };

  const edit = (id: string) => {
    console.log("on edit click", id);
  };

  useEffect(() => {
    fetchAddresses();
  }, []);

  return (
    <WithNotification>
      <AddressProvider
        value={{
          addresses,
          update,
          edit,
        }}
      >
        <Header />
        <Grid container alignItems="center" justify="center">
          <AddressList />
          <AddAddress
            open={addAddressFormOpen}
            setOpen={setAddAddressFormOpen}
          />
          <Fab
            className={classes.fab}
            color="primary"
            aria-label="add"
            size="large"
            variant="extended"
            onClick={() => setAddAddressFormOpen(true)}
          >
            <Add /> Adres Ekle
          </Fab>
        </Grid>
      </AddressProvider>
    </WithNotification>
  );
};

export default Adres;
