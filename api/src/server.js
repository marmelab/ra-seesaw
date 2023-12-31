import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

var app = express();

app.use("/v3", express.static(path.join(__dirname, "../../admin-v3/dist")));
app.use("/v4", express.static(path.join(__dirname, "../../admin-v4/dist")));

app.listen(4000, () =>
  console.log("Express Server Now Running On localhost:4000/")
);
