import React, { FunctionComponent } from "react";
import { Order as IOrder, ObjectId } from "../../interfaces/interface";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  ExpansionPanelDetails,
  makeStyles,
  useTheme,
  Theme,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import { List } from "./list";
import { Address } from "./address";

interface Props {
  order: IOrder;
}

const useStyle = makeStyles((theme: Theme) => ({
  productWrapper: {
    display: "flex",
    flexDirection: "column",
  },
  panelSummary: {
    fontSize: "1.2rem",
    "& .MuiExpansionPanelSummary-content": {
      justifyContent: "space-between",
      padding: "0 15px",
    },
  },
  summaryPrice: {
    color: theme.palette.primary.main,
  },
  details: {
    marginTop: "10px",
    flexDirection: "column",
  },
}));

const Order: FunctionComponent<Props> = ({ order }) => {
  const theme = useTheme();
  const classes = useStyle(theme);

  const getProduct = (id: ObjectId) =>
    order.basket.product_info.find((obj) => obj._id.$oid === id.$oid);

  const getPriceOfProduct = (id: ObjectId) => getProduct(id).price;

  const getTotalPrice = () =>
    order.basket.content
      .map((obj) => getPriceOfProduct(obj.product_id) * obj.count)
      .reduce((acc, curr) => acc + curr);

  const productCount = (order.basket.content as any).reduce(
    (acc, curr) => acc + curr.count,
    0
  );

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMore />}
        className={classes.panelSummary}
      >
        <Typography>{productCount} Ürün</Typography>
        <Typography className={classes.summaryPrice}>
          {getTotalPrice()} ₺
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.details}>
        <List basket={order.basket} />
        <Address address={order.address} />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};
export { Order };
