var express = require("express");
var router = express.Router();
var userController = require("../controllers/usercontroller");

//Create account
router.post("/register", userController.register);

//Login to account
router.post("/login", userController.login);

//Forgot password

//Google authentication flow

module.exports = router;
