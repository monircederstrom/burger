var connection = require("./connection.js");


var orm = function() {
    var selectAll = function() {
        
        connection.query("SELECT * FROM burgers;", function (err, data){
            if (err) {
                return res.status(500).end();
            }
            res.render("index", {burger_name: data});

            //end of connection.query for select all
        });
       
    //end of selectAll function
    };
    
    var insertOne = function() {
            connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (?)", [req.body.burger_name, req.body.devoured], function(err, result) {
              if (err) {
                return res.status(500).end();
              }
          
              // Send back the ID of the new todo
              res.json({ id: result.insertId });
              console.log({ id: result.insertId });
            });
    //end of insertOne function
    };
    var updateOne = function() {
        connection.query("UPDATE burgers SET burger_name = ? WHERE id = ?", [req.body.burger_name, req.params.id], function(err, result) {
              if (err) {
                // If an error occurred, send a generic server failure
                return res.status(500).end();
              }
              else if (result.changedRows === 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
              }
              res.status(200).end();
          
            });
     // end of updateOne function   
    };
// end of orm module
};
module.exports = orm;