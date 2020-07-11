import React, { FunctionComponent } from "react";
import { Order as IOrder } from "../../interfaces/interface";
import { List } from "../../components/order/list";
import { Address } from "../../components/order/address";
import { makeStyles, Typography } from "@material-ui/core";
import { CheckCircle } from "@material-ui/icons";
import { Button } from "../../components/button";
import { useRouter } from "next/router";

interface Props {
  order: IOrder;
}

const useStyle = makeStyles({
  wrapper: {
    margin: "20px 15px",
  },
  successWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "green",
    "& svg": {
      fontSize: "60px",
    },
    marginBottom: "40px",
  },
  buttonWrapper: {
    margin: "20px 15px",
  },
});

const CheckoutSuccess: FunctionComponent<Props> = ({ order }) => {
  const classes = useStyle();
  const router = useRouter();
  const onClick = () => {
    router.push("/");
  };
  return (
    <div className={classes.wrapper}>
      <div className={classes.successWrapper}>
        <CheckCircle />
        <Typography variant="h5">Siparişiniz Alındı</Typography>
      </div>
      <List basket={order.basket} />
      <Address address={order.address} />
      <div className={classes.buttonWrapper}>
        <Button name="Anasayfaya Dön" onClick={onClick} fullWidth></Button>
      </div>
    </div>
  );
};
export { CheckoutSuccess };
