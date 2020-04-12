import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { api } from "../../common/constant";
import { getExpireDate } from "../../common/util";

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
          `${api.mobile}/basket`,
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
        return res.status(500).json({ message: "Network Error" });
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
        const response = await axios.get(`${api.mobile}/basket`, { headers });
        return res.status(200).json(response.data);
      } catch (e) {
        console.log("error: ", e);
        return res.status(500).json({ message: "Network Error" });
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
          `${api.mobile}/basket`,
          { product_id: req.body.product_id, count: req.body.count },
          { headers }
        );
        return res.status(200).json(response.data);
      } catch (e) {
        console.log("error: ", e);
        return res.status(500).json({ message: "Network Error" });
      }
  }
};
