import React, { useEffect, useState } from "react";
import { makeStyles, Grid, Fab } from "@material-ui/core";
import Router from "next/router";
import { AddressList } from "../components/address-list";
import { Add } from "@material-ui/icons";

const useStyles = makeStyles({
  fab: {
    position: "absolute",
    bottom: "20px",
    right: "20px",
  },
});

const Adres = () => {
  const classes = useStyles();
  const [addAddressFormOpen, setAddAddressFormOpen] = useState(false);
  return (
    <>
      <Grid container alignItems="center" justify="center">
        <AddressList addresses={[]} />
        <Fab
          className={classes.fab}
          color="primary"
          aria-label="add"
          size="large"
          variant="extended"
        >
          <Add /> Adres Ekle
        </Fab>
      </Grid>
    </>
  );
};

export default Adres;
