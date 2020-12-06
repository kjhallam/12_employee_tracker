const mysql = require('mysql');
const inquirer = require('inquirer');
const consTable = require('console.table');
const connection = require('./db/connection');
const beginScreen = ['View all Employees', 'View all Employees', 'Add Employee', 'Remove Employee', 'Update Employee Role', 'Add Department', 'Add Role', 'Exit']



const beginApp = () => {
    inquirer.prompt({
        name: 'selectMenu',
        type: 'list',
        message: 'Select an option',
        choices: beginScreen
    
    }).then((answer) => {
        switch(answer.selectMenu) {
            case 'View all Employees':
                showAll();
                break;
            case 'View all Employees by Department':
                showByDept();
                break;
            case 'Add Employee':
                addEmployee();
                break;
            case 'Remove Employee':
                removeEmployee();
                break;
            case 'Update Employee Role':
                updateRole();
                break;
            case 'Update Employee Manager':
                updateEmpMgr();
                break;
            case 'Add Department':
                addDept();
                break;
            case 'Add Role':
                addRole();
                break;
            case 'Exit':
                connection.end();
                break;                
        }
    })
}

//Display All employees
const showAll = () =>{
    connection.query('SELECT * FROM department, role, employee', (err, results) => {
        //if (err) throw err;
        console.log(results);
        beginApp();
    })
}

//View by department
const showByDept = () =>{
    connection.query('SELECT * FROM department', (err, results) => {
        if (err) throw err;
        console.log(results);
        beginApp();
    })
}
// Insert a new Employee
const addEmployee = () =>{
    inquirer.prompt([{
            type: 'input',
            message: "What's the employees first name?",
            name: 'firstName',
        },
        {
            type: 'input',
            message: "What's the employees last name?",
            name: 'lastName',  
        },
        {
            type: 'number',
            message: "What's the employees role ID?",
            name: 'roleID',
        },
        {
            type: 'number',
            message: "What's the employees manager's ID?",
            name: 'managerID',
        }
    ]).then((res) => {
        connection.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [res.firstName, res.lastName, res.roleID, res.managerID], function (err, results){
            if (err) throw err;
            consTable("Successfully Inserted");
        })
    })
}

    // Delete an Employee
const removeEmployee = () =>{
    inquirer.prompt([
        {
        type: "input",
        message: "Which employee would you like to remove?",
        name: "title"
        }
    ]).then((res) => {
        connection.query('DELETE FROM employee WHERE (?);', [res.employee], 
        function(err, results){
            if (err) throw err;
            console.log("Successfully Deleted");
        beginApp();
        })
    })
}
// Update Employee Role
const updateRole = () => {
    inquirer.prompt([
    {
        type: "input",
        message: "Which employee would you like to update?",
        name: "name"
    },
    {
        type: "number",
        message: "Enter new role ID",
        name: "role_id"
    }
]).then(function(response) {
    connection.query("UPDATE employee SET role_id = ? WHERE first_name = ?", [response.role_id, response.name],
        function (err, data) {
            consTable(results);
        })
        beginApp();
    })
}