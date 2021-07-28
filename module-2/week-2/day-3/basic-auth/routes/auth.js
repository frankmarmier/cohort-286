const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

const SALT = 10;

router.get("/signin", (req, res, next) => {
  res.render("auth/signin.hbs");
});

router.get("/signup", (req, res, next) => {
  res.render("auth/signup.hbs");
});

router.post("/signup", async (req, res, next) => {
  try {
    const user = req.body;

    if (!user.password || !user.email) {
      res.render("auth/signup.hbs", {
        errorMessage: "Please provide an email and a password",
      });
      return;
    }

    const foundUser = await User.findOne({ email: user.email });

    if (foundUser) {
      res.render("auth/signup.hbs", {
        errorMessage: "Email taken",
      });
      return;
    }

    const hashedPassword = bcrypt.hashSync(user.password, SALT);
    user.password = hashedPassword;

    const createdUser = await User.create(user);

    res.redirect("/auth/signin");
  } catch (error) {
    next(error);
  }
});

router.post("/signin", async (req, res, next) => {
  try {
    const foundUser = await User.findOne({ email: req.body.email });

    if (!foundUser) {
      res.render("auth/signin.hbs", {
        errorMessage: "Bad credentials",
      });
      return;
    }

    const isValidPassword = bcrypt.compareSync(
      req.body.password,
      foundUser.password
    );

    if (isValidPassword) {
      req.session.currentUser = {
        _id: foundUser._id,
      };

      res.redirect("/users/profile");
    } else {
      res.render("auth/signin.hbs", {
        errorMessage: "Bad credentials",
      });
      return;
    }
  } catch (error) {}
});

module.exports = router;
