// // api/index.js
// import { connectToDB } from "../db.js";
// import app from "../app.js";

// export default async function handler(req, res) {
//   try {
//     await connectToDB();
//     return app(req, res); // 👈 Adapts Express to serverless
//   } catch (error) {
//     console.error("Database connection failed:", error);
//     return res.status(500).json({ error: "Internal server error" });
//   }
// }

// api/index.js
import { connectToDB } from "../db.js";
import app from "../app.js";

// Manually set CORS headers here
function setCorsHeaders(res) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

export default async function handler(req, res) {
  // ✅ Set CORS headers
  setCorsHeaders(res);

  // ✅ Handle preflight requests (CORS "OPTIONS" request)
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    await connectToDB();
    return app(req, res); // 👈 Pass to Express
  } catch (error) {
    console.error("Database connection failed:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
