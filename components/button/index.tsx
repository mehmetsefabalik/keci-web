import React, { FunctionComponent } from "react";
import MuiButton from "@material-ui/core/Button"

interface IProps {
  name: string;
  onClick: () => null;
  className?: string;
  color?: "primary" | "secondary";
};

const Button: FunctionComponent<IProps> = ({ color = "primary", name, className = "", onClick }) => {
  return <>
    <MuiButton className={className} onClick={onClick} color={color} variant="contained">{name}</MuiButton>
  </>;
};
export { Button };
