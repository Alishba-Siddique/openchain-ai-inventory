import mongoose from "mongoose";
import { logger } from "../utils/logger.mjs";

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/openchain";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    logger.info("MongoDB connected");
  } catch (err: any) {
    logger.error("MongoDB connection error:", err);
    process.exit(1);
  }
};
