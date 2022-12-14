var jwt = require("jsonwebtoken");
var config = require("../config");
var secret = config.secret;
var appstorage = require("./nodepersist");

const middlewares = {
  SearchBlackList: function(token) {
    let array = appstorage.get("blacklist");
    return array.includes(token);
  },
  checkToken: function(req, res, next) {
    if (!req.headers.authorization) {
      return res.status(401).send({ data: "token-required" });
    }

    let token = req.header("Authorization").replace("Bearer ", "");

    if (!token) return res.status(403).send({ data: "token-required" });

    if (middlewares.SearchBlackList(token)) {
      return res.status(401).send({ data: "token-invalid" });
    }

    if (token) {
      jwt.verify(token, secret, function(err, verified) {
        if (err) {
          return res.status(401).send({ data: "token-expired" });
        } else {
          let obj = {};
          obj.token = token;
          obj.email = verified.email;
          obj._id = verified._id;
          req.verified = obj;

          next();
        }
      });
    } else {
      return res.status(401).send({ message: "token-required" });
    }
  },
};

module.exports = middlewares;
