// const own = require("./ownModule");
// console.log(own.add(5,6))


// http server

const http = require("http");
const url = require("url");
const fs = require("fs");
http
  .createServer((req, res) => {
    // const query = url.parse(req.url, true).query;
    const file = "." + req.url;
    fs.readFile(file, (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end("404 not found");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      }
    });
  })
  .listen(8000);
