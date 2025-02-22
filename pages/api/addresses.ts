import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "POST":
      const { name, surname, phone, title, text } = req.body;

      if (!name || !surname || !phone || !title || !text) {
        return res.status(400).send({});
      }

      try {
        const headers: any = { connection: "keep-alive" };
        if (req.cookies.access_token) {
          headers.Cookie = `access_token=${req.cookies.access_token}`;
        }
        const response = await axios.post(
          `${process.env.MOBILE_API}/addresses`,
          {
            name,
            surname,
            phone,
            title,
            text,
            district_id: 0,
            neighborhood_id: 0,
          },
          { headers, withCredentials: true }
        );
        return res.status(200).json(response.data);
      } catch (e) {
        console.log("error: ", e);
        return res.status(500).json({ message: "Network Error" });
      }
    case "PATCH":
      try {
        if (!req.body.addressIdToEdit) {
          return res
            .status(400)
            .json({ message: "addressIdToEdit is required in request body" });
        }
        const headers: any = { connection: "keep-alive" };
        if (req.cookies.access_token) {
          headers.Cookie = `access_token=${req.cookies.access_token}`;
        }
        const response = await axios.patch(
          `${process.env.MOBILE_API}/addresses/${req.body.addressIdToEdit}`,
          {
            name: req.body.name,
            surname: req.body.surname,
            phone: req.body.phone,
            title: req.body.title,
            text: req.body.text,
            district_id: 0,
            neighborhood_id: 0,
          },
          { headers, withCredentials: true }
        );
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
        const response = await axios.get(
          `${process.env.MOBILE_API}/addresses`,
          {
            headers,
          }
        );
        return res.status(200).json(response.data);
      } catch (e) {
        console.log("error: ", e);
        return res.status(e.response.status).json({ message: e.resonse.body });
      }
  }
};
