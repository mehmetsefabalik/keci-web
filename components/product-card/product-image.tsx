import React, { FunctionComponent } from "react";

interface Props {
  src?: string;
}

const ProductImage: FunctionComponent<Props> = ({
  src = "https://5.imimg.com/data5/HL/RC/AU/SELLER-46798719/milk-bottle-500x500.jpg",
}) => {
  return (
    <img
      style={{
        maxHeight: "50%",
        objectFit: "contain",
      }}
      src={src}
    />
  );
};
export { ProductImage };
