import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { api } from "../../client/common/constant";
import { getExpireDate } from "../../client/common/util";
import { signupBody } from "../../bff/validation-schemas/signup";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "POST":
      const { phone, password } = req.body;
      const { error } = signupBody.validate({ phone, password });
      console.log(error)
      if (error) {
        return res.status(400).json({ message: error.message });
      }

      try {
        const headers: any = { connection: "keep-alive" };
        if (req.cookies.access_token) {
          headers.Cookie = `access_token=${req.cookies.access_token}`;
        }
        const response = await axios.post(
          `${api.mobile}/users`,
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
