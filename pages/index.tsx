import React from "react";
import Router from "next/router";
import axios from "axios";
import { BottomBar } from "../client/components/bottom-bar";
import { makeStyles, Theme, createStyles } from "@material-ui/core";
import { GetServerSideProps } from "next";
import { Header } from "../client/components/header";
import { WithBasket } from "../client/hocs/with-basket";
import { WithBasketDrawer } from "../client/hocs/with-basket-drawer";
import { Listing } from "../client/containers/listing";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      marginBottom: "120px",
    },
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
          <Listing items={listings} />
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
