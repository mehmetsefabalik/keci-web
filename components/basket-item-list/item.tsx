import React, { FunctionComponent } from "react";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  makeStyles,
  Theme,
  useTheme,
} from "@material-ui/core";

const useStyle = makeStyles((theme: Theme) => ({
  price: {
    fontSize: "18px",
    color: theme.palette.primary.main,
  },
}));

const Item: FunctionComponent<Props> = ({ name, count, price }) => {
  const theme = useTheme();
  const classes = useStyle(theme);
  return (
    <ListItem button>
      <ListItemText primary={name} secondary={`${count} adet`} />
      <ListItemSecondaryAction className={classes.price}>
        {price * count} ₺
      </ListItemSecondaryAction>
    </ListItem>
  );
};

interface Props {
  name: string;
  price: number;
  count: number;
}

export { Item };
