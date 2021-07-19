const express = require("express");

const PORT = 5000;
const app = express();

app.use(express.static(__dirname + "/public"));

app.use("/", (request, response, next) => {
  /* Respond with a resource */
});

app.listen(PORT);
