import React, { FunctionComponent, useState, useEffect } from "react";
import { Address } from "../../common/interface";
import { AddressProvider } from "../../context/address";

const WithAddress: FunctionComponent = ({ children }) => {
  const [addresses, setAddresses] = useState<Address[]>(null);
  const [idToEdit, setIdToEdit] = useState("");
  const fetchAddresses = async () => {
    const response = await fetch("/api/addresses", { method: "GET" });
    let responseBody;
    try {
      responseBody = await response.json();
    } catch (e) {
      console.error(e);
      responseBody = [];
    }

    if (response.ok) {
      setAddresses(responseBody);
    }
  };
  const update = async () => {
    fetchAddresses();
  };

  useEffect(() => {
    fetchAddresses();
  }, []);
  return (
    <AddressProvider
      value={{
        addresses,
        update,
        setIdToEdit,
        idToEdit,
      }}
    >
      {children}
    </AddressProvider>
  );
};
export { WithAddress };
