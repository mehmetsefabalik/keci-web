import React, { Context } from "react";
import { AddressContext as IAddressContext } from "../common/interface";

const AddressContext: Context<Partial<IAddressContext>> = React.createContext(
  {}
);

export const AddressProvider = AddressContext.Provider;
export default AddressContext;
