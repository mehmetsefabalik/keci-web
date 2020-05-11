import React, { FunctionComponent, useState, useEffect } from "react";
import { LoaderProvider } from "../../context/loader";
import { CircularProgress } from "@material-ui/core";
import ReactDOM from "react-dom";

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
      }}
    >
      <CircularProgress disableShrink />
    </div>
  );

  return <LoaderProvider value={{ open, setOpen }}>{children}</LoaderProvider>;
};
export { WithLoader };
