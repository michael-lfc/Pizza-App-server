// // // api/index.js
// // import { connectToDB } from "../db.js";
// // import app from "../app.js";

// // export default async function handler(req, res) {
// //   try {
// //     await connectToDB();
// //     return app(req, res); // 👈 Adapts Express to serverless
// //   } catch (error) {
// //     console.error("Database connection failed:", error);
// //     return res.status(500).json({ error: "Internal server error" });
// //   }
// // }

// // api/index.js
// import { connectToDB } from "../db.js";
// import app from "../app.js";

// // Manually set CORS headers here
// function setCorsHeaders(res) {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
// }

// export default async function handler(req, res) {
//   // ✅ Set CORS headers
//   setCorsHeaders(res);

//   // ✅ Handle preflight requests (CORS "OPTIONS" request)
//   if (req.method === "OPTIONS") {
//     return res.status(200).end();
//   }

//   try {
//     await connectToDB();
//     return app(req, res); // 👈 Pass to Express
//   } catch (error) {
//     console.error("Database connection failed:", error);
//     return res.status(500).json({ error: "Internal server error" });
//   }
// }
// api/index.js
import { connectToDB } from "../db.js";
import app from "../app.js";

const FRONTEND = "http://localhost:5173";

function setCorsHeaders(res) {
  res.setHeader("Access-Control-Allow-Origin", FRONTEND);
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", "true");
}

export default async function handler(req, res) {
  setCorsHeaders(res);

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    await connectToDB();
    return app(req, res);
  } catch (err) {
    console.error("DB connection failed:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
