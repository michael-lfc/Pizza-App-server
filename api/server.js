// import dotenv from "dotenv";
// import connectToDB from "../server/db.js";
// import app from "../server/app.js";
// import serverless from "serverless-http";

// dotenv.config();

// await connectToDB(); // Connect to MongoDB

// const expressHandler = serverless(app);

// // ✅ Don't name the const 'handler' again — just export
// export const handler = async (event, context) => {
//   return await expressHandler(event, context);
// };
import app from '../server/app.js';
import dbConnect from '../server/db.js';

export default async function handler(req, res) {
  try {
    await dbConnect();
    app(req, res); // Pass request to Express
  } catch (error) {
    console.error("DB Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
