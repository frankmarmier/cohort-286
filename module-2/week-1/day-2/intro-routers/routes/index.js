const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("homePage.hbs", {
    stylesheets: ["main.css"],
  });
});

router.get("/contact", (req, res, next) => {
  res.render("contactPage.hbs");
});

module.exports = router;
