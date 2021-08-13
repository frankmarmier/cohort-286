require("dotenv").config();
require("./config/dbConnection");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000", // Authorize this client to communicate with the api
  })
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/guitars", require("./routes/guitars"));

app.use((req, res, next) => {
  res.status(400).json({ message: "Resource not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json(err);
});

module.exports = app;
