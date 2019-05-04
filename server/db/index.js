var mysql = require('mysql');
var password = require('../key');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var connection = mysql.createConnection({
  user     : 'root',
  database : 'chat',
  password: password
});
 
connection.connect();

module.exports = connection;