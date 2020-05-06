import React, { FunctionComponent, useContext, useEffect } from "react";
import AddressContext from "../../context/address";
import { NativeSelect } from "@material-ui/core";

const AddressSelect: FunctionComponent<Props> = ({
  selectedAddressId,
  setSelectedAddressId,
}) => {
  const { addresses } = useContext(AddressContext);
  useEffect(() => {
    if (Array.isArray(addresses) && addresses.length === 1) {
      setSelectedAddressId(addresses[0]._id.$oid);
    }
  }, [addresses]);
  return (
    <NativeSelect
      value={selectedAddressId}
      onChange={(e) => setSelectedAddressId(e.target.value)}
      inputProps={{ style: { paddingLeft: "15px" } }}
      fullWidth
    >
      <option aria-label="None" value="" disabled={!!selectedAddressId}>
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

export interface Props {
  selectedAddressId: string;
  setSelectedAddressId: (id: string) => void;
}

export { AddressSelect };
