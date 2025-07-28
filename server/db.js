import mongoose from "mongoose";

export const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("[database]: Connected to MongoDB");
  } catch (error) {
    console.error("[database]: Connection failed", error);
  }
};