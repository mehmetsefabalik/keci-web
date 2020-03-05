import React from "react";
import { BottomBar } from '../components/bottom-bar';

const Home = () => {
  const onBottomBarClick = () => {
    console.log("on bottom bar click")
  }

  const onBuyClick = () => {
    console.log("on buy click")
  }
  return <BottomBar onClick={onBottomBarClick} onBuyClick={onBuyClick} price={"15"} />;
}

export default Home;
