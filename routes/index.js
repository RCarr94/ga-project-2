const express = require("express");
const passport = require("passport");

const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.redirect("/trails");
});

//Login
router.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

//Auth Callback Route

//Google OAuth CB Route
router.get(
  "/oauth2callback",
  passport.authenticate("google", {
    successRedirect: "/trails",
    failureRedirect: "/trails",
  })
);

//OAuth Logout Route
router.get("/logout", function (req, res) {
  req.logout(function () {
    res.redirect("/trails");
  });
});

module.exports = router;
