var express = require("express");
var bodyParser = require("body-parser");
//var methodOverride = require('method-override');

//var mysql = require("mysql");


var app = express();
//var path = require("path");
// Set the port of our application
var PORT = process.env.PORT || 3000;
// Sets up the Express app to handle data parsing
app.use(express.static("public"));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
//app.use(methodOverride('_method'));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);


//

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});