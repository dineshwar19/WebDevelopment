const http = require("http");
// const url = require("url");
const path = require("path");
const fs = require("fs");
const fsPromises = require("fs").promises;

const urlPromise = async () => {
  try {
    http
      .createServer(async (req, res) => {
        const reqUrl = "." + req.url;
        const contentType = getContentType(reqUrl);
        try {
          const data = await fsPromises.readFile(reqUrl);
          res.writeHead(200, { "Content-Type": contentType });
          console.log("accessed");
          res.end(data);
        } catch (error) {
          res.writeHead(404, { "Content-Type": "text/plain" });
          console.log("Error:" + error.message);
          res.end("File not found");
        }
      })
      .listen(8000, () => console.log("server is running on port 8000"));
  } catch (err) {
    console.log(err.message);
  }
};

const getContentType = (filePath) => {
  const extname = path.extname(filePath);
  switch (extname) {
    case ".html":
      return "text/html";
    case ".css":
      return "text/css";
    case ".js":
      return "text/javascript";
    default:
      return "text/plain";
  }
};

urlPromise();
// http://localhost:8080/summer.html
