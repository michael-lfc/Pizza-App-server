// api/index.js

import { connectToDB } from "../db.js";
import app from "../app.js";

// ✅ Replace this with your actual deployed frontend URL
const allowedOrigins = [
  "http://localhost:5173",
  "https://your-frontend.vercel.app"
];

function setCorsHeaders(req, res) {
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", "true");
}

export default async function handler(req, res) {
  setCorsHeaders(req, res);

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
