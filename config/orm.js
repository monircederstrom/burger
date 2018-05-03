var connection = require("./connection.js");

//function objToSql(ob) {
  //var arr = [];

  // loop through the keys and push the key/value as a string int arr
  //for (var key in ob) {
    //var value = ob[key];
    // check to skip hidden properties
    //if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      //if (typeof value === "string" && value.indexOf(" ") >= 0) {
        //value = "'" + value + "'";
     // }
      // e.g. {name: 'BigMac'} => ["name='BigMac'"]
      // e.g. {devoured: true} => ["devoured=true"]
      //arr.push(key + "=" + value);
   // }
  //}

  // translate array of strings to a single comma-separated string
  //return arr.toString();
//}

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result) { 
            if (err) { throw err;
            }
            cb(result);
            //end of connection.query for select all
            });
    //end of selectAll function
    },
    
    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + burger;
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
        var queryString = "UPDATE " + burgers;
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