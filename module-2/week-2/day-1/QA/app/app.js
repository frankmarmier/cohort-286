// require("dotenv/config");
require("dotenv").config();
console.log("PROCESS ENV", process.env.PORT);
require("./config/dbConnection");
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

app.use((req, res) => {
  // save it somewhere in a file or DB
  // next()
});

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use((req, res, next) => {
//   console.log("Request is coming by !");
//   next("toto");
// });

app.locals.FOOOOOOOOO = "Wazzup";

app.use((req, res, next) => {
  if (Math.random() > 0.5) {
    res.locals.ANOTHERONE = "YAAAAAAAAAAAAY";
  }
  next();
});

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
// error handler

// everytime you call next("something")
// you will end up in this middleware !
app.use(function (err, req, res, next) {
  console.log("I am the error !");
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
