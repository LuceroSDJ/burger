// ============ DEPENDENCIES =========
// Require express
var express = require('express');

/* ================= NOTES ============================
    In order to implement Express as the HTTP server for this node.js app,
    we must create an instance of Express and begin listening on a port (add app.listen(port) at the end of this file)
*/

// Set up the Express App & create the required instance of Express to act as the HTTP server for this application.
var app = express();
// Define localhost PORT we want to listen to
var PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

//Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(process.env.PORT || 8080, function() {
    console.log("App listening on PORT: " + PORT);  //app listening ✓
});