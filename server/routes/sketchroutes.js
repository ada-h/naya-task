var express = require("express");
var router = express.Router();
var sketchController = require("../controllers/sketchcontroller");

//Save sketches
router.post("/sketch/create", sketchController.create);

//Get all sketches
router.get("/sketch/all", sketchController.allsketches);

//Get all users sketches

//Get one sketch

module.exports = router;
