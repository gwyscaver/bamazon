DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;
USE bamazon_DB;

CREATE TABLE products(
item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(100) NOT NULL,
department_name VARCHAR(100) NOT NULL,
price DECIMAL(10,2) NOT NULL,
stock_qty INT NOT NULL,
PRIMARY KEY(item_id)
);

INSERT INTO products(product_name, department_name, price, stock_qty)
VALUES ("tent", "outdoors", 98.47, 25);

INSERT INTO products(product_name, department_name, price, stock_qty)
VALUES ("sleeping bag", "outdoors", 36.80, 213);

INSERT INTO products(product_name, department_name, price, stock_qty)
VALUES ("latern", "outdoors", 19.97, 160);

INSERT INTO products(product_name, department_name, price, stock_qty)
VALUES ("rv class a", "transportation", 125000.00, 5);

INSERT INTO products(product_name, department_name, price, stock_qty)
VALUES ("smores", "food", 5.99, 100);

INSERT INTO products(product_name, department_name, price, stock_qty)
VALUES ("vegetarian hotdogs", "food", 6.99, 45);

INSERT INTO products(product_name, department_name, price, stock_qty)
VALUES ("cooler fridge", "outdoors", 153.00, 36);

INSERT INTO products(product_name, department_name, price, stock_qty)
VALUES ("portable stove", "outdoors", 43.88, 73);

INSERT INTO products(product_name, department_name, price, stock_qty)
VALUES ("cooking utensils", "housewares", 24.99, 87);

INSERT INTO products(product_name, department_name, price, stock_qty)
VALUES ("linens", "houswares", 57.99, 64);