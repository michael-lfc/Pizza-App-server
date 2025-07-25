import dotenv from "dotenv";
import connectToDB from "../server/db.js";
import app from "../server/app.js";
import serverless from "serverless-http";

dotenv.config();

await connectToDB(); // Connect to MongoDB

const expressHandler = serverless(app);

// ✅ Don't name the const 'handler' again — just export
export const handler = async (event, context) => {
  return await expressHandler(event, context);
};
