import { NextApiRequest, NextApiResponse } from "next";

const expire = () => new Date(1970).toUTCString();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      res.setHeader(
        "set-cookie",
        `access_token=null; path=/; expires=${expire()}; HttpOnly;`
      );
      return res.status(200).send({});
    default:
      return res.status(404).json({});
  }
};
