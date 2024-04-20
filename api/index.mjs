import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import routes from "./routes/index.mjs"

const port = process.env.PORT || 8080;
const db_url = process.env.DB_URL;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());
app.use("/api", routes);

app.get("/", (req, res) => {
  return res.send({hello : "world"});
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
