DROP DATABASE IF EXISTS employee_tracker;
CREATE database employee_tracker;

USE employee_tracker;

CREATE TABLE department (
	id INT NOT NULL auto_increment PRIMARY KEY
  , name VARCHAR(30)
);

CREATE TABLE role (
    id INT NOT NULL auto_increment PRIMARY KEY
  , title VARCHAR(30)
  , salary DECIMAL(8, 2)
  , department_id INT
  , constraint department_id_fk FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee (
  id INT NOT NULL auto_increment PRIMARY KEY
, first_name VARCHAR(30)
, last_name VARCHAR(30)
, role_id INT
, constraint role_id_fk FOREIGN KEY (role_id) REFERENCES role(id)
, manager_id INT
, constraint manager_id_fk FOREIGN KEY (manager_id) REFERENCES employee(id)
);

