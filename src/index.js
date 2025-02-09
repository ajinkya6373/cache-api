import express from "express";
import cacheRoutes from "./routes/cacheRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();
app.use(express.json());

// Register Routes
app.use("/cache", cacheRoutes);

// Global Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
