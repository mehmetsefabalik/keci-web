import React, { FunctionComponent } from "react";

interface Props {
  addresses: { name: string }[];
}

const AddressList: FunctionComponent<Props> = ({ addresses }) => {
  return (
    <>
      {addresses.map((address, i) => (
        <div key={i.toString()}>{address.name}</div>
      ))}
    </>
  );
};
export { AddressList };
