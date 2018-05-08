var orm = require("../config/orm.js");

var burger =  {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        //end of orm.selectAll
        });
    //end of selectAll:
    },
    create: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(res) {
            cb(res);
        //end of orm.insertOne
        });
    //end of insertOne:
    },
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res){
            cb(res);
        //end of orm.updateOne
        });
    // end of updateOne:
    }


//end of burger function    
};

module.exports = burger;