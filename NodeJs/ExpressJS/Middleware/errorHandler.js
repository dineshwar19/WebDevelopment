const logEvents = require("./logEvents");

const errorHandler = (err, req, res, next) => {
  logEvents(`${err.name}\t${err.message}\n` , 'errText.txt');
  console.error(err.stack);
  res.status(500).send(err.message);
  next();
};

module.exports = errorHandler;