const logEvents = require("./events");
const EventEmitter = require("events");
const myEmitter = new EventEmitter();
myEmitter.on("log", (message) => {
  logEvents(message);
});
myEmitter.emit("log", "event emitter 2");
