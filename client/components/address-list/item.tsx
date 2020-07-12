import React, { FunctionComponent, useContext } from "react";
import { Typography, Paper, makeStyles } from "@material-ui/core";
import { Address } from "../../interfaces/address";
import { Button } from "../button";
import AddressContext from "../../context/address";

interface Props {
  address: Address;
}

const useStyles = makeStyles({
  paper: {
    padding: "10px",
    width: "100%",
  },
  action: {
    marginTop: "10px",
  },
});

const Item: FunctionComponent<Props> = ({ address }) => {
  const classes = useStyles();
  const { setIdToEdit } = useContext(AddressContext);
  return (
    <Paper className={classes.paper} elevation={2}>
      <Typography variant="h5" component="h2">
        {address.title}
      </Typography>
      <Typography variant="body2" component="p">
        {address.text}
      </Typography>

      <Button
        className={classes.action}
        variant="outlined"
        name="Düzenle"
        onClick={() => setIdToEdit(address._id.$oid)}
      ></Button>
    </Paper>
  );
};
export { Item };
