import app from "../app.js";
import { connectToDB } from "../db.js";

export default async function handler(req, res) {
  try {
    await connectToDB();
    return app(req, res); // delegate to Express
  } catch (err) {
    console.error("DB connection failed:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
