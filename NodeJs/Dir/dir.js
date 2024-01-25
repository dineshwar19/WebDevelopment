const fs = require("fs");
if (!fs.existsSync("./new")) {
  fs.mkdir("./new", (err) => {
    if (err) throw err;
    console.log("directory created");
  });
} else {
    fs.rmdir("./new", (err) => {
        if (err) throw err;
        console.log("directory deleted");
      });
}

process.on("uncaughtException", (err) => {
  console.log(err);
  process.exit(1);
});

//to check there is a same directory is present in that path - use fs.existsync
//to create directory mkdir
//to remove directory rmdir
