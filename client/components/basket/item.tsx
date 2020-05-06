import React, { FunctionComponent } from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import { DoubleArrow, Add, Remove } from "@material-ui/icons";

interface Props {
  id: string;
  name: string;
  count: number;
  update: (id: string, count: number) => void;
}

const Item: FunctionComponent<Props> = ({ id, name, count, update }) => {
  return (
    <ListItem button>
      <ListItemIcon>
        <DoubleArrow />
      </ListItemIcon>
      <ListItemText primary={name} />
      <ListItemSecondaryAction>
        <IconButton
          onClick={() => {
            update(id, -1);
          }}
          edge="end"
          aria-label="remove"
        >
          <Remove />
        </IconButton>
        <IconButton edge="end" aria-label="add">
          {count}
        </IconButton>
        <IconButton
          onClick={() => {
            update(id, 1);
          }}
          edge="end"
          aria-label="add"
        >
          <Add />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
export { Item };
