// api/index.js
import { connectToDB } from "../db.js";
import app from "../app.js";

export default async function handler(req, res) {
  try {
    await connectToDB();
    return app(req, res); // 👈 Adapts Express to serverless
  } catch (error) {
    console.error("Database connection failed:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
