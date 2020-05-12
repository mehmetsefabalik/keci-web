import React, { FunctionComponent, useEffect, useContext } from "react";
import Router from "next/router";
import LoaderContext from "../../context/loader";

interface Props {
  cb: string;
}

const AllowRegisteredUser: FunctionComponent<Props> = ({ children, cb }) => {
  const { setOpen } = useContext(LoaderContext);
  const fetchMe = async () => {
    if (setOpen) setOpen(true);
    const response = await fetch("/api/me", { method: "GET" });
    if (response.ok) {
      const data = await response.json();
      if (
        data.user_type === "guest" &&
        !new URLSearchParams(window.location.search).has("allow-guest")
      ) {
        return Router.replace(`/giris?cb=${cb}`);
      }
    } else {
      return Router.replace(`/giris?cb=${cb}`);
    }
    if (setOpen) setOpen(false);
  };
  useEffect(() => {
    fetchMe();
  }, []);
  return <>{children}</>;
};
export { AllowRegisteredUser };
