import React, { FunctionComponent } from "react";
import Router from "next/router";
import { List, ListSubheader } from "@material-ui/core";
import { Item } from "./item";
import { Dehaze, Business, ExitToApp } from "@material-ui/icons";

const Account: FunctionComponent = () => {
  const onLogout = async () => {
    await fetch("/api/logout", { method: "GET" });
    Router.push("/");
  };
  const items = [
    { name: "Siparişlerim", icon: <Dehaze />, href: "siparislerim" },
    { name: "Adreslerim", icon: <Business />, href: "/adres" },
    { name: "Çıkış Yap", icon: <ExitToApp />, onClick: onLogout },
  ];
  return (
    <List
      component="nav"
      subheader={<ListSubheader component="div">Hesabım</ListSubheader>}
    >
      {items.map((item, index) => {
        return (
          <Item
            key={index}
            name={item.name}
            icon={item.icon}
            href={item.href}
            onClick={item.onClick}
          />
        );
      })}
    </List>
  );
};
export { Account };
