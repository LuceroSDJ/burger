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
var PORT = process.env.PORT || 3000;

//Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes








app.listen(process.env.PORT || 3000, function() {
    console.log("App listening on PORT: " + PORT);  //app listening ✓
});