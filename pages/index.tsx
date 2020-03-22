import React from "react";
import { BottomBar } from '../components/bottom-bar';
import { ProductCard } from "../components/product-card";
import { makeStyles, Theme, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    products: {
      display: "flex",
      justifyContent: "space-between",
      margin: "10px"
    }
  }),
);

const Home = () => {
  const classes = useStyles();
  const onBottomBarClick = () => {
    console.log("on bottom bar click");
  };

  const onBuyClick = e => {
    console.log("on buy click");
    e.stopPropagation();
  };
  return <>
    <div className={classes.products}>
      <ProductCard />
      <ProductCard />
    </div>
    <BottomBar onClick={onBottomBarClick} onBuyClick={onBuyClick} price={"15"} />
  </>;
};

export default Home;
