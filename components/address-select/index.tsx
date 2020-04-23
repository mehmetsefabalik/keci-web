import React, { FunctionComponent, useContext } from "react";
import AddressContext from "../../context/address";
import { NativeSelect } from "@material-ui/core";

const AddressSelect: FunctionComponent = () => {
  const { addresses } = useContext(AddressContext);
  return (
    <NativeSelect fullWidth>
      <option aria-label="None" value="">
        Adres Seçin
      </option>
      {Array.isArray(addresses) &&
        addresses.map((address) => (
          <option key={address._id.$oid} value={address._id.$oid}>
            {address.title}
          </option>
        ))}
    </NativeSelect>
  );
};
export { AddressSelect };
