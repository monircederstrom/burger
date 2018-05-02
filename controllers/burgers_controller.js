var express = require("express");

var burger = require("../models/burger.js");
var router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
    var hbsObject = { burgers: data };
    console.log(hbsObject);
    res.render("index", hbsObject);
    //end of burger.selectAll
    });
//end of router.get
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne([
       "burger_name", "devoured" 
    ], [req.body.burger_name, req.body.devoured], function(result) {
        //send id back of new burger
        res.json({ id: result.insertId });
    //end of burger.insertOne
    });
//end of router.post
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.updateOne({
      devoured: req.body.devoured
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    //end of burger.updateOne
    });
// end of router.put
});

module.exports = router;