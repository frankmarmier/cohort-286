// require("dotenv").config()
require("dotenv/config");
require("./config/dbConnection");

const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const app = express();

/**
 * Middlewares
 */
//  https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin
// This middleware is required to authorize a client browser application hosted on a different domain

app.use(
  cors({
    origin: "http://localhost:3000", // allow a single domain
    // origin: [
    //   "http://localhost:3000",
    //   "http://localhost:3001",
    //   "www.facebook.com",
    // ], // allow several domains
    // origin: "*",  // allow any browser  domain to communicate with this API
  })
);

app.use(logger("dev")); // Logs http requests to the console
app.use(express.json()); // reads application/json headers and exposes data @req.body
app.use(express.urlencoded({ extended: false })); // reads application/x-www-form-urlencoded and exposes data @req.body

// app.use(express.static(path.join(__dirname, "public"))); // NOT NEEDED FOR NOW

/**
 * Routes
 */

app.use("/api/fugitives", require("./routes/fugitives"));

/**
 * Error handling middlewares
 */

module.exports = app;
