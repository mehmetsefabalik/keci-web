import React, { FunctionComponent } from "react";
import { List, ListSubheader } from "@material-ui/core";
import { Item } from "./item";
import { Dehaze, Business, ExitToApp } from "@material-ui/icons";

const Account: FunctionComponent = () => {
  const items = [
    { name: "Siparişlerim", icon: <Dehaze /> },
    { name: "Adreslerim", icon: <Business /> },
    { name: "Çıkış Yap", icon: <ExitToApp /> },
  ];
  return (
    <List
      component="nav"
      subheader={<ListSubheader component="div">Hesabım</ListSubheader>}
    >
      {items.map((item, index) => {
        return <Item key={index} name={item.name} icon={item.icon} />;
      })}
    </List>
  );
};
export { Account };
