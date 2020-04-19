import React, { useEffect, useState } from "react";
import Router from "next/router";
import axios from "axios";
import { BottomBar } from "../components/bottom-bar";
import { ProductCard } from "../components/product-card";
import { makeStyles, Theme, createStyles, Grid } from "@material-ui/core";
import { api } from "../common/constant";
import { ContentCard } from "../components/content-card";
import { BottomDrawer } from "../components/bottom-drawer";
import { Basket } from "../components/basket";
import { Basket as IBasket } from "../common/interface";
import { BasketProvider } from "../context/basket";
import { GetServerSideProps } from "next";
import { Header } from "../components/header";

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
  const [basket, setBasket] = useState<IBasket>();
  const [totalBasketAmount, setTotalBasketAmount] = useState(0);
  const [basketItemCount, setBasketItemCount] = useState(0);
  const [bottomDrawerIsOpen, setBottomDrawerIsOpen] = useState(false);

  const onBottomBarClick = () => {
    setBottomDrawerIsOpen(!bottomDrawerIsOpen);
  };

  const calculateTotalBasketAmount = () => {
    if (basket && Array.isArray(basket.content) && basket.content.length) {
      let total = 0;
      const { product_info } = basket;
      basket.content.forEach((item) => {
        const price = product_info.find(
          (product) => product._id.$oid === item.product_id.$oid
        ).price;
        total += price * item.count;
      });
      setTotalBasketAmount(total);
    } else {
      setTotalBasketAmount(0);
    }
  };

  const calculateBasketItemCount = () => {
    if (basket && Array.isArray(basket.content) && basket.content.length) {
      const tempItemCount = basketItemCount;
      const count = basket.content.reduce((acc, item) => acc + item.count, 0);
      setBasketItemCount(count);
      if (tempItemCount === 0 && count === 1) {
        setBottomDrawerIsOpen(true);
      }
    } else {
      setBasketItemCount(0);
    }
  };

  const fetchBasket = async () => {
    const basketResponse = await fetch(`/api/basket`, { method: "GET" });
    if (basketResponse.ok) {
      const basket = await basketResponse.json();
      if (basket._id) {
        setBasket(basket);
      }
    }
  };

  useEffect(() => {
    if (basket && basket._id) {
      calculateTotalBasketAmount();
      calculateBasketItemCount();
    }
  }, [basket]);

  useEffect(() => {
    fetchBasket();
  }, []);

  const onBuyClick = (e) => {
    Router.push("/odeme");
    e.stopPropagation();
  };
  return (
    <>
      <Header />
      <BasketProvider
        value={{
          basket,
          updateBasket: () => {
            fetchBasket();
          },
          totalAmount: totalBasketAmount,
          itemCount: basketItemCount,
        }}
      >
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
          <BottomDrawer
            open={bottomDrawerIsOpen}
            setOpen={setBottomDrawerIsOpen}
          >
            <div style={{ maxHeight: "50vh", marginBottom: "70px" }}>
              <Basket />
            </div>
          </BottomDrawer>
          <BottomBar onClick={onBottomBarClick} onBuyClick={onBuyClick} />
        </div>
      </BasketProvider>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await axios.get(`${api.mobile}/listings`);
  return { props: { listings: response.data } };
};

export default Home;
