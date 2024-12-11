import { NextApiRequest, NextApiResponse } from "next";
import generateFakeDrivers from "./fakeData/fakeData";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const drivers = generateFakeDrivers(5);
  res.status(200).json(drivers);
}