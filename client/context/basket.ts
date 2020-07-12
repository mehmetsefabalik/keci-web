import React, { Context } from "react";
import { BasketContext as IBasketContext } from "../interfaces/basket";

const BasketContext: Context<Partial<IBasketContext>> = React.createContext({});

export const BasketProvider = BasketContext.Provider;
export default BasketContext;
