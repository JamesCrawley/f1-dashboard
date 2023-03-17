const express = require("express");
const app = express();
const apiRoutes = require("./router");

app.get("/ping", (req, res) => {
  return res.json("pong");
});

app.use("/api", apiRoutes);

app.listen(8080, () => {
  console.log("Server started on port 8080");
});

module.exports = app;
