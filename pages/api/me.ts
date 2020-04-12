import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      try {
        let payload;
        if (
          req.cookies.access_token &&
          req.cookies.access_token.split(".").length === 3
        ) {
          payload = req.cookies.access_token.split(".")[1];
        } else {
          return res
            .status(404)
            .json({ message: "not a user, valid access_token does not exist" });
        }

        const data = JSON.parse(Buffer.from(payload, "base64").toString());

        return res.status(200).json(data);
      } catch (e) {
        console.log("error: ", e);
        return res.status(404).json({ message: "not a user" });
      }
    default:
      return res.status(404).json({});
  }
};
