import React, { Context } from "react";
import { BasketDrawerContext as IBasketDrawerContext } from "../interfaces/basket-drawer";

const BasketDrawerContext: Context<Partial<
  IBasketDrawerContext
>> = React.createContext({});

export const BasketDrawerProvider = BasketDrawerContext.Provider;
export default BasketDrawerContext;
