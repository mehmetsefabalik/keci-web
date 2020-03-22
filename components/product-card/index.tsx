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
      width: "45vw",
      height: "320px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "5px 0"
    },
    addToBasketWrapper: {
      padding: "2px 5px"
    }
  }),
);

const ProductCard: FunctionComponent<IProps> = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const onAddToBasketClick = () => {
    console.log("add to basket");
  };

  return <Paper className={classes.paper} elevation={2}>
    <ProductImage />
    <ProductContent name={"1 lt Doğal Keçi Sütü"} price={15} oldPrice={20} />
    <div className={classes.addToBasketWrapper}>
      <Button onClick={onAddToBasketClick} name="Sepete Ekle" variant="outlined" fullWidth={true} />
    </div>
  </Paper>;
};
export { ProductCard };