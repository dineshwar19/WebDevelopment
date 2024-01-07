const express = require("express");
const app = express();

app.use(express.json()); //for parsing JSON in incoming requests.

app.use("/employees", require("./api"));

app.listen(8000, () => console.log("Server is running on port : 8000"));