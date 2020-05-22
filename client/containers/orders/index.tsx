import React, { FunctionComponent } from "react";
import { Order as IOrder } from "../../common/interface";
import { Order } from "../../components/order";

interface Props {
  orders: IOrder[];
}

const Orders: FunctionComponent<Props> = ({ orders }) => {
  return (
    <>
      {Array.isArray(orders) &&
        orders.map((order, i) => <Order key={i.toString()} order={order} />)}
    </>
  );
};

export { Orders };
