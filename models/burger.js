// Inside burger.js, import orm.js into burger.js to create functions that will interact with the database
var orm = require("../config/orm.js");

// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.


var burger = {
    selectAll: function(callback) {
    // selectAll: function(tableName, callback) {...} / orm.js
    orm.selectAll("burgers", function(res) {
        callback(res);
        });
    },

    insertOne: function(column, valOfCol, callback) {
        // insertOne: function(tableName, column, valOfCol, callback) {...} / orm.js
        orm.insertOne("burgers", column, valOfCol, function(res) {
            callback(res);
        });
    },
    
    // here we want to update devoured to true
    updateOne: function(objColVals, condition, callback) {
        // updateOne: function(tableName, objColVals, condition, callback) {...} / orm.js
        orm.updateOne("burgers", objColVals, condition, function(res) {
            callback(res);
        });
    }
};  // var burger closes

// Export at the end of the burger.js file.
module.exports = burger;