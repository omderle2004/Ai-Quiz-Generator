import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import quizRoutes from "./routes/quizRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/aiquiz")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use("/quiz", quizRoutes);

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
