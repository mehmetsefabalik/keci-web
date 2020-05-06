import React, { FunctionComponent, useContext } from "react";
import BasketContext from "../../context/basket";
import { Item } from "./item";
import { List, ListSubheader, makeStyles } from "@material-ui/core";
import { Content } from "../bottom-bar/content";

const useStyle = makeStyles({
  buyBox: {
    position: "fixed",
    height: "60px",
    bottom: "0px",
    width: "100vw",
    display: "flex",
    alignItems: "center",
  },
});

const Basket: FunctionComponent<{}> = () => {
  const classes = useStyle();
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
      body: JSON.stringify({ product_id: id, count }),
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
            id={item.product_id.$oid}
            name={getItemName(item.product_id.$oid)}
            count={item.count}
            update={updateItem}
          />
        ))}
      <div className={classes.buyBox}>
        <Content onBuyClick={() => {}} />
      </div>
    </List>
  );
};
export { Basket };
