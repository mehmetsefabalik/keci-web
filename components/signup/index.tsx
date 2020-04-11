import React, { FunctionComponent } from "react";
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

const Signup: FunctionComponent<{}> = () => {
  const classes = useStyles();
  const [phone, setPhone] = React.useState("05");
  const [password, setPassword] = React.useState("");
  const onSignup = (e) => {
    e.preventDefault();
    console.log("on signup");
  };
  return (
    <form onSubmit={onSignup}>
      <PhoneInput phone={phone} setPhone={setPhone} />
      <PasswordInput password={password} setPassword={setPassword} />
      <Button
        type="submit"
        name="Kayıt Ol"
        onClick={() => {
          console.log("on Signup click");
        }}
        fullWidth
        className={classes.element}
      />
    </form>
  );
};
export { Signup };
