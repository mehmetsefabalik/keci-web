import React, { FunctionComponent } from "react";
import { Typography, makeStyles, createStyles, Theme, useTheme } from "@material-ui/core";
import { PriceBadge } from "./price-badge";

interface IProps {
  name: string;
  price: number;
  oldPrice: number;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      padding: "5px 10px"
    },
    name: {
      fontSize: "16px",
      lineHeight: "20px"
    },
    priceWrapper: {
      marginTop: "5px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    },
    oldPrice: {
      color: "#999999",
      textDecoration: "line-through"
    }
  }),
);

const ProductContent: FunctionComponent<IProps> = ({ name, price, oldPrice }) => {
  const theme = useTheme();
  const styles = useStyles(theme);
  return <div className={styles.wrapper}>
    <Typography variant="h6" className={styles.name} >{name}</Typography>
    <div className={styles.priceWrapper}>
      <Typography variant="subtitle1" className={styles.oldPrice} >{oldPrice} ₺</Typography>
      <PriceBadge price={price} text={"Özel İndirim"} />
    </div>
  </div>;
};
export { ProductContent };