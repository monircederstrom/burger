var connection = require("./connection.js");


var orm = function() {
    var selectAll = function() {
        connection.query("SELECT * FROM burgers;", function (err, data){
            if (err) {
                return res.status(500).end();
            }
            res.render("index", {burger: data});

            //end of connection.query for select all
        });
        //end of selectAll function
    };

    var insertOne= function() {
    
    //end of insertOne function
    };
updateOne()
};
module.exports = orm;