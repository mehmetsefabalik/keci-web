import React, { FunctionComponent } from "react";
import { Basket, ObjectId } from "../../common/interface";
import { List as MuiList } from "@material-ui/core";
import { Item } from "./item";

interface Props {
  basket: Basket;
}

const List: FunctionComponent<Props> = ({ basket }) => {
  const getProduct = (id: ObjectId) =>
    basket.product_info.find((obj) => obj._id.$oid === id.$oid);

  const getItemName = (id: ObjectId) => getProduct(id).name;

  const getPriceOfProduct = (id: ObjectId) => getProduct(id).price;

  return (
    <MuiList component="nav">
      {basket &&
        Array.isArray(basket.content) &&
        basket.content.map((item) => (
          <Item
            key={item.product_id.$oid}
            price={getPriceOfProduct(item.product_id) * item.count}
            count={item.count}
            name={getItemName(item.product_id)}
          />
        ))}
    </MuiList>
  );
};
export { List };
