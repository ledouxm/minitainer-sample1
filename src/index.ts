import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", (_req, res) => {
  res.send("Hello World2!");
});

const port = process.env.HTTP_PORT || 3000;
const host = process.env.HTTP_HOST || "localhost";

app.listen(Number(port), host, () => {
  console.log(`Server is listening on port: ${port}`);
});
