const express = require("express");

const router = express.Router();
// const router = new express.Router(); // same as above

router.get("/", (req, res, next) => {
  res.render("home.hbs");
});

module.exports = router;
