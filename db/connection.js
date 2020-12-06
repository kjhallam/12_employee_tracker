
const mysql = require('mysql');
const util = require('util');

const connection = mysql.createConnection({
    host: 'localhost',

    port: 3306,
    
    user: 'root',
    password: 'nikekj43',

    database: 'employee_tracker'
});

connection.connect(function(err){
    if (err) throw err;
    console.log('connected as id ' + connect.threadId);
    beginApp()
    //employees();
})

  
  function findAllEmployees() {
    connection.query("SELECT name FROM employee list", function(err, res) {
      if (err) throw err;
  
      console.log(res);
      connection.end();
    });
  }

  connection.query = util.promisify(connection.query);

  module.exports = connection;
  
