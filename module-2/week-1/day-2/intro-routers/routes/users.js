const express = require("express");

const router = express.Router();
// const router = new express.Router(); // Same as above

const users = [
  { name: "Bob", age: 20, passion: "Coding" },
  { name: "Alice", age: 20, passion: "Coding" },
  { name: "John", age: 20, passion: "Skating" },
];

// http://localhost:5000/users
router.get("/", (req, res, next) => {
  res.render("usersPage.hbs");
});

//  http://localhost:5000/users/bobo
router.get("/bob", (req, res, next) => {
  res.render("userProfilePage.hbs", {
    user: users[0],
  });
});

// /users/alice
router.get("/alice", (req, res, next) => {
  res.render("userProfilePage.hbs", {
    user: users[1],
  });
});

// /users/john
router.get("/john", (req, res, next) => {
  res.render("userProfilePage.hbs", {
    user: users[2],
  });
});

module.exports = router;
