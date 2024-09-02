import express from "express";
import connectDB from "./db/connectDB.js";

//
import authRoutes from "./routes/authRoutes.js";

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World");
});

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  connectDB();
  console.log(`Server is up ${port}`);
});
