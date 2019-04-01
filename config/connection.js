// require mysql & setup the code to connect Node to MySQL.
var mysql = require("mysql");

/* 5Part	Two:	Hooking	Your	Project	withJawsDB	10.
In	your	connection.js(or	whichever	fileyoucreatedyour	MySQL	connection),	
add	the	code	shownin	the	image	below	(additionshighlighted):  */
var connection;

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Exito2019*",
    database: "burgers_db"
  });
};

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log(`
  Connected as id: ${connection.threadId}
  Database Name: ${connection.config.database}
  `);
});
// Export the connection.
module.exports = connection;