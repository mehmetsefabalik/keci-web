import React, { FunctionComponent, useState } from "react";
import { LoaderProvider } from "../../context/loader";
import { CircularProgress } from "@material-ui/core";

const WithLoader: FunctionComponent = ({ children }) => {
  const [open, setOpen] = useState(false);
  const loader = (
    <div
      id="loader"
      style={{
        position: "fixed",
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        top: 0,
        left: 0,
        background: "rgba(51, 51, 51, 0.7)",
        zIndex: 2001,
      }}
    >
      <CircularProgress disableShrink />
    </div>
  );

  return (
    <LoaderProvider value={{ open, setOpen }}>
      {children}
      {open && loader}
    </LoaderProvider>
  );
};
export { WithLoader };
