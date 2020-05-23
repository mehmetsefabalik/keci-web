import React, { FunctionComponent } from "react";
import { Order as IOrder } from "../../common/interface";
import { Order } from "../../components/order";
import { makeStyles } from "@material-ui/core";

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
      {Array.isArray(orders) &&
        orders.map((order, i) => <Order key={i.toString()} order={order} />)}
    </div>
  );
};

export { Orders };
