const express = require("express");
const router = express.Router();

router.get("/ping", (req, res) => {
  return res.send("api pong!");
});

module.exports = router;
