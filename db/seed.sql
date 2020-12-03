USE employee_tracker;

INSERT INTO department (name)
VALUES
	  ('Managment')
	, ('Sales')
    , ('Art')
    , ('Accounting')
    , ('Human Resources')
    , ('Programming');
    
INSERT INTO role (title, salary, department_id)
VALUES
	  ('Regional Manager', 120000, 1)
    , ('Sales Rep', 68000, 2)
    , ('HR Rep', 72000, 3)
    , ('Art Rep', 45000, 4)
    , ('Accountant', 90000, 5)
    , ('Programmer', 55000, 6);
    
INSERT INTO employee(first_name, last_name, role_id)
VALUES
  ('Janet', 'Riggin', 1)
, ('Tiffani', 'Kicksey', 6)
, ('James', 'Jameson', 7)
, ('Jill', 'Croston', 5)
, ('Toby', 'Majors', 3)
, ('Darrel', 'Thomas', 2);

UPDATE `employee_tracker`.`employee` SET `manager_id` = '1' WHERE (`id` > '1');