const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

const userRoute = require("./api/route/user.route");
const entriesRoute = require("./api/route/entries.route");

const dotenv = require("dotenv");
dotenv.config();

//database url
const url = `mongodb+srv://itscarew:${process.env.MONGODBPASSWORD}@recog-face-db.az7lq.mongodb.net/${process.env.MONGONAME}?retryWrites=true&w=majority`;
//connect to the the Database
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

//initialize app
const app = express();

//use cors
app.use(cors());

//initialize body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//initialize routes
app.use("/users", userRoute);
app.use("/entries", entriesRoute);

//production build
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

//err message that passes when a route that does not exist is passed!!
app.use((req, res, next) => {
  const error = new Error("You entered a route that does not exist !!");
  error.status = 400;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 400);
  res.json({
    err: error.message,
  });
});

module.exports = app;
