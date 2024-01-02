const fs = require("fs");
const path = require("path");
// console.log(path.join(__dirname,"Stream.html"))
const http = require("http");

http
  .createServer((req, res) => {
    const q = "." + req.url;
    fs.readFile(q, (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end("404 not found...");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        return res.end(data);
      }
    });
  })
  .listen(8000);
