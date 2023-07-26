import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

const port = process.env.HTTP_PORT || 3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
