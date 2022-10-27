var mongoose = require("mongoose");
var Schema = mongoose.Schema;
// var bcrypt = require('bcrypt');
// const saltRounds = 10;

var UserSchema = new Schema({
  createdon: { type: Date, default: Date.now },
  email: String,
  username: String,
  firstname: String,
  lastname: String,
  sketches: [{ type: Schema.Types.ObjectId, ref: "Sketches" }],
  collaborations: [{ type: Schema.Types.ObjectId, ref: "Sketches" }],
  color: String,
});

module.exports = mongoose.model("User", UserSchema);
