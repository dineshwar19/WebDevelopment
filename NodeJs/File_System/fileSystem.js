const fs = require("fs"); // to include file system module.
const path = require("path"); // to eliminate hardcore path reference.
//all the process work asynchronously . It create confusions. so use callback method
//to read file from a computer
// fs.readFile(path.join(__dirname, "Files", "new.txt"), "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// //to write a file
// fs.writeFile(
//   path.join(__dirname, "Files", "new.txt"),
//   "new message from the write file",
//   (err) => {
//     if (err) throw err;
//     console.log("Write completed");
//   }
// );

// // to append a content in a existing file
// fs.appendFile(
//   path.join(__dirname, "Files", "new.txt"),
//   " it is the content from the appending",
//   (err) => {
//     if (err) throw err;
//     console.log("append completed");
//   }
// );

// //to rename a file
// fs.rename(
//   path.join(__dirname, "Files", "new.txt"),
//   path.join(__dirname, "Files", "new.txt"),
//   (err) => {
//     if (err) throw err;
//     console.log("rename completed");
//   }
// );

// //to open a file
// fs.open(path.join(__dirname, "Files", "new.txt"), "w", (err) => {
//   if (err) throw err;
//   console.log("opened");
// });

// //to delete a file
// fs.unlink(path.join(__dirname, "Files", "new.txt"), (err) => {
//   if (err) throw err;
//   console.log("deleted");
// });

// callback method
// fs.readFile(path.join(__dirname, "Files", "new.txt"), "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
//   fs.writeFile(
//     path.join(__dirname, "Files", "new.txt"),
//     "new message from the write file",
//     (err) => {
//       if (err) throw err;
//       console.log("Write completed");
//       fs.appendFile(
//         path.join(__dirname, "Files", "new.txt"),
//         " it is the content from the appending",
//         (err) => {
//           if (err) throw err;
//           console.log("append completed");
//           fs.rename(
//             path.join(__dirname, "Files", "new.txt"),
//             path.join(__dirname, "Files", "new.txt"),
//             (err) => {
//               if (err) throw err;
//               console.log("rename completed");
//               fs.open(path.join(__dirname, "Files", "new.txt"), "w", (err) => {
//                 if (err) throw err;
//                 console.log("opened");
//                 fs.unlink(path.join(__dirname, "Files", "new.txt"), (err) => {
//                   if (err) throw err;
//                   console.log("deleted");
//                 });
//               });
//             }
//           );
//         }
//       );
//     }
//   );
// });

// process.on("uncaughtException", (err) => {
//     console.log(`There was an unCaught error: ${err}`);
//     process.exit(1);
//   });

//it creates a callback hell :( !!!!!!. so use async await

//to use async await in node js
const fsPromises = require("fs").promises;
const fsOperations = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "Files", "new.txt"),
      "utf8"
    );
    console.log(data);
    await fsPromises.writeFile(
      path.join(__dirname, "Files", "new.txt"),
      "hello world full of surprises..."
    );
    console.log("file written");
    await fsPromises.appendFile(
      path.join(__dirname, "Files", "new.txt"),
      " hey you r my world raa..."
    );
    console.log("appended");
    fsPromises.rename(
      path.join(__dirname, "Files", "new.txt"),
      path.join(__dirname, "Files", "renamed.txt")
    );
    console.log("renamed");
  } catch (err) {
    console.error(err);
  }
};

fsOperations();