require("dotenv/config");
require("./config/dbConnection");
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const User = require("./models/User");
const MongoStore = require("connect-mongo");
const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
    // cookie: { secure: true },
  })
);

app.use((req, res, next) => {
  if (req.session.currentUser) {
    User.findById(req.session.currentUser._id)
      .then((userFromDb) => {
        res.locals.currentUser = userFromDb;
        res.locals.isLoggedIn = true;
        next();
        // res.locals.isAdmin = userFromDB.isAdmin
      })
      .catch((error) => {
        next(error);
      });
  } else {
    res.locals.currentUser = undefined;
    res.locals.isLoggedIn = false;
    next();
  }
});

app.use((req, res, next) => {
  console.log(req.session);

  next();
});

// app.use((req, res, next) => {
//   res.locals.heyy = "foo";
//   next();
// });

// app.use((req, res, next) => {
//   console.log("Res locals", res.locals.heyy);
//   next();
// });

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/auth", require("./routes/auth"));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
