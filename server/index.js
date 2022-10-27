let config = require("./config");

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

let mongoose = require("mongoose");

// configure the app to handle CORS requests

app.use(cors());

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "x-access-token,X-Requested-With,Content-Type,Authorization"
  );
  res.setHeader("X-Powered-By", "Lucky Lucciano");
  next();
});

app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect(config.database, {
  useUnifiedTopology: true,
  // useFindAndModify: false,
  useNewUrlParser: true,
});

const userRoutes = require("./routes/userroutes");

// support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
  next();
});

app.use("/", userRoutes);

app.use(function(req, res) {
  return res
    .status(404)
    .send({ message: "The url you visited does not exist" });
});

app.listen(config.port, () => {
  console.log(`App listening at http://localhost:${config.port}`);
});
