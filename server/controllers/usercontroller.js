var UserModel = require("../models/usermodel");
var config = require("../config");
var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

module.exports = {
  register: async function (req, res) {
    if (!req.body.firstname) {
      return res.status(400).json({ message: "Firstname is required" });
    }
    if (!req.body.lastname) {
      return res.status(400).json({ message: "Lastname is required" });
    }
    if (!req.body.email) {
      return res.status(400).json({ message: "Email address is required." });
    }
    if (!config.validateEmail(req.body.email)) {
      return res.status(400).json({ message: "Email address is not valid." });
    }
    if (!req.body.password) {
      return res
        .status(400)
        .json({ message: "Provide a password to secure your account." });
    }

    try {
      let user = await UserModel.findOne({
        email: req.body.email.trim().toLowerCase(),
      }).exec();

      if (user) {
        return res.status(404).json({
          success: false,
          message: "User already exists.",
        });
      }

      var User = new UserModel({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
      });

      User.save(function (err, User) {
        if (err) {
          return res.status(500).json({
            message: "Error when creating User",
            error: err,
          });
        }
        return res
          .status(201)
          .json({ message: "User has been created successfully", data: User });
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error processing requests.",
        error: error,
      });
    }
  },

  login: async function (req, res) {
    if (!req.body.email)
      return res.status(400).json({ message: "Email is required" });
    if (!req.body.password)
      return res.status(400).json({ message: "Password is required" });

    try {
      let user = await UserModel.findOne({
        email: req.body.email.trim().toLowerCase(),
      }).exec();

      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found.",
        });
      }

      let match = await bcrypt.compare(
        req.body.password.trim(),
        user.password.trim()
      );

      if (!match) {
        return res.status(404).json({
          success: false,
          message: "Email or Password is incorrect",
        });
      } else {
        var token = jwt.sign(
          {
            email: user.email,
            _id: user._id,
            role: user.role,
          },
          config.secret,
          {
            expiresIn: 86400000 * 30, // expires in 30 days
          }
        );
        return res.status(200).json({
          success: true,
          message: "Login successful!",
          token: token,
          data: user,
        });
      }
    } catch (error) {
      return res.status(500).json({
        message: "Error processing requests.",
        error: error,
      });
    }
  },
};
