import dotenv from "dotenv";
import app from "./app.js"; // ✅ Import your configured Express app
import { connectToDB } from "./db.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const DB_URI = process.env.DB_URI 

// app.listen(PORT, () => {
//   console.log(`[server]: Running on port ${PORT}`);
//   connectToDB();
// });

// export default async function handler(req, res) {
//   try {
//     await connectToDB();
//   } catch (error) {
//     console.error("Database connection failed:", error);
//     return res.status(500).json({ error: "Internal server error" });
//   }

//   app(req, res);
// }

// import dotenv from "dotenv";
// import app from "./app.js";
// import { connectToDB } from "./db.js";

// dotenv.config();

// Ensure DB is connected only once per cold start
let isConnected = false;

// export default async function handler(req, res) {
//   if (!isConnected) {
//     try {
//       await connectToDB();
//       isConnected = true;
//     } catch (error) {
//       console.error("Database connection failed:", error);
//       return res.status(500).json({ error: "Internal server error" });
//     }
//   }

//   return app(req, res); // forward request to Express app
// }

 export default async function handler(req, res) {
  try {
    await connectToDB();
  } catch (error) {
    console.error("Database connection failed:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

  app(req, res);
}
