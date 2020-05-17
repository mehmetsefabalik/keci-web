import React from "react";
import Router from "next/router";
import axios from "axios";
import { BottomBar } from "../client/components/bottom-bar";
import { ProductCard } from "../client/components/product-card";
import { makeStyles, Theme, createStyles, Grid } from "@material-ui/core";
import { ContentCard } from "../client/components/content-card";
import { GetServerSideProps } from "next";
import { Header } from "../client/components/header";
import { WithBasket } from "../client/hocs/with-basket";
import { WithBasketDrawer } from "../client/hocs/with-basket-drawer";

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
    basket: { maxHeight: "50vh", marginBottom: "70px" },
  })
);

const Home = ({ listings }) => {
  const classes = useStyles();

  const onBuyClick = async (e) => {
    const response = await fetch("/api/me", { method: "GET" });
    if (response.ok) {
      const data = await response.json();
      if (
        data.user_type === "guest" &&
        !new URLSearchParams(window.location.search).has("allow-guest")
      ) {
        return Router.push("/giris?cb=/odeme");
      }

      return Router.push("/odeme");
    } else {
      return Router.push("/giris?cb=/odeme");
    }
  };

  return (
    <WithBasket>
      <WithBasketDrawer>
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
          <BottomBar onBuyClick={onBuyClick} />
        </div>
      </WithBasketDrawer>
    </WithBasket>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await axios.get(`${process.env.MOBILE_API}/listings`);
  return { props: { listings: response.data } };
};

export default Home;
