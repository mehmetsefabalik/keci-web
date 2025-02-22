import React, { FunctionComponent, useContext } from "react";
import {
  Paper,
  makeStyles,
  Theme,
  createStyles,
  useTheme,
} from "@material-ui/core";
import { Button } from "../button";
import { ProductImage } from "./product-image";
import { ProductContent } from "./product-content";
import BasketContext from "../../context/basket";

interface Props {
  id: string;
  name: string;
  price: number;
  oldPrice: number;
  imageUrl: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      height: "325px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "5px 0",
    },
    addToBasketWrapper: {
      padding: "2px 5px",
    },
  })
);

const ProductCard: FunctionComponent<Props> = ({
  name,
  price,
  oldPrice,
  imageUrl,
  id,
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { updateBasket } = useContext(BasketContext);

  const onAddToBasketClick = async () => {
    await fetch("/api/basket", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    updateBasket();
  };

  return (
    <Paper className={classes.paper} elevation={2}>
      <ProductImage src={imageUrl} />
      <ProductContent name={name} price={price} oldPrice={oldPrice} />
      <div className={classes.addToBasketWrapper}>
        <Button
          onClick={onAddToBasketClick}
          name="Sepete Ekle"
          variant="outlined"
          fullWidth={true}
        />
      </div>
    </Paper>
  );
};
export { ProductCard };
