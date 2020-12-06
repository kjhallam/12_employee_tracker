//=====================<SHOW ALL SECTION>=============

const inquirer = require("inquirer");

//Display All employees
const showAll = () =>{
    // TODO: (1) connect to database
        connection.query('SELECT * FROM department, role, employee', (err, results) => {
            if (err) throw err;
        inquirer.prompt([
            
        ])
            
        })
     
        beginApp();
    }



