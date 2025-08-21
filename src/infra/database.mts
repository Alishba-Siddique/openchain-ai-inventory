// inventory/src/infra/database.mts
import mongoose from "mongoose";
import { logger } from "../utils/logger.mjs";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/inventory');
    logger.info("MongoDB connected");
  } catch (err: any) {
    console.log("Mongo url:",process.env.MONGO_URI);
    logger.error("MongoDB connection error:", err);
    process.exit(1);
  }
};
