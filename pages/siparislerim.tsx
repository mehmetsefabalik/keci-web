import React from "react";
import axios from "axios";
import { WithNotification } from "../client/hocs/with-notification";
import { Header } from "../client/components/header";
import { AllowRegisteredUser } from "../client/hocs/allow-registered-user";
import { WithLoader } from "../client/hocs/with-loader";
import { GetServerSideProps } from "next";
import { Orders } from "../client/containers/orders";

const Siparislerim = ({ orders }) => (
  <WithLoader>
    <AllowRegisteredUser cb="/odeme">
      <WithNotification>
        <Header />
        <Orders orders={orders} />
      </WithNotification>
    </AllowRegisteredUser>
  </WithLoader>
);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await axios.get(`${process.env.MOBILE_API}/orders`, {
    headers: {
      cookie: context.req.headers.cookie,
    },
  });
  return { props: { orders: response.data } };
};

export default Siparislerim;
