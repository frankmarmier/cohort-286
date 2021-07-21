const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/anime", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to the database !");
  });
