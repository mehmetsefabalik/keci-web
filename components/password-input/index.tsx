import React, { FunctionComponent, useState } from "react";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

interface Props {
  password: string;
  setPassword: Function;
}

const PasswordInput: FunctionComponent<Props> = ({ password, setPassword }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <FormControl fullWidth variant="outlined" style={{ margin: "5px 0" }}>
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
  );
};
export { PasswordInput };
