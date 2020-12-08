DROP DATABASE IF EXISTS employee_tracker;
CREATE database employee_tracker;

USE employee_tracker;

CREATE TABLE department(
	 id INT NOT NULL AUTO_INCREMENT PRIMARY KEY
	, department_name VARCHAR(30) NULL  
);

CREATE TABLE role(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY
  , title VARCHAR(30) NULL
  , salary DECIMAL(10, 3) NULL
  , department_id INT NULL
  , FOREIGN KEY(department_id) REFERENCES department(id)
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY
, first_name VARCHAR(30)
, last_name VARCHAR(30)
, role_id INT
, manager_id INT
, CONSTRAINT fk_role_id FOREIGN KEY(role_id) REFERENCES role(id)
, CONSTRAINT fk_manager_id FOREIGN KEY(manager_id) REFERENCES employee(id)
);