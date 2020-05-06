import React, { Context } from "react";
import { BasketContext as IBasketContext } from "../common/interface";

const BasketContext: Context<Partial<IBasketContext>> = React.createContext({});

export const BasketProvider = BasketContext.Provider;
export default BasketContext;
