var express = require("express");
var router = express.Router();
const requireAuth = require("../middlewares/requireAuth");

router.get("/", requireAuth, (req, res, next) => {
  res.render("form.hbs");
});

router.get("/profile", requireAuth, function (req, res, next) {
  res.render("user/profile.hbs");
});

module.exports = router;
