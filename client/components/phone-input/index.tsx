import React, { FunctionComponent } from "react";
import { TextField } from "@material-ui/core";
import NumberFormat from "react-number-format";

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

interface Props {
  phone: string;
  setPhone: Function;
}

const PhoneInput: FunctionComponent<Props> = ({ phone, setPhone }) => {
  return (
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
      style={{ margin: "5px 0" }}
    />
  );
};
export { PhoneInput };
