const mysql = require('mysql');
const inquirer = require('inquirer');
const consTable = require('console.table');
const connection = require('./db/connection.js');
const beginScreen = ['View all Employees', 'View all Employees', 'View all Employees by Manager', 'Add Employee', 'Remove Employee', 'Update Employee Role', 'Add Department', 'Add Role', 'Exit']


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
            case 'View all Employees by Manager':
                showByMgr();
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
// TODO: connect to database - (2) query/retrieve data from employee table (3) display data from employee in a table (4) display questions again 
}
//View by department
const showByDept = () =>{

}
// View by the manager selection
const showByMgr = () =>{

}
// Insert a new Employee
const addEmployee = () =>{
//TODO's INSERT - Prompt input 
}
// Delete an Employee
const removeEmployee = () =>{
//TODO's DELETE - Prompt input 
}
// Update Employee Role
const updateRole = () =>{

}
// Update Employee Manager
const updateEmpMgr = () =>{

}
// Insert a new Department
const addDept = () =>{

}
// Insert a new Role
const addRole = () =>{

}

beginApp();