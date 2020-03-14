import React, { FunctionComponent } from "react";

interface IProps {
  src?: string;
}

const ProductImage: FunctionComponent<IProps> = ({ src = "https://5.imimg.com/data5/HL/RC/AU/SELLER-46798719/milk-bottle-500x500.jpg" }) => {
  return <div>
    <img style={{ maxWidth: "100%", maxHeight: "100%" }} src={src} />
  </div>;
};
export { ProductImage };