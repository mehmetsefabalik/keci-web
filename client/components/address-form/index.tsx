import React, { FunctionComponent, ChangeEvent } from "react";
import { TextField, Grid, FormControl } from "@material-ui/core";
import { Button } from "../button";
import { PhoneInput } from "../phone-input";

interface Props {
  name: string;
  surname: string;
  phone: string;
  title: string;
  text: string;
  setName: (e: string) => void;
  setSurname: (e: string) => void;
  setPhone: (e: string) => void;
  setTitle: (e: string) => void;
  setText: (e: string) => void;
  className?: string;
  onSubmit: () => void;
}

const AddressForm: FunctionComponent<Props> = ({
  name,
  surname,
  phone,
  title,
  text,
  setName,
  setSurname,
  setPhone,
  setTitle,
  setText,
  onSubmit,
  className = "",
}) => {
  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onSurnameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSurname(e.target.value);
  };
  const onTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const onTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <Grid
        container
        alignItems="center"
        justify="center"
        spacing={2}
        className={className}
      >
        <Grid
          container
          item
          alignItems="center"
          justify="center"
          spacing={2}
          xs={10}
          sm={4}
        >
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                variant="outlined"
                label="İsim"
                value={name}
                onChange={onNameChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                variant="outlined"
                label="Soyisim"
                value={surname}
                onChange={onSurnameChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                variant="outlined"
                label="Adres Başlığı (Örnek: Evim)"
                value={title}
                onChange={onTitleChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <PhoneInput phone={phone} setPhone={setPhone} />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                variant="outlined"
                label="Adres (sokak, cadde, daire no vb)"
                value={text}
                onChange={onTextChange}
                multiline
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button name="Kaydet" type="submit" fullWidth />
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};
export { AddressForm };
