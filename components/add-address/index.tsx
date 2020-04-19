import React, { FunctionComponent, useEffect, useState } from "react";
import { BottomDrawer } from "../bottom-drawer";
import { AddressForm } from "../address-form";
import { makeStyles } from "@material-ui/core";

interface Props {
  addressId: string | null;
  open: boolean;
  setOpen: (e: boolean) => void;
}

const useStyles = makeStyles({
  form: {
    padding: "20px 10px 40px 10px",
  },
});

const AddAddress: FunctionComponent<Props> = ({ addressId, open, setOpen }) => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const onSubmit = () => {
    console.log("on add address submit");
  };
  useEffect(() => {
    if (addressId) {
    }
  }, [addressId]);
  return (
    <BottomDrawer open={open} setOpen={setOpen}>
      <AddressForm
        onSubmit={onSubmit}
        className={classes.form}
        name={name}
        surname={surname}
        title={title}
        text={text}
        setName={setName}
        setSurname={setSurname}
        setTitle={setTitle}
        setText={setText}
      />
    </BottomDrawer>
  );
};
export { AddAddress };
