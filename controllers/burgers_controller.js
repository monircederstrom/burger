var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");


router.get("/", function(req, res) {
  res.redirect("/burgers")
});
router.get("/burgers", function(req, res) {
    
  // express callback response by calling burger.selectAllBurger
  burger.selectAll(function(data) {
      var hbsObject = {burgers: data};
      console.log(hbsObject);
    //MySQL query callback will return burger_data
    res.render("index", hbsObject);
  });
});

router.post("/burgers/insertOne", function(req, res) {
    burger.insertOne(["burger_name"], [req.body.b_name], function(data) {
        //send id back of new burger
        res.redirect('/burgers')
    //end of burger.insertOne
    });
//end of router.post
});

router.put("/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.updateOne({
      'devoured': req.body.devoured}, condition, function(data) {
        res.redirect('/burgers');
      
    //end of burger.updateOne
    });
// end of router.put
});

module.exports = router;