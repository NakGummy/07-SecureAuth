import express from "express";
import connectDB from "./db/connectDB.js";

//
import authRoutes from "./routes/authRoutes.js";

const port = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World");
});

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  connectDB();
  console.log(`Server is up ${port}`);
});
