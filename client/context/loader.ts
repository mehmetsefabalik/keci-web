import React, { Context } from "react";
import { LoaderContext as ILoaderContext } from "../common/interface";

const LoaderContext: Context<Partial<ILoaderContext>> = React.createContext({});

export const LoaderProvider = LoaderContext.Provider;
export default LoaderContext;
