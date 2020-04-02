import React, { useEffect, useState } from "react";
import { BottomBar } from '../components/bottom-bar';
import { ProductCard } from "../components/product-card";
import { makeStyles, Theme, createStyles } from "@material-ui/core";
import { api } from "../common/constant";
import { ContentCard } from "../components/content-card";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    products: {
      display: "flex",
      justifyContent: "space-between",
      margin: "10px"
    },
    contents: {
      display: "flex",
      justifyContent: "space-between",
      margin: "10px 10px 80px 10px"
    }
  }),
);

const Home = () => {
  const classes = useStyles();
  const [listings, setListings] = useState([]);
  const [contents, setContents] = useState([]);

  const onBottomBarClick = () => {
    console.log("on bottom bar click");
  };

  const fetchListings = async () => {
    const listingResponse = await fetch(`${api.mobile}/listings`, { method: 'GET' });
    if (listingResponse.ok) {
      const listings = await listingResponse.json();
      if (Array.isArray(listings) && listings.length > 0) {
        setListings(listings);
      }
    }
  };

  const fetchContents = async () => {
    const contentResponse = await fetch(`${api.mobile}/contents`, { method: 'GET' });
    if (contentResponse.ok) {
      const contents = await contentResponse.json();
      if (Array.isArray(contents) && contents.length > 0) {
        setContents(contents);
      }
    }
  };

  useEffect(() => {
    fetchListings();
    fetchContents();
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
    <div className={classes.contents} >
      {
        contents.map((content, i) => <ContentCard key={i.toString()} header={content.header} text={content.text} />)
      }
    </div>
    <BottomBar onClick={onBottomBarClick} onBuyClick={onBuyClick} price={"15"} />
  </>;
};

export default Home;
