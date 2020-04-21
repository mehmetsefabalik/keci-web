import React, { FunctionComponent, useState, useEffect } from "react";
import { Address } from "../../common/interface";
import { AddressProvider } from "../../context/address";
import Router from "next/router";

const WithAddress: FunctionComponent = ({ children }) => {
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [idToEdit, setIdToEdit] = useState("");
  const fetchAddresses = async () => {
    const response = await fetch("/api/addresses", { method: "GET" });
    if (response.ok) {
      setAddresses(await response.json());
    } else if (response.status === 401) {
      return Router.push(`/giris?cb=${window.location.pathname}`);
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
