import React, { FunctionComponent } from "react";
import { Paper, makeStyles, Theme, createStyles } from "@material-ui/core";
import { theme } from "../../theme";
import { Button } from "../button";
import { ProductImage } from "./product-image";

interface IProps {

}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      height: "40vh",
      width: "45vw"
    },
  }),
);

const ProductCard: FunctionComponent<IProps> = () => {
  const classes = useStyles(theme);

  return <Paper className={classes.paper} elevation={3}>
    <ProductImage />
    {/*
    <ProductImage />
    <ProductContent />
    <Button />
    */}
  </Paper>;
};
export { ProductCard };