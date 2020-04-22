import React, { FunctionComponent, useState, useEffect } from "react";
import { Address } from "../../common/interface";
import { AddressProvider } from "../../context/address";
import Router from "next/router";

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

    if (
      Array.isArray(responseBody) &&
      !responseBody.length &&
      window.location.pathname !== "/adres"
    ) {
      const cbQuery = window.location.search
        ? `&cb-query=${window.location.search}`
        : "";
      return Router.push(`/adres?cb=${window.location.pathname}${cbQuery}`);
    }

    if (response.ok) {
      setAddresses(responseBody);
    } else if (response.status === 401) {
      const cbQuery = window.location.search
        ? `&cb-query=${window.location.search}`
        : "";
      return Router.push(`/giris?cb=${window.location.pathname}${cbQuery}`);
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
