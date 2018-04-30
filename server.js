var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var path = require("path");
// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8181;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");
app.use(express.static(path.join(__dirname, '/public')));

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});