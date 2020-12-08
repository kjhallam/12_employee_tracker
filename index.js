const mysql = require('mysql');
const inquirer = require('inquirer');
const table = require('console-table-printer');
const connection = require('./db/connection');
const beginScreen = ['View all Employees', 'View all Departments', 'View all Roles', 'Add Employee', 'Add Role', 'Add Department','Remove Employee', 'Update Employee Role', 'Exit']



const beginApp = () => {
    inquirer.prompt({
        name: 'selectMenu',
        type: 'list',
        message: 'Select an option',
        choices: beginScreen
    
    }).then((answer) => {
        // findAllEmployees();
        switch(answer.selectMenu) {
            case 'View all Employees':
                showAll();
                break;
            case 'View all Departments':
                showByDept();
                break;
            case 'View all Roles':
                showByRole();
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
const showAll = () => {
    connection.query('SELECT * FROM employee', 
    (err, res) => {
        if (err) throw err;
        table.printTable(res);
        console.log('All Employees');
        beginApp();
    })
}

//View by department
const showByDept = () => {
    connection.query('SELECT * FROM department',
    (err, res) => {
        if (err) throw err;
        table.printTable(res);
        console.log('All Departments');
        beginApp();
    })
}

//View by Role
const showByRole = () => {
    connection.query('SELECT * FROM role',
    (err, res) => {
        if (err) throw err;
        table.printTable(res);
        console.log('All Roles');
        beginApp();
    })
}

//Insert a new Employee
const addEmployee = () => {
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
        connection.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [res.firstName, res.lastName, res.roleID, res.managerID], function (err, res){
            if (err) throw err;
            console.log("Successfully Inserted");
            console.log(" ");
            beginApp();
        })
    })
}

// Delete an Employee
const removeEmployee = () => {
    inquirer.prompt([
        {
        type: "input",
        message: "Which employee would you like to remove? (enter first name only)",
        name: "firstName"
        }
    ]).then((res) => {
        connection.query('DELETE FROM employee WHERE first_name = (?);', [res.firstName], 
        function(err, res){
            if (err) throw err;
            console.log("Successfully Deleted");
            console.log(" ");
        beginApp();
        })
    })
}
//Update Employee Role
const updateRole = () => {
    connection.query("SELECT * FROM employee", function(err, empData){
        connection.query("SELECT * FROM role", function(err, roleData){
            let employees = empData.map((e) => e.first_name + " " + e.last_name);
            let roles = roleData.map((r) => r.title);
    inquirer.prompt([
    {
        type: "list",
        message: "Which employee would you like to update?",
        name: "name",
        choices: employees,
    },
    {
        type: "list",
        message: "Select a new role:",
        name: "title",
        choices: roles,
    }
]).then((response) => {
    let empObj = empData.find((employee) => employee.first_name + " " + employee.last_name === response.employee);
    let roleObj = roleData.find((role) => role.title === response.title);
    // Issue with Update employee (id not a function???)
    connection.query("UPDATE employee SET role_id = ? WHERE id = ?", [roleObj.id, empObj.id],
        function (err) {
            console.log("Successful Updated Employee Role");
            console.log(" ");
            beginApp();
        })
    })
  })
})
};

// Update Employee Manager
const updateEmpMgr = () => {
    inquirer.prompt([
    {
        type: "input",
        message: "Which manager needs updated?",
        name: "name"
    },
    {
        type: "number",
        message: "Enter the new manager ID: ",
        name: "manager_id"
    }
    ]).then(function(response) {
        connection.query("UPDATE `employee_tracker`.`employee` SET `manager_id` = ? WHERE (`id` ?", [response.name, response.manager_id], function (err, res) {
           console.log("Successfully Updated");
        })
        beginApp();
    })
}

const addDept = () => {
    inquirer.prompt([
    {
        type: 'input',
        message: "Enter the new Department Name: ",
        name: 'department_name',
    },

]).then((res) => {
    connection.query('INSERT INTO department (department_name) VALUES (?)', [res.department_name], function (err, res){
        if (err) throw err;
        console.log("Department Successfully Added");
        beginApp();
    })

})
}

const addRole = () => {
    inquirer.prompt([
    {
        type: 'input',
        message: "Enter the new role: ",
        name: 'title',
    },
    {
        type: 'input',
        message: "Enter the salary: ",
        name: 'salary',
    },
    {
        type: 'input',
        message: "Enter the Department ID: ",
        name: 'department_id',
    },
]).then((res) => {
    connection.query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [res.title, res.salary, res.department_id], function (err, res){
        if (err) throw err;
        console.log("Role Successfully Added");
        beginApp();
    })
})
}

beginApp();