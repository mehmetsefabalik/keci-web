import React, { FunctionComponent, useContext } from "react";
import AddressContext from "../../context/address";
import { NativeSelect } from "@material-ui/core";

const AddressSelect: FunctionComponent = () => {
  const { addresses } = useContext(AddressContext);
  return (
    <NativeSelect>
      <option aria-label="None" value="">
        Adres Seçin
      </option>
      {addresses &&
        addresses.map((address) => (
          <option key={address._id.$oid} value={address._id.$oid}>
            {address.name}
          </option>
        ))}
    </NativeSelect>
  );
};
export { AddressSelect };
