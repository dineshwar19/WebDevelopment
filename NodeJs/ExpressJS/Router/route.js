const express = require("express");
const app = express();
const root = require("./Route/root");
const subDir = require("./Route/subDir");
const path = require("path");
// Set up your routes

app.use("/subDir", express.static(path.join(__dirname, "..", "public")));
app.use("/", express.static(path.join(__dirname, "..", "public")));

app.use("/subDir", subDir);
app.use("/", root);

app.listen(8000, () => console.log("The server is running on port 8000"));
