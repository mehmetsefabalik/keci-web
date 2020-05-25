import React from "react";
import axios from "axios";
import { WithNotification } from "../../client/hocs/with-notification";
import { Header } from "../../client/components/header";
import { AllowRegisteredUser } from "../../client/hocs/allow-registered-user";
import { WithLoader } from "../../client/hocs/with-loader";
import { GetServerSideProps } from "next";
import { OrderDetail } from "../../client/containers/order-detail";
import { useRouter } from "next/router";
import { CheckoutSuccess } from "../../client/containers/checkout-success";

const Siparis = ({ order }) => {
  const router = useRouter();

  return (
    <WithLoader>
      <AllowRegisteredUser cb="/odeme">
        <WithNotification>
          <Header />
          {router.query["as-success"] ? (
            <CheckoutSuccess order={order} />
          ) : (
            <OrderDetail order={order} />
          )}
        </WithNotification>
      </AllowRegisteredUser>
    </WithLoader>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await axios.get(
    `${process.env.MOBILE_API}/orders/${context.params.id}`,
    {
      headers: {
        cookie: context.req.headers.cookie,
      },
    }
  );
  return { props: { order: response.data } };
};

export default Siparis;
