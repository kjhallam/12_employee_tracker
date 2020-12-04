
const mysql = require('mysql');

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
    employees();
})

  
  function findAllEmployees() {
    connection.query("SELECT name FROM employee list", function(err, res) {
      if (err) throw err;
  
      // Log all results of the SELECT statement
      console.log(res);
      connection.end();
    });
  }
  
