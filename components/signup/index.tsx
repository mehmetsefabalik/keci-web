import React, { FunctionComponent } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import NumberFormat from "react-number-format";
import { Button } from "../button";

interface NumberFormatCustomProps {
  inputRef: (instance: NumberFormat | null) => void;
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

function NumberFormatCustom(props: NumberFormatCustomProps) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      format="#(###) ### ## ##"
      placeholder="0(5__) ___ __ __"
      defaultValue="0"
      mask="_"
      type="tel"
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
    />
  );
}

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
  const [showPassword, setShowPassword] = React.useState(false);
  const [phone, setPhone] = React.useState("05");
  const [password, setPassword] = React.useState("");
  return (
    <>
      <TextField
        label="Telefon Numarası"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        name="phone"
        id="phone"
        InputProps={{
          inputComponent: NumberFormatCustom as any,
        }}
        variant="outlined"
        fullWidth
        className={classes.element}
      />
      <FormControl fullWidth variant="outlined" className={classes.element}>
        <InputLabel htmlFor="outlined-adornment-password">Şifre</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
                onMouseDown={(e) => e.preventDefault()}
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          labelWidth={70}
        />
      </FormControl>
      <Button
        name="Kayıt Ol"
        onClick={() => {
          console.log("on Signup click");
        }}
        fullWidth
        className={classes.element}
      />
    </>
  );
};
export { Signup };
