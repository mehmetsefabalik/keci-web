import React, { FunctionComponent } from "react";
import { Paper, makeStyles, Theme, createStyles } from "@material-ui/core";
import { theme } from "../../theme";
import { Button } from "../button";
import { ProductImage } from "./product-image";
import { ProductContent } from "./product-content";

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
    <ProductContent name={"1 lt Doğal Keçi Sütü"} price={15} oldPrice={20} />
    {/*
    <ProductImage />
    <ProductContent />
    <Button />
    */}
  </Paper>;
};
export { ProductCard };