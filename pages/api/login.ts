import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { api } from "../../common/constant";
import { getExpireDate } from "../../common/util";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "POST":
      const { phone, password } = req.body;
      if (!phone || !password) {
        return res
          .status(400)
          .json({ message: "phone or password is missing in body" });
      }

      try {
        const headers: any = { connection: "keep-alive" };
        if (req.cookies.access_token) {
          headers.Cookie = `access_token=${req.cookies.access_token}`;
        }
        const response = await axios.post(
          `${api.mobile}/users/validate`,
          { phone, password },
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
    default:
      return res.status(404).json({});
  }
};
