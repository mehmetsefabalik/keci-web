import React, { FunctionComponent } from "react";
import MuiButton from "@material-ui/core/Button";

interface Props {
  name: string;
  onClick?: () => void;
  className?: string;
  color?: "primary" | "secondary";
  fullWidth?: boolean;
  variant?: "outlined" | "contained";
  type?: "button" | "submit" | "reset";
}

const Button: FunctionComponent<Props> = ({
  color = "primary",
  name,
  className = "",
  onClick,
  fullWidth = false,
  variant = "contained",
  type = "button",
}) => {
  return (
    <>
      <MuiButton
        className={className}
        onClick={onClick}
        color={color}
        variant={variant}
        fullWidth={fullWidth}
        type={type}
      >
        {name}
      </MuiButton>
    </>
  );
};

export { Button };
