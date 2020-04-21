import React, { useState } from "react";
import Router from "next/router";
import axios from "axios";
import { BottomBar } from "../components/bottom-bar";
import { ProductCard } from "../components/product-card";
import { makeStyles, Theme, createStyles, Grid } from "@material-ui/core";
import { api } from "../common/constant";
import { ContentCard } from "../components/content-card";
import { BottomDrawer } from "../components/bottom-drawer";
import { Basket } from "../components/basket";
import { GetServerSideProps } from "next";
import { Header } from "../components/header";
import { WithBasket } from "../hocs/with-basket";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      marginBottom: "120px",
    },
    products: {
      display: "flex",
      justifyContent: "space-between",
      margin: "10px",
    },
    contents: {
      display: "flex",
      justifyContent: "space-between",
      margin: "10px",
    },
  })
);

const Home = ({ listings }) => {
  const classes = useStyles();

  const [bottomDrawerIsOpen, setBottomDrawerIsOpen] = useState(false);

  const onBottomBarClick = () => {
    setBottomDrawerIsOpen(!bottomDrawerIsOpen);
  };

  const onBuyClick = (e) => {
    Router.push("/odeme");
    e.stopPropagation();
  };

  return (
    <WithBasket>
      <Header />
      <div className={classes.wrapper}>
        <div className={classes.products}>
          <Grid container spacing={1} alignItems="center" justify="center">
            {listings.map((listing, i) =>
              listing.type === "product" ? (
                <Grid key={i.toString()} item xs={6} md={3} lg={2}>
                  <ProductCard
                    id={listing.product._id.$oid}
                    name={listing.product.name}
                    price={listing.product.price}
                    oldPrice={listing.product.old_price}
                    imageUrl={listing.product.image_url}
                  />
                </Grid>
              ) : (
                <Grid key={i.toString()} item xs={6} md={3} lg={2}>
                  <ContentCard header={listing.header} text={listing.text} />
                </Grid>
              )
            )}
          </Grid>
        </div>
        <BottomDrawer open={bottomDrawerIsOpen} setOpen={setBottomDrawerIsOpen}>
          <div style={{ maxHeight: "50vh", marginBottom: "70px" }}>
            <Basket />
          </div>
        </BottomDrawer>
        <BottomBar onClick={onBottomBarClick} onBuyClick={onBuyClick} />
      </div>
    </WithBasket>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await axios.get(`${api.mobile}/listings`);
  return { props: { listings: response.data } };
};

export default Home;
