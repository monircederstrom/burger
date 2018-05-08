var connection = require("./connection.js");


function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objToSql(ob) {
  
  var arr = [];

  for (var key in ob) {
    arr.push(key + "=" + ob[key]);
  }

  return arr.toString();
}

var orm = {
    selectAll: function(tableInput, cb) {
      var queryString = "SELECT * FROM burgers";

      // database query
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        //results in callback
        cb(result);
            //end of connection.query for select all
            });
    //end of selectAll function
    },
    
    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO burgers";
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
    
        console.log(queryString);
    
        connection.query(queryString, vals, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        //end of connection.query
        });
        //end of insertOne function
      },
    updateOne: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + "burgers";
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
    
        console.log(queryString);
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      }
    };

module.exports = orm;