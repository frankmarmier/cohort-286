const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose
  .connect("mongodb://localhost/ironhackers", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Successfuly connected to the database !`);
  })
  .catch((error) => {
    console.log(error);
  });

const baseRouter = require("./routes/baseRouter");
const duckRouter = require("./routes/ducks");

app.use(baseRouter);
app.use(duckRouter);

// app.set("views", __dirname + "/toto");

app.listen(4444, () => {
  console.log(`Listening on http://localhost:4444`);
});
