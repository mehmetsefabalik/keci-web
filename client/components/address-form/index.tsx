import React, { FunctionComponent, ChangeEvent } from "react";
import { TextField, Grid, FormControl } from "@material-ui/core";
import { Button } from "../button";

interface Props {
  name: string;
  surname: string;
  title: string;
  text: string;
  setName: (e: string) => void;
  setSurname: (e: string) => void;
  setTitle: (e: string) => void;
  setText: (e: string) => void;
  className?: string;
  onSubmit: () => void;
}

const AddressForm: FunctionComponent<Props> = ({
  name,
  surname,
  title,
  text,
  setName,
  setSurname,
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
              <TextField label="İsim" value={name} onChange={onNameChange} />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                label="Soyisim"
                value={surname}
                onChange={onSurnameChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                label="Adres Başlığı (Örnek: Evim)"
                value={title}
                onChange={onTitleChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                label="Adres"
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
