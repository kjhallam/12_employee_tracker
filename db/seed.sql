USE employee_tracker;

INSERT INTO department (department_name) VALUES("Engineer");
INSERT INTO department (department_name) VALUES("Sales");
INSERT INTO department (department_name) VALUES("Art");
INSERT INTO department (department_name) VALUES("Human Resources");
INSERT INTO department (department_name) VALUES("Accounting");
INSERT INTO department (department_name) VALUES("Programming");

INSERT INTO role (title, salary, department_id) VALUES ("Lead Engineer", 150000, 1);
INSERT INTO role (title, salary, department_id) VALUES ("Sales Rep", 120000, 2);
INSERT INTO role (title, salary, department_id) VALUES ("Art Rep", 100000, 3);
INSERT INTO role (title, salary, department_id) VALUES ("HR Rep", 100000, 4);
INSERT INTO role (title, salary, department_id) VALUES ("Accountant", 110000, 5);
INSERT INTO role (title, salary, department_id) VALUES ("Programmer", 125000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("John", "Doe", 1, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Ken", "Hallam", 4, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Toni", "Reeves", 5, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("James", "Jameson", 3, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Tiffani", "Kicksey", 2, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Jimmy", "Bob", 6, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Michael", "Jordan", 7, null);
