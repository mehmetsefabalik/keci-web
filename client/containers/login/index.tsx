import React, { FunctionComponent, useContext } from "react";
import Router from "next/router";
import { makeStyles } from "@material-ui/core";
import { Button } from "../../components/button";
import { PhoneInput } from "../../components/phone-input";
import { PasswordInput } from "../../components/password-input";
import NotificationContext from "../../context/notification";
import { error, success } from "../../common/util";

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
  const notif = useContext(NotificationContext);
  const [phone, setPhone] = React.useState("05");
  const [password, setPassword] = React.useState("");
  const onLogin = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone, password }),
    });
    if (response.ok) {
      success.call(notif, "Başarılı");
      return Router.push(
        new URLSearchParams(window.location.search).get("cb") || "/"
      );
    }
    const data = await response.json();
    error.call(notif, data.message);
  };
  return (
    <form onSubmit={onLogin}>
      <PhoneInput phone={phone} setPhone={setPhone} />
      <PasswordInput password={password} setPassword={setPassword} />
      <Button
        type="submit"
        name="Giriş"
        fullWidth
        className={classes.element}
      />
    </form>
  );
};
export { Login };
