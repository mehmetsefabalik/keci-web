import React, { useState } from "react";
import { makeStyles, Grid, Fab } from "@material-ui/core";
import { AddressList } from "../components/address-list";
import { Add } from "@material-ui/icons";
import { AddAddress } from "../components/add-address";
import { WithNotification } from "../hocs/with-notification";
import { Header } from "../components/header";
import { EditAddress } from "../components/edit-address";
import { WithAddress } from "../hocs/with-address";

const useStyles = makeStyles({
  fab: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
  },
});

const Adres = () => {
  const classes = useStyles();

  const [addAddressFormOpen, setAddAddressFormOpen] = useState(false);
  const [editAddressFormOpen, setEditAddressFormOpen] = useState(false);

  return (
    <WithNotification>
      <WithAddress>
        <Header />
        <Grid container alignItems="center" justify="center">
          <AddressList />
          <AddAddress
            open={addAddressFormOpen}
            setOpen={setAddAddressFormOpen}
          />
          <EditAddress
            open={editAddressFormOpen}
            setOpen={setEditAddressFormOpen}
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
      </WithAddress>
    </WithNotification>
  );
};

export default Adres;
