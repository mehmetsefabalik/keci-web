import React, { useEffect, useState } from "react";
import axios from "axios";
import { BottomBar } from "../components/bottom-bar";
import { ProductCard } from "../components/product-card";
import { makeStyles, Theme, createStyles, Grid } from "@material-ui/core";
import { api } from "../common/constant";
import { ContentCard } from "../components/content-card";
import { BottomDrawer } from "../components/bottom-drawer";
import { IBasket } from "../common/interface";
import { BasketProvider } from "../context/basket";
import { GetServerSideProps } from "next";

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
    console.log("on buy click");
    e.stopPropagation();
  };
  return (
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
                <Grid item>
                  <ProductCard
                    key={i.toString()}
                    id={listing.product._id.$oid}
                    name={listing.product.name}
                    price={listing.product.price}
                    oldPrice={listing.product.old_price}
                    imageUrl={listing.product.image_url}
                  />
                </Grid>
              ) : (
                <Grid item>
                  <ContentCard
                    key={i.toString()}
                    header={listing.header}
                    text={listing.text}
                  />
                </Grid>
              )
            )}
          </Grid>
        </div>
        {
          // TODO: add bottom drawer unit tests
        }
        <BottomDrawer
          open={bottomDrawerIsOpen}
          setOpen={(isOpen) => setBottomDrawerIsOpen(isOpen)}
        />
        <BottomBar onClick={onBottomBarClick} onBuyClick={onBuyClick} />
      </div>
    </BasketProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await axios.get(`${api.mobile}/listings`);
  return { props: { listings: response.data } };
};

export default Home;
