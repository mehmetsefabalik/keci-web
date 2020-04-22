import React, { FunctionComponent } from "react";
import { Home, Business } from "@material-ui/icons";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import Router from "next/router";

const MenuList: FunctionComponent = () => {
  const items = [
    { name: "Anasayfa", icon: <Home />, action: () => Router.push("/") },
    {
      name: "Adreslerim",
      icon: <Business />,
      action: () => Router.push("/adres"),
    },
  ];
  return (
    <List>
      {items.map((item, index) => (
        <ListItem button key={index.toString()} onClick={item.action}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </List>
  );
};
export { MenuList };
