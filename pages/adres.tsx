import React, { useState } from "react";
import { makeStyles, Grid, Fab } from "@material-ui/core";
import { AddressList } from "../client/components/address-list";
import { Add } from "@material-ui/icons";
import { AddAddress } from "../client/components/add-address";
import { WithNotification } from "../client/hocs/with-notification";
import { Header } from "../client/components/header";
import { EditAddress } from "../client/components/edit-address";
import { WithAddress } from "../client/hocs/with-address";
import { AllowRegisteredUser } from "../client/hocs/allow-registered-user";
import { WithLoader } from "../client/hocs/with-loader";

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
    <WithLoader>
      <AllowRegisteredUser cb="/odeme" allowGuest>
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
      </AllowRegisteredUser>
    </WithLoader>
  );
};

export default Adres;
