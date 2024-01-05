const express = require("express");
const app = express();

app.use("^/$|/index(.html)?", require("./Route/subDir"));


app.listen(8000 , () => console.log("the server is running on 8000"))