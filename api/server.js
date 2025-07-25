// api/server.js
import dotenv from "dotenv";
import connectToDB from "../server/db.js";
import app from "../server/app.js";
import serverless from "serverless-http";

dotenv.config();

await connectToDB(); // Connect only once and cache for reuse

const expressHandler = serverless(app);

export const handler = async (event, context) => {
  return await handler(event, context);
};
