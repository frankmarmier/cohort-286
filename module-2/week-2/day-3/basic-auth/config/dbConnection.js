const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Yay connected to the DB !");
  })
  .catch((err) => {
    console.log(error);
  });
