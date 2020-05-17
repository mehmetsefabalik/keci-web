import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "POST":
      try {
        const address_id = req.body.addressId;

        if (!address_id) {
          return res.status(400).send({});
        }
        const headers: any = { connection: "keep-alive" };
        if (req.cookies.access_token) {
          headers.Cookie = `access_token=${req.cookies.access_token}`;
        }
        const response = await axios.post(
          `${process.env.MOBILE_API}/orders`,
          { address_id },
          { headers, withCredentials: true }
        );
        return res.status(200).json(response.data);
      } catch (e) {
        if (e.response) {
          return res.status(e.response.status).send(e.response.body);
        }
        console.log("error: ", e);
        return res.status(500).json({ message: "Network Error" });
      }
    default:
      return res.status(404).json({});
  }
};
