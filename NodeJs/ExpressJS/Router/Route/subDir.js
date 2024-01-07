const express = require("express");
const router = express.Router();
const path = require("path");

// Serving static files from the "public" directory
router.use(
  "/subDir",
  express.static(path.join(__dirname, "..", "..", "public"))
);

// Handling the root and /index(.html) routes
router.get("^/$|/index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "src", "SubDir", "index.html"));
});

module.exports = router;
