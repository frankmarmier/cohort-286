const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("homePage.hbs");
});

router.get("/contact", (req, res, next) => {
  res.render("contactPage.hbs");
});

module.exports = router;
