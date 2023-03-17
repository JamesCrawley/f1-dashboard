const express = require("express");
const router = express.Router();

router.get("/ping", (req, res) => {
  return res.json("pong");
});

router.post("/test", (req, res) => {
  return res.json("api response");
});

module.exports = router;
