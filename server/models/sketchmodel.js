var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SketchSchema = new Schema({
  createdon: { type: Date, default: Date.now },
  name: String,
  description: String,
  public: Boolean,
  collaborators: [{ type: Schema.Types.ObjectId, ref: "User" }],
  owner: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Sketches", SketchSchema);
