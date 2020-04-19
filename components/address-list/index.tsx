import React, { FunctionComponent, useContext } from "react";
import AddressContext from "../../context/address";
import { Item } from "./item";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    margin: "10px",
  },
});

const AddressList: FunctionComponent = () => {
  const classes = useStyles();
  const { addresses } = useContext(AddressContext);
  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      spacing={2}
      className={classes.root}
    >
      {addresses.map((address, i) => (
        <Grid key={i.toString()} item xs={12} sm={4}>
          <Item key={i.toString()} address={address}></Item>
        </Grid>
      ))}
    </Grid>
  );
};
export { AddressList };
