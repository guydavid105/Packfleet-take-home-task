import type { NextApiRequest, NextApiResponse } from "next";

const MAX_LENGTH_NOTES = 255;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ data: String }>
) {
  const { q } = req.query;

  return res.status(200).json({ data: "ok" });
}  