import express from "express";
import connectDB from "./db/connectDB.js";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes.js";

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  connectDB();
  console.log(`Server is up ${port}`);
});
