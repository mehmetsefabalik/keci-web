import React, {
  FunctionComponent,
  useState,
  useContext,
  useEffect,
} from "react";
import { BottomDrawer } from "../bottom-drawer";
import { AddressForm } from "../address-form";
import { makeStyles } from "@material-ui/core";
import AddressContext from "../../context/address";
import NotificationContext from "../../context/notification";
import { success, error } from "../../common/util";

interface Props {
  open: boolean;
  setOpen: (e: boolean) => void;
  addressIdToEdit: string;
}

const useStyles = makeStyles({
  form: {
    padding: "20px 10px 40px 10px",
  },
});

const EditAddress: FunctionComponent<Props> = ({
  open,
  setOpen,
  addressIdToEdit,
}) => {
  const { update, addresses } = useContext(AddressContext);
  const notif = useContext(NotificationContext);
  const classes = useStyles();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  useEffect(() => {
    if (addressIdToEdit) {
      const address = addresses.find(
        (address) => address._id.$oid === addressIdToEdit
      );
      if (address) {
        setName(address.name);
        setSurname(address.surname);
        setTitle(address.title);
        setText(address.text);
      } else {
        error.call(notif, "Hata");
      }
    }
  }, [addressIdToEdit]);
  const onSubmit = async () => {
    const response = await fetch("/api/addresses", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, surname, title, text, addressIdToEdit }),
    });

    if (response.ok) {
      success.call(notif, "Adres Güncellendi");
      update();
      setOpen(false);
    } else {
      error.call(notif, "Adres Güncellenemedi");
      setOpen(false);
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
export { EditAddress };
