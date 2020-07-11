import React, { FunctionComponent } from "react";
import { Address as IAddress } from "../../interfaces/interface";
import {
  ListSubheader,
  ListItem,
  ListItemText,
  List,
  makeStyles,
  ListItemSecondaryAction,
} from "@material-ui/core";

interface Props {
  address: IAddress;
}

const useStyle = makeStyles({
  item: {
    paddingTop: "0px",
    paddingBottom: "0px",
  },
  list: {
    marginTop: "20px",
    width: "100%",
  },
  subheader: {
    lineHeight: "normal",
  },
});

const Address: FunctionComponent<Props> = ({ address }) => {
  const classes = useStyle();
  return (
    <List
      className={classes.list}
      subheader={
        <ListSubheader className={classes.subheader}>Adres</ListSubheader>
      }
    >
      <ListItem className={classes.item}>
        <ListItemText primary={address.title} secondary={address.text} />
        <ListItemSecondaryAction>
          {`${address.name} ${address.surname}`}
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
};
export { Address };
