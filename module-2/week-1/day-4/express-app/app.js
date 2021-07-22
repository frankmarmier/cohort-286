const express = require("express");

const app = express();

const baseRouter = require("./routes/baseRouter");

app.use(baseRouter);

// app.set("views", __dirname + "/toto");

app.listen(4444, () => {
  console.log(`Listening on http://localhost:4444`);
});
