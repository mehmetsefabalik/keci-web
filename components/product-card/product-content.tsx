import React, { FunctionComponent } from "react";
import { Typography, makeStyles, createStyles, Theme } from "@material-ui/core";
import { theme } from "../../theme";

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
      display: "flex",
      justifyContent: "space-between"
    },
    oldPrice: {
      color: "#999999",
      textDecoration: "line-through"
    }
  }),
);

const ProductContent: FunctionComponent<IProps> = ({ name, price, oldPrice }) => {
  const styles = useStyles(theme);
  return <div className={styles.wrapper}>
    <Typography variant="h6" className={styles.name} >{name}</Typography>
    <div className={styles.priceWrapper}>
      <Typography variant="subtitle1" >{price} ₺</Typography>
      <Typography variant="subtitle1" className={styles.oldPrice} >{oldPrice} ₺</Typography>
    </div>
  </div>;
};
export { ProductContent };