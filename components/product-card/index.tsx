import React, { FunctionComponent } from "react";
import { Paper, makeStyles, Theme, createStyles, useTheme } from "@material-ui/core";
import { Button } from "../button";
import { ProductImage } from "./product-image";
import { ProductContent } from "./product-content";

interface IProps {

}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      height: "40vh",
      width: "45vw",
      minHeight: "300px"
    },
  }),
);

const ProductCard: FunctionComponent<IProps> = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return <Paper className={classes.paper} elevation={2}>
    <ProductImage />
    <ProductContent name={"1 lt Doğal Keçi Sütü"} price={15} oldPrice={20} />
  </Paper>;
};
export { ProductCard };