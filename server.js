var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");
var app = express();
var path = require("path");
var exphbs = require("express-handlebars");
var router = require("./controllers/burgers_controller.js")
// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8181;

// Sets up the Express app to handle data parsing
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//makes our public files able to see



app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


//

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});