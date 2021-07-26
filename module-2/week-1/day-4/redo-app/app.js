const express = require("express");

const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/ducks", (req, res) => {});

app.get("/something", (req, res) => {
  //   res.redirect("/ducks");
  res.render("something.hbs");
});

app.get("/foo/to/there/beer", (req, res, next) => {
  res.render("foo/beer.hbs");
});

app.listen(4000, () => {
  console.log("Listening on http://localhost:4000");
});
