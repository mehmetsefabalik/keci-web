import React, { FunctionComponent } from "react";
import { Order as IOrder, ObjectId } from "../../common/interface";
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

interface Props {
  order: IOrder;
}

/*
content: [
  {
    product_id: "a",
    count: 1
  },
  {
    product_id: "b",
    count:3
  },
  {
    product_id: "c",
    count:5
  }
],
product_info: [
  {
    _id: { $oid: "a" },
    price: 15
  },
  {
    _id: "b",
    price: 30
  },
  {
    _id: "c",
    price: 50
  }
]
*/

const useStyle = makeStyles((theme: Theme) => ({
  productWrapper: {
    display: "flex",
    flexDirection: "column",
  },
  panelSummary: {
    "& .MuiExpansionPanelSummary-content": {
      justifyContent: "space-between",
      padding: "0 15px",
    },
  },
  summaryPrice: {
    color: theme.palette.primary.main,
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
      <ExpansionPanelDetails>
        <List basket={order.basket} />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};
export { Order };
