import express from "express";
import inventoryRoutes from "./api/inventory.routes.mjs";
import { AppError } from "./errors/app-error.mjs";
import { connectDB } from "./infra/database.mjs";

const app = express();
app.use(express.json());

app.use("/inventory", inventoryRoutes);

// Global Error Handler
app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  if (err instanceof AppError) {
    res.status(err.status).json({ code: err.code, message: err.message, correlationId: err.correlationId });
  } else {
    console.error(err);
    res.status(500).json({ code: "INTERNAL_ERROR", message: "Something went wrong" });
  }
});

// Connect DB and start server
connectDB().then(() => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Inventory service running on port ${PORT}`));
});

export default app;
 
