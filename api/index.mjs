import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import routes from "./routes/index.mjs";
import { verifyToken } from "./utils/jwtToken.mjs";

const port = process.env.PORT || 8080;
const db_url = process.env.DB_URL;
const app = express();
const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());
app.use(verifyToken);
app.use("/api", routes);

app.get("/", (req, res) => {
  return res.send({ hello: "world" });
});

mongoose
  .connect(db_url)
  .then(() => {
    console.log(`Your database is successfully connected to the database!!`);
    app.listen(port, () => {
      console.log(`Your server is running on port : ${port}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
