var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router()


router.get("/", (req, res) => {
    models.selectAll( (data) => {
        res.render("index", { burgers: data });
    });
});

module.exports = router;