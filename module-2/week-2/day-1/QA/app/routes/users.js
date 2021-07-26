const express = require("express");
const router = express.Router();
const Cat = require("../models/Cat");

router.get("/", function (req, res, next) {
  res.render("form.hbs");
});

router.post("/", (req, res, next) => {
  console.log(req.body, "req body");
  Cat.create(req.body)
    .then((dbRes) => {
      res.redirect("/");
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
