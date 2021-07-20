const express = require("express");
const hbs = require("hbs");

const _PORT = 5000;

const app = express();

app.use(express.static(__dirname + "/public"));

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

app.use(indexRouter);

// All the routes inside usersRouter are prefixed with
// with /users (meaning you don't have to write it)

app.use("/users", usersRouter);

app.listen(_PORT, () => {
  console.log(`Listening on http://localhost:${_PORT}`);
});
