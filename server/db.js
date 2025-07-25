import mongoose from "mongoose";

let isConnected = false;

const connectToDB = async () => {
  if (isConnected) return;

  try {
    await mongoose.connect(process.env.DB_URI); // ✅ no options needed in Mongoose 6+
    isConnected = true;
    console.log("[database]: Connected to MongoDB");
  } catch (error) {
    console.error("[database]: Connection failed", error);
    throw error;
  }
};

export default connectToDB;
