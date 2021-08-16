// require("dotenv").config()
require("dotenv/config");
require("./config/dbConnection");

const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000", // allow a single domain
    // origin: [
    //   "http://localhost:3000",
    //   "http://localhost:3001",
    //   "www.facebook.com",
    // ], // allow several domains
    // origin: "*",  // allow any frontend domain to communicate with this API
  })
);

app.use(logger("dev"));
app.use(express.json()); // reads application/json headers and exposes data @req.body
app.use(express.urlencoded({ extended: false })); // reads application/x-www-form-urlencoded and exposes data @req.body
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

app.use("/api/fugitives", require("./routes/fugitives"));
app.use("/users", usersRouter);

module.exports = app;
