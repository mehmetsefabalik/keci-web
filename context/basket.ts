import React, { Context } from "react";
import { BasketContext } from "../common/interface";

const BasketContext: Context<Partial<BasketContext>> = React.createContext({});

export const BasketProvider = BasketContext.Provider;
export default BasketContext;
