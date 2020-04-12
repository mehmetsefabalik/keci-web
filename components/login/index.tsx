import React, { FunctionComponent } from "react";
import Router from "next/router";
import { makeStyles } from "@material-ui/core";
import { Button } from "../button";
import { PhoneInput } from "../phone-input";
import { PasswordInput } from "../password-input";

const useStyles = makeStyles({
  root: {
    "& .MuiButtonBase-root": {
      paddingTop: "50px",
    },
    flexGrow: 1,
  },
  form: {
    marginTop: "50px",
  },
  element: {
    margin: "5px 0",
  },
});

const Login: FunctionComponent<{}> = () => {
  const classes = useStyles();
  const [phone, setPhone] = React.useState("05");
  const [password, setPassword] = React.useState("");
  const onLogin = async (e) => {
    e.preventDefault();
    console.log("on login", phone, password);
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone, password }),
    });
    if (response.ok) {
      Router.push(new URLSearchParams(window.location.search).get("cb") || "/");
    }
  };
  return (
    <form onSubmit={onLogin}>
      <PhoneInput phone={phone} setPhone={setPhone} />
      <PasswordInput password={password} setPassword={setPassword} />
      <Button
        type="submit"
        name="Giriş"
        onClick={() => {
          console.log("on login click");
        }}
        fullWidth
        className={classes.element}
      />
    </form>
  );
};
export { Login };
