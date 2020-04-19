import React, { useState } from "react";
import { makeStyles, Grid, Fab } from "@material-ui/core";
import { AddressList } from "../components/address-list";
import { Add } from "@material-ui/icons";
import { AddAddress } from "../components/add-address";
import { AddressProvider } from "../context/address";
import { Address as IAddress } from "../common/interface";

const useStyles = makeStyles({
  fab: {
    position: "absolute",
    bottom: "20px",
    right: "20px",
  },
});

const Adres = () => {
  const classes = useStyles();
  const [addresses] = useState<IAddress[]>([]);
  const [addAddressFormOpen, setAddAddressFormOpen] = useState(false);
  return (
    <AddressProvider
      value={{
        addresses,
      }}
    >
      <Grid container alignItems="center" justify="center">
        <AddressList addresses={[]} />
        <AddAddress
          addressId=""
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
  );
};

export default Adres;
