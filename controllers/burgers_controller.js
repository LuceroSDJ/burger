/* Inside the burgers_controller.js file, import the following:
    Express
    burger.js */

var express = require("express");

/* =============== DOCUMENTATION ================================
    Use the express.Router class to create modular, mountable route handlers.
    A Router instance is a complete middleware and routing system; for this reason, 
    it is often referred to as a “mini-app”. 
*/
var router = express.Router();  //saturday class: new line for me: do research abt it( see documentation)

var burger = require("../models/burger.js");

// Create the router for the app, and export the router at the end of your file.
// define the home page route
router.get("/", function(req, res) {  // URL andler
    burger.selectAll(function(data) {  //this is my callback function
        var hndbarsObject = {burgers: data};
        console.log(hndbarsObject);
        res.render("index", hndbarsObject);
    });
}); //router closes

//insertOne() callback function & router.post()
router.post("/api/burgers", function(req, res) {
    burger.insertOne(["burger_name"], [req.body.name], function(result) { //user input
        //send back the id if the new hamburguer
        //res.json({id: result.insertId});
        res.redirect("/burgers");
    });
});

router.put("/burgers/update/:id", function(req, res) {
    var condition = "id = " +  req.params.id;
    burger.updateOne({devoured: req.body.devoured}, condition, function() {
        res.redirect("/burgers");
    })
})


// Export the router
module.exports = router;