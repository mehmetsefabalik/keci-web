import React, { useState } from "react";
import axios from "axios";
import { makeStyles, Grid, Fab } from "@material-ui/core";
import { AddressList } from "../components/address-list";
import { Add } from "@material-ui/icons";
import { AddAddress } from "../components/add-address";
import { AddressProvider } from "../context/address";
import { Address as IAddress } from "../common/interface";
import { GetServerSideProps } from "next";
import { api } from "../common/constant";

const useStyles = makeStyles({
  fab: {
    position: "absolute",
    bottom: "20px",
    right: "20px",
  },
});

export interface Props {
  addresses: IAddress[];
}

const Adres = (props: Props) => {
  const classes = useStyles();
  const [addresses, setAddresses] = useState(props.addresses);
  const [addAddressFormOpen, setAddAddressFormOpen] = useState(false);
  const update = async () => {
    const response = await fetch("/addresses", {
      method: "GET",
    });
    if (response.ok) {
      setAddresses(await response.json());
    }
  };

  const edit = (id: string) => {
    console.log("on edit click", id);
  };

  return (
    <AddressProvider
      value={{
        addresses,
        update,
        edit,
      }}
    >
      <Grid container alignItems="center" justify="center">
        <AddressList />
        <AddAddress open={addAddressFormOpen} setOpen={setAddAddressFormOpen} />
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await axios.get(`${api.mobile}/addresses`, {
    headers: { Cookie: context.req.headers.cookie },
  });
  return { props: { addresses: response.data } };
};

export default Adres;
