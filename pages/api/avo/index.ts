import { IncomingMessage, ServerResponse } from "http";
import DB from "../../../services/database/db";

const allAvos = async (request: IncomingMessage, response: ServerResponse) => {
  const db = new DB();
  const allEntries = await db.getAll();
  response.statusCode = 200;
  response.setHeader("Content-type", "application/json");
  response.end(JSON.stringify({ data: allEntries, length: allEntries.length }));
};

export default allAvos;
