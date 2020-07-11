import React, { Context } from "react";
import { BasketDrawerContext as IBasketDrawerContext } from "../interfaces/interface";

const BasketDrawerContext: Context<Partial<
  IBasketDrawerContext
>> = React.createContext({});

export const BasketDrawerProvider = BasketDrawerContext.Provider;
export default BasketDrawerContext;
