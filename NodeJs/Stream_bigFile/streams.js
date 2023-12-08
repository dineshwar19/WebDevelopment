//Stream for copy the large file and paste it in another file.. by converting the content into small chunks

const fs = require("fs");
const path = require("path");
const rs = fs.createReadStream(path.join(__dirname, "largeData.txt"), {
  encoding: "utf8",
});
const ws = fs.createWriteStream(path.join(__dirname, "newLargeData.txt"));

// rs.on("data", (dataChunk) => {
//   ws.write(dataChunk);
// });

//efficient way
rs.pipe(ws);
