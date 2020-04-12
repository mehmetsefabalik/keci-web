import React, { useEffect } from "react";
import { makeStyles, Grid } from "@material-ui/core";
import Router from "next/router";

const useStyles = makeStyles({});

const Odeme = () => {
  const fetchMe = async () => {
    const response = await fetch("/api/me", { method: "GET" });
    if (response.ok) {
      const data = await response.json();
      if (
        data.user_type === "guest" &&
        !new URLSearchParams(window.location.search).has("allow-guest")
      ) {
        return Router.push("/giris?cb=/odeme");
      }
    } else {
      return Router.push("/giris?cb=/odeme");
    }
  };
  useEffect(() => {
    fetchMe();
  }, []);
  return (
    <>
      <Grid container alignItems="center" justify="center">
        Odeme
      </Grid>
    </>
  );
};

export default Odeme;
