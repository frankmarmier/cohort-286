const express = require("express");
const hbs = require("hbs");
const mongoose = require("mongoose");
require("./config/dbConnection");
const app = express();

// mongoose
//   .connect("mongodb://localhost:27017/ironhack-anime", {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//   })
//   .then(() => {
//     console.log("Connected to the database !");
//   });

const baseRoutes = require("./routes/baseRoutes");
const animeRouter = require("./routes/animes");
app.use(baseRoutes);
app.use("/animes", animeRouter);
app.listen(4444);
