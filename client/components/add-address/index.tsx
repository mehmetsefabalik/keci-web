import React, {
  FunctionComponent,
  useState,
  useContext,
  useEffect,
} from "react";
import { Drawer } from "../drawer";
import { AddressForm } from "../address-form";
import { makeStyles } from "@material-ui/core";
import AddressContext from "../../context/address";
import NotificationContext from "../../context/notification";
import { warning } from "../../utils/notification";

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
  const { update, addresses } = useContext(AddressContext);
  const notif = useContext(NotificationContext);
  const classes = useStyles();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const reset = () => {
    setName("");
    setSurname("");
    setPhone("");
    setTitle("");
    setText("");
  };

  const onSubmit = async () => {
    const response = await fetch("/api/addresses", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, surname, phone, title, text }),
    });

    if (response.ok) {
      notif.setSeverity("success");
      notif.setMessage("Adres Eklendi");
      notif.setOpen(true);
      update();
      reset();
      setOpen(false);
    } else {
      console.log("error");
    }
  };
  useEffect(() => {
    if (Array.isArray(addresses) && !addresses.length) {
      warning.call(notif, "Lütfen Adres Ekleyin");
      setOpen(true);
    }
  }, [addresses]);
  return (
    <Drawer open={open} setOpen={setOpen} anchor="bottom">
      <AddressForm
        onSubmit={onSubmit}
        className={classes.form}
        name={name}
        surname={surname}
        phone={phone}
        title={title}
        text={text}
        setName={setName}
        setSurname={setSurname}
        setPhone={setPhone}
        setTitle={setTitle}
        setText={setText}
      />
    </Drawer>
  );
};
export { AddAddress };
