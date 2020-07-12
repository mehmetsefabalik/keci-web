import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { getExpireDate } from "../../client/utils/cookie";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "POST":
      const { product_id } = req.body;
      if (!product_id) {
        return res
          .status(400)
          .json({ message: "product_id is missing in body" });
      }

      try {
        const headers: any = { connection: "keep-alive" };
        if (req.cookies.access_token) {
          headers.Cookie = `access_token=${req.cookies.access_token}`;
        }
        const response = await axios.post(
          `${process.env.MOBILE_API}/basket`,
          { product_id },
          { headers, withCredentials: true }
        );
        if (
          response.headers &&
          Array.isArray(response.headers["set-cookie"]) &&
          response.headers["set-cookie"].length
        ) {
          res.setHeader(
            "set-cookie",
            `${
              response.headers["set-cookie"][0]
            }; path=/; expires=${getExpireDate()}; HttpOnly;`
          );
        }
        return res.status(200).json(response.data);
      } catch (e) {
        console.log("error: ", e);
        return res.status(e.response.status).send({});
      }
    case "GET":
      if (!req.cookies.access_token) {
        return res.status(401).json({ message: "not a user" });
      }

      try {
        const headers: any = {
          connection: "keep-alive",
          Cookie: `access_token=${req.cookies.access_token}`,
        };
        const response = await axios.get(`${process.env.MOBILE_API}/basket`, {
          headers,
        });
        return res.status(200).json(response.data);
      } catch (e) {
        if (e.response.status !== 404) {
          console.log("error: ", e);
        }
        return res.status(e.response.status).send({});
      }
    case "PATCH":
      if (!req.cookies.access_token) {
        return res.status(401).json({ message: "not a user" });
      }
      if (!req.body.product_id || !req.body.count) {
        return res
          .status(400)
          .json({ message: "product_id or count is missing in body" });
      }
      try {
        const headers: any = {
          connection: "keep-alive",
          Cookie: `access_token=${req.cookies.access_token}`,
        };
        const response = await axios.patch(
          `${process.env.MOBILE_API}/basket`,
          { product_id: req.body.product_id, count: req.body.count },
          { headers }
        );
        return res.status(200).json(response.data);
      } catch (e) {
        console.log("error: ", e);
        return res.status(e.response.status).send({});
      }
  }
};
