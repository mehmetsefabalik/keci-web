import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { api } from "../../common/constant";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "POST":
      const { name, surname, title, text } = req.body;

      try {
        const headers: any = { connection: "keep-alive" };
        if (req.cookies.access_token) {
          headers.Cookie = `access_token=${req.cookies.access_token}`;
        }
        const response = await axios.post(
          `${api.mobile}/addresses`,
          { name, surname, title, text, district_id: 0, neighborhood_id: 0 },
          { headers, withCredentials: true }
        );
        return res.status(200).json(response.data);
      } catch (e) {
        console.log("error: ", e);
        return res.status(500).json({ message: "Network Error" });
      }
  }
};
