const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const admin = require("./routes/admin");
const reviewFile = require("./routes/reviewServer");
const bodyParser = require("body-parser");
var cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  () => {
    console.log("Connected to DB");
  }
);

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "client/build")));

app.use("/review", reviewFile);
app.use("/admin", admin);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Password generator listening on ${port}`);
