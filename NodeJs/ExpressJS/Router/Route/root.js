const express = require("express");
const router = express.Router();
const path = require("path");


router.get("^/$|/index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "src", "index.html"));
});

router.get("/new-page(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "src", "new-page.html"));
});

router.get("/*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "..", "..", "src", "404-html.html"));
});

module.exports = router;
