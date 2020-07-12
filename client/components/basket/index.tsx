import React, { FunctionComponent, useContext } from "react";
import BasketContext from "../../context/basket";
import { Item } from "./item";
import { List, ListSubheader } from "@material-ui/core";

const Basket: FunctionComponent<{}> = () => {
  const { basket, updateBasket } = useContext(BasketContext);
  const getItemName = (id: string) =>
    basket.product_info.find((product) => product._id.$oid === id).name;
  const updateItem = async (id: string, count: number) => {
    await fetch("/api/basket", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, count }),
    });
    updateBasket();
  };
  return (
    <List
      component="nav"
      subheader={<ListSubheader component="div">Sepet</ListSubheader>}
    >
      {basket &&
        Array.isArray(basket.content) &&
        basket.content.map((item, i) => (
          <Item
            key={i.toString()}
            id={item.listing_id.$oid}
            name={getItemName(item.product_id.$oid)}
            count={item.count}
            update={updateItem}
          />
        ))}
    </List>
  );
};
export { Basket };
