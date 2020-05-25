import React from "react";
import axios from "axios";
import { WithNotification } from "../../client/hocs/with-notification";
import { Header } from "../../client/components/header";
import { AllowRegisteredUser } from "../../client/hocs/allow-registered-user";
import { WithLoader } from "../../client/hocs/with-loader";
import { GetServerSideProps } from "next";

const Odeme = ({ order }) => (
  <WithLoader>
    <AllowRegisteredUser cb="/odeme">
      <WithNotification>
        <Header />
      </WithNotification>
    </AllowRegisteredUser>
  </WithLoader>
);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await axios.get(
    `${process.env.MOBILE_API}/order/${context.query.id}`,
    {
      headers: {
        cookie: context.req.headers.cookie,
      },
    }
  );
  return { props: { order: response.data } };
};

export default Odeme;
