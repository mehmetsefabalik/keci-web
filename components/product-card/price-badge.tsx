import React, { FunctionComponent } from "react";
import { createStyles, makeStyles, Theme, useTheme } from "@material-ui/core";

interface Props {
  price: number;
  text: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      border: "1.3px solid",
      padding: "3px 8px",
      borderRadius: "5px",
      borderColor: theme.palette.secondary.main,
      alignItems: "center",
    },
    price: {
      fontSize: "18px",
      color: theme.palette.primary.main,
      lineHeight: "1",
    },
    text: {
      fontSize: "12px",
      color: "#666666",
      textOverflow: "ellipse",
      overflow: "hidden",
    },
  })
);

const PriceBadge: FunctionComponent<Props> = ({ price, text }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div className={classes.wrapper}>
      <div className={classes.text}>{text}</div>
      <div className={classes.price}>{price}₺</div>
    </div>
  );
};
export { PriceBadge };
