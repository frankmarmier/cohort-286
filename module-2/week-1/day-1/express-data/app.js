const express = require("express");
const hbs = require("hbs");

const app = express();

hbs.registerPartials(__dirname + "/views/partials");

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res, next) => {
  res.render("home.hbs", {
    css: ["home.css"],
    user: {
      name: "Foobarbaz",
      age: 30,
    },
  });
});

app.get("/users", (req, res, next) => {
  //   const users = ["Bob", "Alice", "John", "Toto"];
  const users = [
    {
      name: "Bob",
      age: 28,
    },
    {
      name: "Alice",
      age: 20,
    },
    {
      name: "Toto",
      age: 10,
    },
  ];

  res.render("users.hbs", {
    css: ["user.css"],
    users: users,
    isAdmin: true,
    shoes: true,
  });
});

app.listen(5000);
