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
import { success, error } from "../../common/util";

interface Props {
  open: boolean;
  setOpen: (e: boolean) => void;
}

const useStyles = makeStyles({
  form: {
    padding: "20px 10px 40px 10px",
  },
});

const EditAddress: FunctionComponent<Props> = ({ open, setOpen }) => {
  const { update, addresses, idToEdit, setIdToEdit } = useContext(
    AddressContext
  );
  const notif = useContext(NotificationContext);
  const classes = useStyles();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const onSubmit = async () => {
    const response = await fetch("/api/addresses", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        surname,
        phone,
        title,
        text,
        addressIdToEdit: idToEdit,
      }),
    });

    if (response.ok) {
      success.call(notif, "Adres Güncellendi");
      update();
      setIdToEdit("");
      setOpen(false);
    } else {
      error.call(notif, "Adres Güncellenemedi");
      setOpen(false);
    }
  };

  const onDrawerClose = (status: boolean) => {
    if (!status) {
      setIdToEdit("");
    }
    setOpen(status);
  };

  useEffect(() => {
    if (idToEdit) {
      setOpen(true);
      const address = addresses.find(
        (address) => address._id.$oid === idToEdit
      );
      if (address) {
        setName(address.name);
        setSurname(address.surname);
        setPhone(address.phone);
        setTitle(address.title);
        setText(address.text);
      } else {
        error.call(notif, "Hata! Adres Bulunamadı");
      }
    }
  }, [idToEdit]);
  return (
    <Drawer open={open} setOpen={onDrawerClose} anchor="bottom">
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
export { EditAddress };
