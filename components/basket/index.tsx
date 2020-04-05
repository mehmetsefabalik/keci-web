import React, { FunctionComponent, useContext } from "react";
import BasketContext from "../../context/basket";
import { Item } from "./item";
import { makeStyles, Theme, createStyles, useTheme, List, ListSubheader } from "@material-ui/core";

interface IProps { }

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      margin: "5px 10px",
    }
  }),
);

const Basket: FunctionComponent<IProps> = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { basket, updateBasket } = useContext(BasketContext);
  const getItemName = (id: string) => basket.product_info.find(product => product._id.$oid === id).name;
  const updateItem = async (id: string, count: number) => {
    const response = await fetch('/api/basket', {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ product_id: id, count })
    });
    updateBasket();
  };
  return <List
    component="nav"
    aria-labelledby="nested-list-subheader"
    subheader={
      <ListSubheader component="div" id="nested-list-subheader">
        Sepet
      </ListSubheader>
    }
  >
    {
      Array.isArray(basket.content) && basket.content.map((item, i) => (
        <Item key={i.toString()} id={item.product_id.$oid} name={getItemName(item.product_id.$oid)} count={item.count} update={updateItem} />
      ))
    }
  </List>;
};
export { Basket };