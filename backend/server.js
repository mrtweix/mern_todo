import express from "express";
import cors from "cors";
import colors from "colors";
import morgan from "morgan";
import dotenv from "dotenv";
import runServer from "./utils/runServer.js";
import connectDB from "./utils/connectDB.js";
import errorHandler from "./middlewares/errorHandler.js";

// Load env vars
dotenv.config();
// Connect to database
connectDB();

// initialize app
const app = express();
// Body parser
app.use(express.json());
// Enable CORS
app.use(cors());
// logger
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Route files
import todoRoutes from "./routes/todo.route.js";
// Mount router
app.use("/api/todos", todoRoutes);
// error handler
app.use(errorHandler);

// initiate server
runServer(app);
