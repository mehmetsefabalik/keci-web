import React, { FunctionComponent } from "react";
import { Order as IOrder } from "../../interfaces/interface";
import { Order } from "../../components/order";
import { makeStyles, ListSubheader } from "@material-ui/core";

interface Props {
  orders: IOrder[];
}

const useStyle = makeStyles({
  root: {
    margin: "15px 10px",
  },
});

const Orders: FunctionComponent<Props> = ({ orders }) => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <ListSubheader>Siparişlerim</ListSubheader>
      {Array.isArray(orders) &&
        orders.map((order, i) => <Order key={i.toString()} order={order} />)}
    </div>
  );
};

export { Orders };
