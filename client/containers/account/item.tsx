import React, { FunctionComponent } from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

interface Props {
  name: string;
  icon: any;
}

const Item: FunctionComponent<Props> = ({ name, icon }) => {
  return (
    <ListItem button>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={name} />
    </ListItem>
  );
};
export { Item };
