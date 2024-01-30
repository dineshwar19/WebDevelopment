const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const logEvents = require("../Middleware/logEvents");
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "..", "/public")));
app.use((req, res, next) => {
  logEvents(
    `${req.method}\t${req.url}\t${req.headers.origin}\n`,
    "reqText.txt"
  );
  // req.headers.origin is used to define the origin of the url like if this server is accessed by google . it shows the www.google.com
  console.log(`${req.method}\t${req.url}`);
  next();
});

app.get("^/$|/index(.html)?", (req, res) => {
  //if we give either / or /index.html it shows only index.html file ,because we use reg exp ^/$ | /index.html
  // if sometime client may use /index instead of /index.html.so we use reg exp to resolve the issue by /index(.html)? which means either .html or not it give the same file
  res.sendFile(path.join(__dirname, "..", "src", "index.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
