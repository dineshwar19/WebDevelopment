const express = require("express");
const app = express();
const path = require("path");
const logEvents = require("./Middleware/logEvents");
const PORT = 8000;
const cors = require("cors");
const errorHandler = require("./Middleware/errorHandler");

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// npm install cors
// user Defined middleware to log the changes occur in the url in the logs folder
// but when using cors , The server public to all . It causes the attacks etc . so it is neccessary to provide accessibility to cors by defining accessible url (whitelist url)
// function for cors URLS options:
const whitelist = [
  "http://localhost:8000",
  "https://www.somesite.com",
  "http://mysite.com",
  "http://goo.com",
];
const corsOptions = {
  origin: (origin, callback) => {
    // Allow same-origin requests
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions)); //CORS - Cross Origin Resourse Sharing , which is used to share third party resource, used when the server is accessed by other third party url , then it will shows in the req.headers.origin


app.use((req, res, next) => {
  logEvents(
    `${req.method}\t${req.url}\t${req.headers.origin}\n`,
    "reqText.txt"
  );
  // req.headers.origin is used to define the origin of the url like if this server is accessed by google . it shows the www.google.com
  console.log(`${req.method}\t${req.url}`);
  next();
});
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

app.use(express.static(path.join(__dirname, "/public"))); //used to provide static content to the web page priorly.
//in this file the /index provide index.html to the browser . the index.html needs index.css , but the css file is not provided with the index.html so it is provided by static method

// Routing
app.get("^/$|/index(.html)?", (req, res) => {
  //if we give either / or /index.html it shows only index.html file ,because we use reg exp ^/$ | /index.html
  // if sometime client may use /index instead of /index.html.so we use reg exp to resolve the issue by /index(.html)? which means either .html or not it give the same file
  res.sendFile(path.join(__dirname, "src", "index.html"));
});

//******************************************************************* */

//redirect a page from new url to old url

app.get("/new-page(.html)?", (req, res) => {
  // new page
  res.sendFile(path.join(__dirname, "src", "new-page.html"));
});
app.get("/old-page(.html)?", (req, res) => {
  res.redirect(301, "new-page.html"); // 301 status code means url changed permanently
}); // the both get method exist then only the redirect is possible

//******************************************************************* */

// --------------------------------------------------------------------
//chain routing
app.get(
  "/new(.html)?",
  (req, res, next) => {
    console.log("1st route");
    next();
  },
  (req, res) => {
    res.send("chain routing");
  }
);

//chain routing(multiple items)

app.get(
  "/new1(.html)?",
  (req, res, next) => {
    console.log("1");
    next();
  },
  (req, res, next) => {
    console.log("2");
    next();
  },
  (req, res, next) => {
    res.send("the last route");
  }
);

//or

const one = (req, res, next) => {
  console.log("1");
  next();
};
const two = (req, res, next) => {
  console.log("2");
  next();
};

const final = (req, res) => {
  res.send("The last route");
};

app.get("/simplest", [one, two, final]);

// ---------------------------------------------------------------------

// to handle error url or mis spelled url(404)
app.get("/*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "src", "404-html.html")); //status(404) tells the file is not found in the server in console pannel in inspect. it is the right way
});

//effective alternate for error handle for differnt types like html , json, text etc,
app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "src", "404-html.html"));
  } else if (req.accepts("json")) {
    res.json({ error: "404 not found" });
  } else {
    res.type("txt").send("404 Not found");
  }
});

// to handle error efficiently
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running on Port : ${PORT}`));
