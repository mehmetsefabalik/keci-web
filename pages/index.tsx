import React, { useEffect, useState } from "react";
import { BottomBar } from '../components/bottom-bar';
import { ProductCard } from "../components/product-card";
import { makeStyles, Theme, createStyles } from "@material-ui/core";
import { api } from "../common/constant";
import { ContentCard } from "../components/content-card";
import { BottomDrawer } from "../components/bottom-drawer";
import { IBasket } from "../common/interface";
import { BasketProvider } from "../context/basket";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      marginBottom: "120px"
    },
    products: {
      display: "flex",
      justifyContent: "space-between",
      margin: "10px"
    },
    contents: {
      display: "flex",
      justifyContent: "space-between",
      margin: "10px"
    }
  }),
);

const Home = () => {
  const classes = useStyles();
  const [listings, setListings] = useState([]);
  const [contents, setContents] = useState([]);
  const [basket, setBasket] = useState<IBasket>();
  const [totalBasketAmount, setTotalBasketAmount] = useState(0);
  const [bottomDrawerIsOpen, setBottomDrawerIsOpen] = useState(false);

  const onBottomBarClick = () => {
    setBottomDrawerIsOpen(!bottomDrawerIsOpen);
  };

  const calculateTotalBasketAmount = () => {
    if (basket && Array.isArray(basket.content) && basket.content.length) {
      let total = 0;
      const { product_info } = basket;
      basket.content.forEach(item => {
        const price = product_info.find(product => product._id.$oid === item.product_id.$oid).price;
        total += price * item.count;
      });
      setTotalBasketAmount(total);
    }
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

  const fetchBasket = async () => {
    const basketResponse = await fetch(`/api/basket`, { method: 'GET' });
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
    }
  }, [basket]);

  useEffect(() => {
    fetchListings();
    fetchContents();
    fetchBasket();
  }, []);

  const onBuyClick = e => {
    console.log("on buy click");
    e.stopPropagation();
  };
  return <BasketProvider value={{ basket, updateBasket: () => { fetchBasket(); }, totalAmount: totalBasketAmount }}>
    <div className={classes.wrapper}>
      <div className={classes.products}>
        {
          listings.map((listing, i) => (
            <ProductCard
              key={i.toString()}
              id={listing.product._id.$oid}
              name={listing.product.name}
              price={listing.product.price}
              oldPrice={listing.product.old_price}
              imageUrl={listing.product.image_url}
            />
          ))
        }
      </div>
      <div className={classes.contents} >
        {
          contents.map((content, i) => <ContentCard key={i.toString()} header={content.header} text={content.text} />)
        }
      </div>
      {
        // TODO: add bottom drawer unit tests
      }
      <BottomDrawer open={bottomDrawerIsOpen} setOpen={(isOpen) => setBottomDrawerIsOpen(isOpen)} />
      <BottomBar onClick={onBottomBarClick} onBuyClick={onBuyClick} />
    </div>
  </BasketProvider>;
};

export default Home;
