const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true,
  })
  .then((x) => {
    console.log(`Connected to ${x.connection.name}`);
  })
  .catch((error) => {
    console.log(error);
  });
