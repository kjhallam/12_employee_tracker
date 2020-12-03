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

const showAll = () =>{

}

const showByDept = () =>{

}

const showByMgr = () =>{

}

const addEmployee = () =>{

}

const removeEmployee = () =>{

}

const updateRole = () =>{

}

const updateEmpMgr = () =>{

}

const addDept = () =>{

}

const addRole = () =>{

}

beginApp();