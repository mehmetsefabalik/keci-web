import React, { useEffect } from "react";
import { makeStyles, Grid } from "@material-ui/core";
import Router from "next/router";
import { AddressList } from "../components/address-list";

const useStyles = makeStyles({});

const Adres = () => {
  return (
    <>
      <Grid container alignItems="center" justify="center">
        <AddressList addresses={[]} />
      </Grid>
    </>
  );
};

export default Adres;
