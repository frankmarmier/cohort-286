const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/guitars-fs", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((self) => {
    console.log(`Connected to ${self.connection.name}`);
  })
  .catch((error) => {
    console.log("There was an error connecting to the db", error);
  });
