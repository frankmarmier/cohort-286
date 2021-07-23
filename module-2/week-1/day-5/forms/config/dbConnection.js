const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/super-cats", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((dbConnection) => {
    console.log(`Connected to ${dbConnection.connection.name}`);
  })
  .catch((error) => {
    console.log(
      "Woopsie there has been an error connecting to the db !",
      error
    );
  });
