const express = require("express");
const path = require("path");
const app = express();
const apiRoutes = require("./api/routes");

app.use(express.static(path.join(__dirname, "build")));

app.get("/ping", (req, res) => {
  return res.send("pong!");
});

app.use("/api", apiRoutes);

app.get("*", (req, res) => {
  return res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
