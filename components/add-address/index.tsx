import React, { FunctionComponent, useState, useContext } from "react";
import { BottomDrawer } from "../bottom-drawer";
import { AddressForm } from "../address-form";
import { makeStyles } from "@material-ui/core";
import AddressContext from "../../context/address";
import NotificationContext from "../../context/notification";

interface Props {
  open: boolean;
  setOpen: (e: boolean) => void;
}

const useStyles = makeStyles({
  form: {
    padding: "20px 10px 40px 10px",
  },
});

const AddAddress: FunctionComponent<Props> = ({ open, setOpen }) => {
  const { update } = useContext(AddressContext);
  const notif = useContext(NotificationContext);
  const classes = useStyles();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const onSubmit = async () => {
    const response = await fetch("/api/addresses", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, surname, title, text }),
    });

    if (response.ok) {
      notif.setSeverity("success");
      notif.setMessage("Adres Eklendi");
      notif.setOpen(true);
      update();
      setOpen(false);
    } else {
      console.log("error");
    }
  };
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
