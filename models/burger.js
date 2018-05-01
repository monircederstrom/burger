var orm = require("orm");

var models = function() {
    app.get("/", function(req, res) {
        orm.selectAll()
    //end of app.get
    });
    app.post("/api", function(req, res) {
        orm.insertOne();
    //end of app.post
    });
    app.put("/api/:id", function(req, res) {
        orm.updateOne();
    // end of app.put
    });


//end of models function    
};

module.exports = models;