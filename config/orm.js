// Import (require) connection.js into orm.js
var connection = require("../config/connection.js");

/* =========== NOTES ============
    Object Relational Mapper (ORM)
    The ?? signs are for swapping out table or column names
    The ? signs are for swapping out other values
    These help avoid SQL injection
*/
/* =========== INSTRUCTIONS ============
    Create the methods that will execute the necessary MySQL commands in the controllers. 
    These are the methods you will need to use in order to retrieve and store data in your database.
*/

// ======= class sctivity ========
// Helper function for SQL syntax.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }

// Object for all our SQL statement functions.
// ================== selectAll() / SELECT * FROM `burgers` =========================
var orm = {
    selectAll: function(tableName, callback) {
        var queryString = "SELECT * FROM  " + tableName + ";";
        console.log("selectAll() for all our SQL statement functions created in orm.js: " + queryString);
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            console.log(result);
            callback(result);
        });
    },

// ================== insertOne() / INSERT INTO `burgers`=========================
    insertOne: function(tableName, column, valOfCol, callback) {
        //var queryString = "INSERT INTO ??";
        var queryString = "INSERT INTO " + tableName; 
        queryString += "(";
        queryString += column.toString();
        queryString += ") ";
        queryString += printQuestionMarks(vals.length);
        queryString +=") ";
    
        console.log("insertOne() for all our SQL statement functions created in orm.js: " + queryString);
        connection.query(queryString, valOfCol, function(err, result) {
            if (err) throw err;
            console.log(result);
            callback(result);
        });
    },

// =================   updateOne() / UPDATE `burgers` SET devoured = 1 (BOOLEAN/TRUE) =====================
    updateOne: function(tableName, objColVals, condition, callback) {
        var queryString = "UPDATE " + tableName;
        queryString += "SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition; 

        console.log("updateOne() for all our SQL statement functions created in orm.js: " + queryString);
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            console.log(result);
            callback(result);
        });
    }
};
      
// Export the orm object for model burger.js
module.exports = orm;