import React, { FunctionComponent } from "react";
import { Order as IOrder } from "../../common/interface";
import { List } from "../../components/order/list";
import { Address } from "../../components/order/address";
import { makeStyles } from "@material-ui/core";

interface Props {
  order: IOrder;
}

const useStyle = makeStyles({
  wrapper: {
    margin: "40px 15px",
  },
});

const OrderDetail: FunctionComponent<Props> = ({ order }) => {
  const classes = useStyle();
  return (
    <div className={classes.wrapper}>
      <List basket={order.basket} />
      <Address address={order.address} />
    </div>
  );
};
export { OrderDetail };
