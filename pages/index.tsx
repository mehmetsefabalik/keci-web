import React, { useEffect, useState } from "react";
import { BottomBar } from '../components/bottom-bar';
import { ProductCard } from "../components/product-card";
import { makeStyles, Theme, createStyles } from "@material-ui/core";
import { api } from "../common/constant";

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
  const [listings, setListings] = useState([]);

  const onBottomBarClick = () => {
    console.log("on bottom bar click");
  };

  const fetchListings = async () => {
    const listingResponse = await fetch(`${api.mobile}/listings`, { method: 'GET' });
    if (listingResponse.ok) {
      const listings = await listingResponse.json();
      setListings(listings);
    }
  };

  useEffect(() => {
    fetchListings();
  }, []);

  const onBuyClick = e => {
    console.log("on buy click");
    e.stopPropagation();
  };
  return <>
    <div className={classes.products}>
      {
        listings.map((listing, i) => <ProductCard key={i.toString()} name={listing.product.name} price={listing.product.price} oldPrice={listing.product.old_price} imageUrl={listing.product.image_url} />)
      }
    </div>
    <BottomBar onClick={onBottomBarClick} onBuyClick={onBuyClick} price={"15"} />
  </>;
};

export default Home;
