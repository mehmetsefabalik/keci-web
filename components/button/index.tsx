import React, { FunctionComponent } from "react";
import MuiButton from "@material-ui/core/Button";

interface Props {
  name: string;
  onClick: () => void;
  className?: string;
  color?: "primary" | "secondary";
  fullWidth?: boolean;
  variant?: "outlined" | "contained";
}

const Button: FunctionComponent<Props> = ({
  color = "primary",
  name,
  className = "",
  onClick,
  fullWidth = false,
  variant = "contained",
}) => {
  return (
    <>
      <MuiButton
        className={className}
        onClick={onClick}
        color={color}
        variant={variant}
        fullWidth={fullWidth}
      >
        {name}
      </MuiButton>
    </>
  );
};

export { Button };
