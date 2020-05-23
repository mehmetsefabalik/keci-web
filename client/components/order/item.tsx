import React, { FunctionComponent } from "react";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from "@material-ui/core";

interface Props {
  name: string;
  count: number;
  price: number;
}

const Item: FunctionComponent<Props> = ({ name, count, price }) => {
  return (
    <ListItem>
      <ListItemText primary={name} secondary={`${count} adet - ${price} ₺`} />
      <ListItemSecondaryAction></ListItemSecondaryAction>
    </ListItem>
  );
};
export { Item };
