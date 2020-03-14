import React, { FunctionComponent } from "react";
import { Typography } from "@material-ui/core";

interface IProps {
  name: string;
  price: number;
  oldPrice: number;
}

const ProductContent: FunctionComponent<IProps> = ({ name, price, oldPrice }) => {
  return <div>
    <Typography variant="h6" >{name}</Typography>
    <Typography variant="subtitle1" >{price}</Typography>
    <Typography variant="subtitle1" >{oldPrice}</Typography>
  </div>;
};
export { ProductContent };