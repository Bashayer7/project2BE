const express = require('express');
const passport = require('passport');
const { signUp, signIn } = require("./controller");
const router = express.Router();

router.post("/signup", signUp)
router.post("signin", passport.authenticate("local",{session: false}), signIn);

module.exports = router;