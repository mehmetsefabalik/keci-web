import React, { FunctionComponent } from "react";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Theme,
  makeStyles,
  useTheme,
} from "@material-ui/core";

interface Props {
  name: string;
  count: number;
  price: number;
}

const useStyle = makeStyles((theme: Theme) => ({
  price: {
    color: theme.palette.primary.main,
  },
  item: {
    paddingTop: "0px",
    paddingBottom: "0px",
  },
}));

const Item: FunctionComponent<Props> = ({ name, count, price }) => {
  const theme = useTheme();
  const classes = useStyle(theme);
  return (
    <ListItem className={classes.item}>
      <ListItemText primary={name} secondary={`${count} adet`} />
      <ListItemSecondaryAction className={classes.price}>
        {price} ₺
      </ListItemSecondaryAction>
      <ListItemSecondaryAction></ListItemSecondaryAction>
    </ListItem>
  );
};
export { Item };
