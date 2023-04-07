// import { IncomingMessage, ServerResponse } from "http";
import { NextApiRequest, NextApiResponse } from "next";
import DB from "../../../services/database/db";

const getAvo = async (request: NextApiRequest, response: NextApiResponse) => {
  const db = new DB();
  let id = request.query.id;
  const avo = await db.getById(id as string);
  response.status(200).json(avo);
};

export default getAvo;
