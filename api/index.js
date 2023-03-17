const express = require("express");
const app = express();
const apiRoutes = require("./routes");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use("/api", apiRoutes);

app.listen(8080, () => {
  console.log("Server started on port 8080");
});

module.exports = app;
