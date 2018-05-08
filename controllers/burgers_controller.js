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

router.post("/burgers", function(req, res) {
    burger.insertOne(["burger_name", "devoured"], [req.body.b_name, false], function(result) {
        //send id back of new burger
        res.json({ id: result.insertID });
       
    //end of burger.insertOne
    });
    res.redirect('/burgers')
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