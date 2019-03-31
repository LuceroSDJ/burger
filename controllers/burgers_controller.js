/* Inside the burgers_controller.js file, import the following:
    Express
    burger.js */

var express = require("express");

/* =============== DOCUMENTATION ================================
    Use the express.Router class to create modular, mountable route handlers.
    A Router instance is a complete middleware and routing system; for this reason, 
    it is often referred to as a “mini-app”. 
*/
// since we are designing our routes in this file( not server.js), we use express.Route() instead of app.get (app being an instance of express)
var router = express.Router();  //saturday class: new line for me: do research abt it( see documentation)

// import the model to use its 'database functions' which interacts with the 'database' using orm.js 
var burger = require("../models/burger.js");

// Create the router for the app, and export the router at the end of your file.
// define the home page route
router.get("/", function(req, res) {  // URL andler
    burger.selectAll(function(data) {  //this is my callback function
        // ==== {burgers:data} is the data we want to send into the {{ variable }} in our index.handlebars ====
        // in other words, we are sending data through our express expression to the front end using handlebars
        var hndbarsObject = {
            burgers: data
        };
        //console.log(hndbarsObject);  //works as expected
        res.render("index", hndbarsObject);
    });
}); //router closes

//insertOne() callback function & router.post()
router.post("/api/burgers", function(req, res) {
    burger.insertOne([
        "burger_name", "devoured"
    ], [
        req.body.name, false
    ], function(result) { //user input
        //send back the id of the new hamburguer
        res.json({id: result.insertId});  
        //res.redirect("/burgers");
    });
});

//updateOne() callback & router.put
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.updateOne({
        devoured: req.body.true  //devoured must be updated to true
    }, condition, function(result) {
        if(result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
 
// Export the router
module.exports = router;