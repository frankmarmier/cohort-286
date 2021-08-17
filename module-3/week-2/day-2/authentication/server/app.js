require("dotenv/config");
require("./config/dbConnection");
const express = require("express");
const path = require("path");

const logger = require("morgan");
const cors = require("cors");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000", // Allow client to interact with this API
    credentials: true, // Allow client to send cookies
  })
);

app.use(logger("dev")); // logs requests to the console
app.use(express.json()); // exposes data with the Content-Type application/json  @req.body
app.use(express.urlencoded({ extended: false })); // exposes data with the Content-Type application/x-www-form-urlencoded  @req.body
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI }), // Persist session in database.
    cookie: {
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    },
    resave: true,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
  })
);

app.use((req, res, next) => {
  console.log(req.session);
  next();
});

app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/users"));

/**
 * Error handling middlewares
 */
// 404
app.use((req, res, next) => {
  res
    .status(404)
    .json({ message: "The url you're looking for does not exist" });
});

// Server errors
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV !== "production") {
    console.error(err);
  }
  console.log("An error occured");
  res.status(err.status || 500);

  if (!res.headersSent) {
    // A limited amount of information sent in production
    if (process.env.NODE_ENV === "production") {
      res.json(err);
    } else {
      res.json(
        JSON.parse(JSON.stringify(err, Object.getOwnPropertyNames(err)))
      );
    }
  }
});

module.exports = app;
