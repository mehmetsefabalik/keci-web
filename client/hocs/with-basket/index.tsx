import React, { FunctionComponent, useState, useEffect } from "react";
import { BasketProvider } from "../../context/basket";
import { Basket } from "../../interfaces/interface";

const WithBasket: FunctionComponent = ({ children }) => {
  const [basket, setBasket] = useState<Basket>();
  const [totalBasketAmount, setTotalBasketAmount] = useState(0);
  const [basketItemCount, setBasketItemCount] = useState(0);
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
      const count = basket.content.reduce((acc, item) => acc + item.count, 0);
      setBasketItemCount(count);
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
      {children}
    </BasketProvider>
  );
};
export { WithBasket };
