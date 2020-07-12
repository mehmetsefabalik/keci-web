import React, { FunctionComponent } from "react";
import { Basket } from "../../interfaces/basket";
import { ObjectId } from "../../interfaces";
import { List as MuiList, makeStyles, ListSubheader } from "@material-ui/core";
import { Item } from "./item";

interface Props {
  basket: Basket;
}

const useStyle = makeStyles({
  list: {
    width: "100%",
  },
  subheader: {
    lineHeight: "normal",
  },
});

const List: FunctionComponent<Props> = ({ basket }) => {
  const classes = useStyle();

  const getProduct = (id: ObjectId) =>
    basket.product_info.find((obj) => obj._id.$oid === id.$oid);

  const getItemName = (id: ObjectId) => getProduct(id).name;

  const getPriceOfProduct = (id: ObjectId) => getProduct(id).price;

  return (
    <MuiList
      component="div"
      className={classes.list}
      subheader={
        <ListSubheader className={classes.subheader} component="div">
          Ürünler
        </ListSubheader>
      }
    >
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
