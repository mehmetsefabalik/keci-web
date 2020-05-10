import React, { FunctionComponent } from "react";
import Link from "next/link";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

interface Props {
  name: string;
  icon: any;
  href: string;
  onClick?: () => void;
}

const Item: FunctionComponent<Props> = ({ name, icon, href, onClick }) => {
  return (
    <>
      {onClick ? (
        <ListItem button onClick={onClick}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={name} />
        </ListItem>
      ) : (
        <Link href={href}>
          <ListItem button>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={name} />
          </ListItem>
        </Link>
      )}
    </>
  );
};
export { Item };
