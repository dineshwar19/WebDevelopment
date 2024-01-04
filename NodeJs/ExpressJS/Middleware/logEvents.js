const path = require("path");
const fs = require("fs");
const fsPromises = require("fs").promises;

const logEvents = async (message, fileName = "resText.txt") => {
  try {
    const logsDirectory = path.join(__dirname, "logs");

    if (!fs.existsSync(logsDirectory)) {
      await fsPromises.mkdir(logsDirectory, { recursive: true });
    }

    await fsPromises.appendFile(path.join(logsDirectory, fileName), message);
  } catch (err) {
    console.error(err);
  }
};

module.exports = logEvents;
