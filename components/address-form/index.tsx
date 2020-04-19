import React, { FunctionComponent, ChangeEvent } from "react";
import { TextField } from "@material-ui/core";

interface Props {
  name: string;
  surname: string;
  title: string;
  text: string;
  setName: (e: ChangeEvent<HTMLInputElement>) => void;
  setSurname: (e: ChangeEvent<HTMLInputElement>) => void;
  setTitle: (e: ChangeEvent<HTMLInputElement>) => void;
  setText: (e: ChangeEvent<HTMLInputElement>) => void;
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
}) => {
  return (
    <>
      <TextField label="İsim" value={name} onChange={setName} />
      <TextField label="Soyisim" value={surname} onChange={setSurname} />
      <TextField
        label="Adres Başlığı (Örnek: Evim)"
        value={title}
        onChange={setTitle}
      />
      <TextField label="Adres" value={text} onChange={setText} />
    </>
  );
};
export { AddressForm };
