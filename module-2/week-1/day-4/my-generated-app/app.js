require("dotenv/config");
// require("dotenv").config();
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  console.log("A request is being made !!!!");
  req.toto = "Anytthing i want";
  next("TOTO IS AN ERROR");
});

app.use("/", indexRouter);
app.use("/users", usersRouter);

app.use((req, res, next) => {
  res.send("404");
});

app.use((err, req, res, next) => {
  console.log("Wohoo, there is an error");
  console.log(err);
});

module.exports = app;
