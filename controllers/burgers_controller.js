var express = require("express");
var burger = require("./../models/burger.js");

var router = express.Router();

router.get("/", (req, res) => {
    burger.selectAll( (data) => {
        res.render("index", { burgers: data });
    });
});

module.exports = router;