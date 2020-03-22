import React, { FunctionComponent } from "react";
import { createStyles, makeStyles, Theme, useTheme } from "@material-ui/core";

interface IProps {
  price: number;
  text: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      display: "flex",
      border: "1.3px solid",
      padding: "2px",
      borderRadius: "5px",
      borderColor: theme.palette.primary.main,
      alignItems: "center"
    },
    price: {
      fontSize: "18px",
      color: theme.palette.primary.main
    },
    text: {
      fontSize: "11px",
      paddingLeft: "4px"
    }
  }),
);

const PriceBadge: FunctionComponent<IProps> = ({ price, text }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return <div className={classes.wrapper}>
    <span className={classes.price}>{price}₺</span>
    <div className={classes.text}>{text}</div>
  </div>;
};
export { PriceBadge };