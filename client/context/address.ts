import React, { Context } from "react";
import { AddressContext as IAddressContext } from "../interfaces/interface";

const AddressContext: Context<Partial<IAddressContext>> = React.createContext(
  {}
);

export const AddressProvider = AddressContext.Provider;
export default AddressContext;
