import React, { FunctionComponent, useContext } from "react";
import BasketContext from "../../context/basket";
import { Item } from "./item";
import { List, ListSubheader } from "@material-ui/core";

const BasketItemList: FunctionComponent<{}> = () => {
  const { basket } = useContext(BasketContext);
  const getItemName = (id: string) =>
    basket.product_info.find((product) => product._id.$oid === id).name;
  const getPrice = (id: string) =>
    basket.product_info.find((product) => product._id.$oid === id).price;
  return (
    <List
      component="nav"
      subheader={<ListSubheader component="div">Ürün Listesi</ListSubheader>}
    >
      {basket &&
        Array.isArray(basket.content) &&
        basket.content.map((item, i) => (
          <Item
            key={i.toString()}
            price={getPrice(item.product_id.$oid)}
            name={getItemName(item.product_id.$oid)}
            count={item.count}
          />
        ))}
    </List>
  );
};
export { BasketItemList };
